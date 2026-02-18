import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";

/* ===================== SHADERS ===================== */

const vertexShader = `
uniform vec2 uResolution;
uniform sampler2D uPictureTexture;
uniform sampler2D uDisplacementTexture;
uniform float uDisplacementStrength;
uniform float uPointSizeMultiplier;
uniform float uSmoothstepMin;
uniform float uSmoothstepMax;
uniform float uTime;
uniform float uMotionBlurStrength;
uniform vec2 uCursorVelocity;

attribute float aIntensity;
attribute float aAngle;

varying vec3 vColor;

void main() {
  vec2 adjustedUv = uv;

  float picture = texture2D(uPictureTexture, adjustedUv).r;
  float rawDisp = texture2D(uDisplacementTexture, uv).r;

  float disp = smoothstep(uSmoothstepMin, uSmoothstepMax, rawDisp);
  disp = mix(disp, rawDisp, 0.2);
  disp = pow(disp, 0.8);

  vec3 pos = position;

  vec3 dir = vec3(
    cos(aAngle),
    sin(aAngle),
    1.2
  );

  dir += vec3(uCursorVelocity * 2.0, 0.3);
  pos += normalize(dir) * disp * aIntensity * uDisplacementStrength * picture;

  pos += vec3(
    sin(uTime + aAngle) * 0.02,
    cos(uTime + aAngle) * 0.02,
    0.01
  ) * uMotionBlurStrength;

  vec4 mv = viewMatrix * modelMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  gl_PointSize =
    uPointSizeMultiplier *
    picture *
    uResolution.y *
    (1.0 / -mv.z);

 vColor = vec3(pow(picture, 0.85)) * 0.38;
}
`;

const fragmentShader = `
varying vec3 vColor;

void main() {
  vec2 uv = gl_PointCoord;
  float d = length(uv - 0.5);
  if (d > 0.5) discard;

  float alpha = 1.0 - smoothstep(0.0, 0.5, d);
  alpha = pow(alpha, 0.8);

  gl_FragColor = vec4(vColor * (1.0 + alpha), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;

/* ===================== PARTICLES ===================== */

function ParticleImage() {
  const { size, camera, viewport, pointer } = useThree();

  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const planeRef = useRef<THREE.Mesh>(null!);

  const canvasData = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 256;

    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    return {
      canvas,
      ctx,
      texture: new THREE.CanvasTexture(canvas),
      cursor: new THREE.Vector2(9999, 9999),
      prev: new THREE.Vector2(9999, 9999),
      velocity: new THREE.Vector2(),
      velocitySmoothed: new THREE.Vector2(),
      lastMove: 0,
    };
  }, []);

  const glowImg = useMemo(() => {
    const img = new Image();
    img.src = "/glow.png";
    return img;
  }, []);

  const [imageAspect, setImageAspect] = useState(1);

  const pictureTexture = useMemo(
    () =>
      new THREE.TextureLoader().load("/xmcp-hero.png", (tex) => {
        setImageAspect(tex.image.width / tex.image.height);
      }),
    [],
  );

  /* ✅ PLANE SIZE BASED ON VIEWPORT */
  const planeWidth = viewport.width * 0.8;
  const planeHeight = planeWidth / imageAspect;

  /* ✅ GEOMETRY */
  const geometry = useMemo(() => {
    if (imageAspect === 1) return null;

    const width = viewport.width * 0.8;
    const height = width / imageAspect;

    const g = new THREE.PlaneGeometry(width, height, 650, 650);
    g.setIndex(null);
    g.deleteAttribute("normal");

    const count = g.attributes.position.count;
    const intensity = new Float32Array(count);
    const angle = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      intensity[i] = Math.random();
      angle[i] = Math.random() * Math.PI * 2;
    }

    g.setAttribute("aIntensity", new THREE.BufferAttribute(intensity, 1));
    g.setAttribute("aAngle", new THREE.BufferAttribute(angle, 1));

    return g;
  }, [viewport.width, imageAspect]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        blending: THREE.AdditiveBlending,
        transparent: true,
        uniforms: {
          uResolution: { value: new THREE.Vector2() },
          uPictureTexture: { value: pictureTexture },
          uDisplacementTexture: { value: canvasData.texture },
          uDisplacementStrength: { value: 1.0 },
          uPointSizeMultiplier: { value: 0.075 },
          uSmoothstepMin: { value: 0.35 },
          uSmoothstepMax: { value: 0.82 },
          uTime: { value: 0 },
          uMotionBlurStrength: { value: 0.6 },
          uCursorVelocity: { value: new THREE.Vector2() },
        },
      }),
    [canvasData, pictureTexture],
  );

  useEffect(() => {
    const onMove = () => {
      if (!planeRef.current) return;

      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObject(planeRef.current);

      if (hits[0]?.uv) {
        canvasData.cursor.set(
          hits[0].uv.x * canvasData.canvas.width,
          (1 - hits[0].uv.y) * canvasData.canvas.height,
        );

        canvasData.lastMove = performance.now();
      }
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [camera, raycaster, canvasData, pointer]);

  useFrame(({ clock }) => {
    material.uniforms.uTime.value = clock.elapsedTime;

    material.uniforms.uResolution.value.set(
      size.width * window.devicePixelRatio,
      size.height * window.devicePixelRatio,
    );

    canvasData.velocity
      .subVectors(canvasData.cursor, canvasData.prev)
      .multiplyScalar(0.01);

    canvasData.velocitySmoothed.lerp(canvasData.velocity, 0.15);
    material.uniforms.uCursorVelocity.value.copy(canvasData.velocitySmoothed);
    canvasData.prev.copy(canvasData.cursor);

    canvasData.ctx.globalCompositeOperation = "source-over";
    canvasData.ctx.globalAlpha = 0.04;
    canvasData.ctx.fillRect(
      0,
      0,
      canvasData.canvas.width,
      canvasData.canvas.height,
    );

    const isMoving = performance.now() - canvasData.lastMove < 50;

    if (isMoving && glowImg.complete) {
      const s = canvasData.canvas.width * 0.16;
      canvasData.ctx.globalCompositeOperation = "lighten";
      canvasData.ctx.globalAlpha = 0.6;
      canvasData.ctx.drawImage(
        glowImg,
        canvasData.cursor.x - s / 2,
        canvasData.cursor.y - s / 2,
        s,
        s,
      );
    }

    canvasData.texture.needsUpdate = true;
  });

  return (
    <>
      {/* ✅ RAYCAST PLANE MATCHES PARTICLE PLANE */}
      {imageAspect !== 1 && (
        <mesh ref={planeRef} visible={false}>
          <planeGeometry
            args={[viewport.width * 0.8, (viewport.width * 0.8) / imageAspect]}
          />
          <meshBasicMaterial side={THREE.DoubleSide} />
        </mesh>
      )}

      {geometry && <points geometry={geometry} material={material} />}
    </>
  );
}

/* ===================== EXPORT ===================== */

export default function ParticleImageCanvas() {
  return (
    <div className="w-[900px] h-[420px] -mt-3">
      <Canvas
        events={undefined}
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 18], fov: 35 }}
      >
        <color attach="background" args={["#000000"]} />
        <ParticleImage />
      </Canvas>
    </div>
  );
}
