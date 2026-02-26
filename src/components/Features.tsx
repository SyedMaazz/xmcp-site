import Container from "./Container";

export default function Features() {
  return (
    <section className="mt-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <span className="uppercase text-[9.8px] bg-[#171717] border border-dashed border-neutral-700 px-2 py-1 text-[#a8a8a8] inline-block mb-6">
              Features
            </span>

            <h2 className="text-3xl md:text-4xl font-light text-neutral-200 leading-tight max-w-xl">
              The complete stack
              <br />
              to ship an MCP server
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="text-neutral-400 text-lg leading-relaxed max-w-xl">
            Everything you need to set up fast, customize with ease, and plug
            directly into your apps.
          </div>

        </div>
      </Container>
    </section>
  );
}