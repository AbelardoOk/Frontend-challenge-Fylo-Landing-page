import Image from "next/image";
export function Footer() {
  return (
    <footer className="flex flex-col px-32 py-64 -mt-32 bg-primary-footer z-[-10] gap-7">
      <Image className="w-40 h-fit" src="/logo.svg" alt="Fylo" width={176} height={72} />

      <div className="flex flex-row gap-24 justify-between">
        <div className="flex flex-row gap-6 items-start">
          <Image className="h-4 w-fit" src="/icon-location.svg" alt="" width={16} height={16} />
          <p className="w-80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores veritatis vel ut facilis modi vitae,
            reiciendis cupiditate nulla mollitia eveniet.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className="flex flex-row gap-6">
            <Image className="h-[85%] w-fit" src="/icon-phone.svg" alt="" width={16} height={16} /> +1-543-123-4567
          </p>

          <p className="flex flex-row gap-6">
            <Image className="h-[85%] w-fit" src="/icon-email.svg" alt="" width={16} height={16} /> example@fylo.com
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a href="">About Us</a>
          <a href="">Jobs</a>
          <a href="">Press</a>
          <a href="">Blog</a>
        </div>

        <div className="flex flex-col gap-2">
          <a href="">Contact Us</a>
          <a href="">Terms</a>
          <a href="">Privacy</a>
        </div>

        <div className="flex flex-row items-start fill-neutral-white gap-2">
          <Image
            className="w-[0.6rem] h-fit border-neutral-white border-2 rounded-full p-4"
            src="/facebook-f.svg"
            alt=" "
            width={16}
            height={16}
          />
          <Image
            className="w-3 h-fit border-neutral-white border-2 rounded-full p-4"
            src="/twitter.svg"
            alt=" "
            width={16}
            height={16}
          />
          <Image
            className="w-3 h-fit fill-neutral-white border-neutral-white border-2 rounded-full p-4"
            src="/instagram.svg"
            alt=" "
            width={16}
            height={16}
          />
        </div>
      </div>
    </footer>
  );
}
