import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-row justify-between px-6 py-6 md:py-12 md:px-16 items-center bg-primary-intro">
      <Image className="w-24 md:w-32 h-fit" src="/logo.svg" alt="Fylo" width={176} height={72} />

      <div className="flex flex-row gap-4 md:gap-16 items-center font-alt">
        <a href="" className="transition duration-500 hover:font-bold group">
          Features
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-neutral-white"></span>
        </a>

        <a href="" className="transition duration-500 hover:font-bold group">
          Team
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-neutral-white"></span>
        </a>

        <a href="" className="transition duration-500 hover:font-bold group">
          Sign In
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-neutral-white"></span>
        </a>
      </div>
    </header>
  );
}
