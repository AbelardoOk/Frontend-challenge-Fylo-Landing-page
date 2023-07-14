import Image from "next/image";

export function Header() {
  return (
    <header className="flex flex-row justify-between py-12 px-16 items-center bg-primary-intro">
      <Image className="w-32 h-fit" src="/logo.svg" alt="Fylo" width={176} height={72} />

      <div className="flex flex-row gap-16 items-center font-alt">
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
