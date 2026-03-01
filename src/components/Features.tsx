import Container from "./Container";

export default function Features() {
  return (
    <section className="mt-[139px]">
      <Container>
        {/* ===== HEADING BLOCK ===== */}
        <div className="mx-[65px] w-[880px]">
          <div className="grid grid-cols-[402px_580px] items-start mb-[52px]">
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
        </div>

        {/* ===== FEATURE CARDS GRID ===== */}
        <div className="grid grid-cols-3 gap-[20px] mx-[-30px]">
          {/* CARD 1 */}
          <div className="border border-neutral-800 pt-[26px] pr-[26px] pb-[26px] pl-[16px] h-[330px]">
            <img
              src="/images/feature-1.avif"
              alt=""
              className="mt-[-10px] mb-[18px] h-[200px] w-[320px] object-contain opacity-90 ml-auto"
            />
            <h3 className="text-white text-[18px] font-normal mb-[5px]">
              File System Routing
            </h3>
            <p className="text-neutral-400 text-[16px] leading-[23px]">
              Automatically register tools, prompts, and resources with zero
              configuration.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="border border-neutral-800 pt-[26px] pr-[26px] pb-[26px] pl-[16px] h-[330px]">
            <img
              src="/images/feature-2.avif"
              alt=""
              className="mt-[-10px] mb-[18px] h-[200px] w-[320px] object-contain opacity-90 ml-auto"
            />
            <h3 className="text-white text-[18px] font-normal mb-[5px]">
              Integrations
            </h3>
            <p className="text-neutral-400 text-[16px] leading-[23px]">
              Secure access with Better Auth's integration and monetize with
              Polar.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="border border-neutral-800 pt-[26px] pr-[26px] pb-[26px] pl-[16px] h-[330px]">
            <img
              src="/images/feature-3.avif"
              alt=""
              className="mt-[-10px] mb-[18px] h-[200px] w-[320px] object-contain opacity-90 ml-auto"
            />
            <h3 className="text-white text-[18px] font-normal mb-[5px]">
              Middlewares
            </h3>
            <p className="text-neutral-400 text-[15px] leading-[23px] tracking-[0.02em]">
              Add authentication, logging, or custom logic to intercept and
              process requests and responses.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="border border-neutral-800 pt-[26px] pr-[26px] pb-[26px] pl-[16px] h-[330px]">
            <img
              src="/images/feature-4.avif"
              alt=""
              className="mt-[-10px] mb-[18px] h-[200px] w-[320px] object-contain opacity-90 ml-auto"
            />
            <h3 className="text-white text-[18px] font-normal mb-[5px]">
              Extensible Configuration
            </h3>
            <p className="text-neutral-400 text-[16px] leading-[23px]">
              Customize every aspect of your MCP server with flexible
              configuration options.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="border border-neutral-800 pt-[26px] pr-[26px] pb-[26px] pl-[16px] h-[330px]">
            <img
              src="/images/feature-5.avif"
              alt=""
              className="mt-[-10px] mb-[18px] h-[200px] w-[320px] object-contain opacity-90 ml-auto"
            />
            <h3 className="text-white text-[18px] font-normal mb-[5px]">
              Multiple Transport Support
            </h3>
            <p className="text-neutral-400 text-[16px] leading-[23px]">
              Build and deploy servers with HTTP or STDIO transport protocols
              out of the box.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="border border-neutral-800 pt-[26px] pr-[26px] pb-[26px] pl-[16px] h-[330px]">
            <img
              src="/images/feature-6.avif"
              alt=""
              className="mt-[-10px] mb-[18px] h-[200px] w-[320px] object-contain opacity-90 ml-auto"
            />
            <h3 className="text-white text-[18px] font-normal mb-[5px]">
              Plug & play to your apps
            </h3>
            <p className="text-neutral-400 text-[16px] leading-[23px]">
              Initialize xmcp directly in your existing Next.js or Express
              projects with one command.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}