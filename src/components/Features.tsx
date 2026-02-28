import Container from "./Container";

export default function Features() {
  return (
    <section className="mt-[141px] mr-23">
      <Container>

        <div className="mx-auto w-[880px]">

          <div className="grid grid-cols-[405px_590px] items-start mb-[400px]">

            <div>
              <span className="uppercase text-[10px] bg-[#171717] border border-dashed border-neutral-700 px-[8px] py-[4px] text-[#a8a8a8] inline-block mb-[12px]">
                Features
              </span>

              <h2 className="text-[31px] leading-[35px] font-[450] text-neutral-200">
                The complete stack
                <br />
                to ship an MCP server
              </h2>
            </div>

            <div className="text-neutral-400 text-[16px] leading-[24px] mt-15">
              Everything you need to set up fast, customize with ease, and plug
              <br />
              directly into your apps.
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}