"use client";
import Image from "next/image";
import { useWindowSize } from "rooks";

export function IntroPage() {
  const { innerWidth } = useWindowSize();

  return (
    <section className="flex flex-col pt-6 md:pt-0 gap-6 text-center justify-center items-center bg-primary-intro pb-72">
      <Image
        className="z-10 w-80 md:w-[410px] h-fit"
        src="/illustration-intro.png"
        alt="Intro Ilustration"
        width={720}
        height={534}
      />

      <div className="w-80 md:w-[410px] flex flex-col gap-8 z-10">
        <h1 className="text-2xl font-bold font-alt">All your files in one secure location, acessible anywhere</h1>
        <p>
          Fylo stores all your most important files in one secure location. Acess them wherever you need, share and
          collaborate with friends family, and co-workers.
        </p>
      </div>

      <button className="py-4 px-20 md:py-3 md:px-16 rounded-3xl bg-accent-blue hover:bg-accent-cyan font-bold font-alt z-10 transition duration-300 shadow-xl">
        Get Started
      </button>

      {innerWidth !== null && innerWidth > 768 ? (
        <Image
          className="absolute w-screen z-[1] mt-[35%] h-fit"
          src="bg-curvy-desktop.svg"
          alt=""
          width={1440}
          height={449}
        />
      ) : (
        <div className="absolute mt-[24rem]">
          <Image className="h-fit w-screen" src="bg-curvy-mobile.svg" alt="" width={375} height={141} />
          <div className="h-[25rem] w-screen bg-primary-main"></div>
        </div>
      )}
    </section>
  );
}
