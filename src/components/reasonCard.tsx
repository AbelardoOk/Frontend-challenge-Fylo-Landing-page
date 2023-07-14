import Image from "next/image";

export function ReasonCard({ image, title, description }: { image: string; title: string; description: string }) {
  return (
    <div className="flex flex-col gap-2 items-center text-center z-10">
      <Image src={image} alt="Reason icon" width={83} height={78} />
      <h2 className="text-xl font-alt font-bold pt-4">{title}</h2>
      <p className="w-[22rem]">{description}</p>
    </div>
  );
}
