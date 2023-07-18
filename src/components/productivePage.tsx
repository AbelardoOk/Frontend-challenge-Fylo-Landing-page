import Image from "next/image";
export function ProductPage() {
  return (
    <section className="flex flex-col md:flex-row gap-12 px-8 md:px-32 py-32 justify-center">
      <Image src="/illustration-stay-productive.png" alt="produtive illustration" width={615} height={465} />

      <div className="flex flex-col text-left gap-4 md:gap-8 justify-center">
        <h2 className="text-xl md:text-3xl font-bold font-alt">Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage
          needs.
        </p>
        <p>
          Securely sahre files and folders with friends, family and colleagues for live collaboration. No email
          attachments required.
        </p>
        <div className="flex flex-row items-start gap-1 ">
          <a href="" className="text-accent-blue hover:text-accent-cyan">
            See how Fylo works
            <span className="block mt-1 max-w-full h-0.5 bg-accent-blue hover:bg-accent-cyan"></span>
          </a>
          <Image className="h-full w-fit" src="/icon-arrow.svg" alt="" width={16} height={16} />
        </div>
      </div>
    </section>
  );
}
