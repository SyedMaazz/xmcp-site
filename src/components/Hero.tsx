import Container from "./Container";

export default function Hero() {
  return (
    <section className="pt-15.5">
      <Container>
        <div className="text-center flex flex-col items-center">
          {/* VERSION ROW */}
          <div className="flex items-center gap-2 text-[12px] text-white">
            <span>v0.6.2</span>

            <span className="uppercase text-[9.8px] tracking-wide bg-[#171717] border border-dashed border-neutral-700 px-2 py-1 text-[#a8a8a8]">
              Latest Version
            </span>
          </div>
          {/* HEADING */}
          <h1 className="mt-6 w-[900px] h-[160px] text-[40px] font-normal tracking-tight text-neutral-200 leading-[64px] text-center">
            The TypeScript framework for
            <br />
            building & shipping MCP servers
          </h1>
        </div>
      </Container>
    </section>
  );
}
