import Image from "next/image";
import { FacebookIcon } from "../../public/facebook";
import { TwitterIcon } from "../../public/twitter";
import { InstagramIcon } from "../../public/instagram";
export function Footer() {
  return (
    <footer className="flex flex-col px-6 md:px-32 mt-24 py-20 bg-primary-footer z-[1] gap-7">
      <Image className="w-40 h-fit" src="/logo.svg" alt="Fylo" width={176} height={72} />

      <div className="flex flex-col md:flex-row gap-4 justify-between items-start">
        <div className="flex flex-row gap-6 items-start">
          <Image className="mt-1 h-4 w-3" src="/icon-location.svg" alt="" width={16} height={16} />
          <p className="w-80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veritatis vel ut facilis modi vitae,
            reiciendis cupiditate nulla mollitia eveniet.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-start">
          <p className="flex flex-row gap-6">
            <Image className="h-[85%] w-fit" src="/icon-phone.svg" alt="" width={16} height={16} /> +1-543-123-4567
          </p>

          <p className="flex flex-row gap-6">
            <Image className="h-[85%] w-fit" src="/icon-email.svg" alt="" width={16} height={16} /> example@fylo.com
          </p>
        </div>

        <div className="flex flex-col gap-2 items-start mt-10 md:mt-0">
          <a href="" className="hover:font-bold">
            About Us
          </a>
          <a href="" className="hover:font-bold">
            Jobs
          </a>
          <a href="" className="hover:font-bold">
            Press
          </a>
          <a href="" className="hover:font-bold">
            Blog
          </a>
        </div>

        <div className="flex flex-col gap-2 items-start mt-10 md:mt-0">
          <a href="" className="hover:font-bold">
            Contact Us
          </a>
          <a href="" className="hover:font-bold">
            Terms
          </a>
          <a href="" className="hover:font-bold">
            Privacy
          </a>
        </div>

        <div className="flex flex-row justify-center md:justify-between items-center md:items-start gap-3 mt-10 md:mt-0 w-full md:w-auto">
          <div className="border-[1px] hover:border-accent-cyan border-neutral-white rounded-full p-2 fill-neutral-white hover:fill-accent-cyan">
            <FacebookIcon />
          </div>
          <div className="border-[1px] hover:border-accent-cyan border-neutral-white rounded-full p-2 fill-neutral-white hover:fill-accent-cyan">
            <TwitterIcon />
          </div>
          <div className="border-[1px] hover:border-accent-cyan border-neutral-white rounded-full p-2 fill-neutral-white hover:fill-accent-cyan">
            <InstagramIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
