import Image from "next/image";

export function ReasonCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="flex flex-col md:mx-0 gap-2 justify-center items-center text-center z-10">
      <Image className="pb-2 md:pb-0 w-20 h-fit" src={image} alt="Reason icon" width={83} height={78} />
      <h2 className="text-xl font-alt font-bold pt-4">{title}</h2>
      <p className="w-[22rem] px-5 md:px-0">{description}</p>
    </div>
  );
}
