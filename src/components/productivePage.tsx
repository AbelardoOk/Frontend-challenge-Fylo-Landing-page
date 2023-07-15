import Image from "next/image";
export function ProductPage() {
  return (
    <section className="flex flex-row gap-12 px-32 py-32 justify-center">
      <Image src="/illustration-stay-productive.png" alt="produtive illustration" width={615} height={465} />

      <div className="flex flex-col text-left gap-8 justify-center">
        <h2 className="text-3xl font-bold font-alt">
          Stay productive,
          <br /> wherever you are
        </h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage
          needs.
        </p>
        <p>
          Securely sahre files and folders with friends, family and colleagues for live collaboration. No email
          attachments required.
        </p>
        <a
          href=""
          className="text-accent-blue hover:text-accent-cyan underline underline-offset-2 inline-flex gap-2 h-max w-fit"
        >
          See how Fylo works <Image src="/icon-arrow.svg" alt="" width={16} height={16} />
          <div></div>
        </a>
      </div>
    </section>
  );
}
