import Container from "./Container";

export default function Features() {
  return (
    <section className="mt-[139px] mr-23">
      <Container>

        <div className="mx-auto w-[880px]">

          {/* ===== EXISTING HEADING BLOCK (UNCHANGED) ===== */}
          <div className="grid grid-cols-[402px_580px] items-start mb-[50px]">

            <div>
              <span className="uppercase text-[10px] bg-[#171717] border border-dashed border-neutral-700 px-[8px] py-[4px] text-[#a8a8a8] inline-block mb-[13px]">
                Features
              </span>

              <h2 className="text-[31px] leading-[36px] font-[350] text-neutral-200 tracking-[0.01em]">
                The complete stack
                <br />
                to ship an MCP server
              </h2>
            </div>

            <div className="text-neutral-400 text-[16px] leading-[24px] mt-16">
              Everything you need to set up fast, customize with ease, and plug
              <br />
              directly into your apps.
            </div>

          </div>

          {/* ===== NEW FEATURE CARDS GRID ===== */}
          <div className="grid grid-cols-3 gap-[28px]">

            {/* CARD 1 */}
            <div className="border border-neutral-800 p-[20px]">
              <img src="/images/feature-1.avif" alt="" className="mb-[18px] h-[160px] w-full object-contain opacity-90" />
              <h3 className="text-white text-[16px] mb-[6px]">File System Routing</h3>
              <p className="text-neutral-400 text-[14px] leading-[22px]">
                Automatically register tools, prompts, and resources with zero configuration.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="border border-neutral-800 p-[20px]">
              <img src="/images/feature-2.avif" alt="" className="mb-[18px] h-[160px] w-full object-contain opacity-90" />
              <h3 className="text-white text-[16px] mb-[6px]">Integrations</h3>
              <p className="text-neutral-400 text-[14px] leading-[22px]">
                Secure access with Better Auth's integration and monetize with Polar.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="border border-neutral-800 p-[20px]">
              <img src="/images/feature-3.avif" alt="" className="mb-[18px] h-[160px] w-full object-contain opacity-90" />
              <h3 className="text-white text-[16px] mb-[6px]">Middlewares</h3>
              <p className="text-neutral-400 text-[14px] leading-[22px]">
                Add authentication, logging, or custom logic to intercept and process requests and responses.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="border border-neutral-800 p-[20px]">
              <img src="/images/feature-4.avif" alt="" className="mb-[18px] h-[160px] w-full object-contain opacity-90" />
              <h3 className="text-white text-[16px] mb-[6px]">Extensible Configuration</h3>
              <p className="text-neutral-400 text-[14px] leading-[22px]">
                Customize every aspect of your MCP server with flexible configuration options.
              </p>
            </div>

            {/* CARD 5 */}
            <div className="border border-neutral-800 p-[20px]">
              <img src="/images/feature-5.avif" alt="" className="mb-[18px] h-[160px] w-full object-contain opacity-90" />
              <h3 className="text-white text-[16px] mb-[6px]">Multiple Transport Support</h3>
              <p className="text-neutral-400 text-[14px] leading-[22px]">
                Build and deploy servers with HTTP or STDIO transport protocols out of the box.
              </p>
            </div>

            {/* CARD 6 */}
            <div className="border border-neutral-800 p-[20px]">
              <img src="/images/feature-6.avif" alt="" className="mb-[18px] h-[160px] w-full object-contain opacity-90" />
              <h3 className="text-white text-[16px] mb-[6px]">Plug & play to your apps</h3>
              <p className="text-neutral-400 text-[14px] leading-[22px]">
                Initialize xmcp directly in your existing Next.js or Express projects with one command.
              </p>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}