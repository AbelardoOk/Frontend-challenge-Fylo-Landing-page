import Image from "next/image";

export function QuoteCard({ opinion, name, icon, tag }: { opinion: string; name: string; icon: string; tag: string }) {
  return (
    <div className="flex flex-col gap-6 p-8 pt bg-primary-testimonials rounded-md z-10">
      <p className="text-sm">{opinion}</p>

      <div className="flex flex-row gap-4">
        <Image className="max-h-full w-auto rounded-full" src={icon} alt="" width={16} height={16} />

        <div>
          <h4 className="font-bold font-alt text-sm">{name}</h4>
          <p className="text-xs">{tag}</p>
        </div>
      </div>
    </div>
  );
}
