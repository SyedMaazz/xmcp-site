import Container from "./Container";

import vercel from "../assets/vercel.svg";
import nextjs from "../assets/nextjs.svg";
import localstack from "../assets/localstack.svg";

import BasehubLogo from "./logos/BasehubLogo";

export default function TrustedBy() {
  return (
    <section className="mt-12 pb-500">
      <Container>
        <div className="flex flex-col items-center">

          <p className="text-neutral-500 text-sm -mb-5 text-center">
            Trusted by builders at
          </p>

          <div className="flex items-center justify-center gap-8 md:gap-4 flex-wrap ">

            <img
              src={vercel}
              alt="Vercel"
              className="h-25 w-30 -mb-1"
            />

            <img
              src={nextjs}
              alt="Next.js"
              className="h-20 w-auto"
            />

            <img
              src={localstack}
              alt="LocalStack"
              className="h-12 w-auto"
            />

            <BasehubLogo />

          </div>
        </div>
      </Container>
    </section>
  );
}