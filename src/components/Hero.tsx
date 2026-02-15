import Container from "./Container";

export default function Hero() {
  return (
    <section className="pt-16">
      <Container>
        <div className="text-center flex flex-col items-center">

          {/* VERSION ROW */}
          <div className="flex items-center gap-3 text-sm text-white">
            <span>v0.6.2</span>

            <span className="uppercase text-[11px] tracking-wide border border-neutral-700 px-2 py-0.5 text-neutral-300">
              Latest Version
            </span>
          </div>

          {/* HEADING */}
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-neutral-200 leading-tight">
            The TypeScript framework for building & shipping MCP servers
          </h1>
        </div>
      </Container>
    </section>
  );
}