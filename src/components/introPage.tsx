import Image from "next/image";

export function IntroPage() {
  return (
    <section className="flex flex-col gap-6 text-center justify-center items-center bg-primary-intro pb-72">
      <Image
        className="z-10 w-[410px]"
        src="/illustration-intro.png"
        alt="Intro Ilustration"
        width={720}
        height={534}
      />

      <div className="w-[410px] flex flex-col gap-8 z-10">
        <h1 className="text-2xl font-bold font-alt">All your files in one secure location, acessible anywhere</h1>
        <p>
          Fylo stores all your most important files in one secure location. Acess them wherever you need, share and
          collaborate with friends family, and co-workers.
        </p>
      </div>

      <button className="py-3 px-16 rounded-3xl bg-accent-blue hover:bg-accent-cyan font-bold font-alt z-10 transition duration-300">
        Get Started
      </button>

      <Image
        className="absolute w-screen z-[1] mt-[35%] h-fit"
        src="bg-curvy-desktop.svg"
        alt=""
        width={1440}
        height={449}
      />
    </section>
  );
}
