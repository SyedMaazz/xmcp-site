import Container from "./Container";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section className="pt-15.5">
      <Container>
        <div className="text-center flex flex-col items-center">
          {/* VERSION ROW */}
          <div className="flex items-center gap-2 text-[12px] text-white">
            <span>v0.6.2</span>

            <span className="uppercase text-[9.8px] bg-[#171717] border border-dashed border-neutral-700 px-2 py-1 text-[#a8a8a8]">
              Latest Version
            </span>
          </div>
          {/* HEADING */}
          <h1 className="mt-4.5 w-[900px] h-[160px] text-[40px] font-[350] tracking-normal text-neutral-200 leading-[46px] text-center">
            The TypeScript framework for
            <br />
            building & shipping MCP servers
          </h1>
          <HeroCanvas />
        </div>
        {/* CTA BUTTONS */}
        <div className="mt-14 flex items-center justify-center gap-2">
          <button className="bg-white text-black px-6 py-[8.5px] text-sm font-medium rounded-[2px] hover:bg-neutral-200 transition">
            Get started
          </button>

          <button className="border border-neutral-200 text-white px-5 py-[8.5px] text-sm font-medium rounded-[2px] hover:border-neutral-500 transition flex items-center gap-1">
            Deploy to
            <span className="text-sm">▲</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
