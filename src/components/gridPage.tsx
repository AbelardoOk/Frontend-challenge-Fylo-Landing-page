import { ReasonCard } from "./reasonCard";

export function GridPage() {
  return (
    <section className="flex flex-col gap-24 lg:grid lg:grid-cols-2 lg:px-32 lg:pt-8 -mt-28 lg:gap-16 items-center bg-primary-main">
      <ReasonCard
        image="/icon-access-anywhere.svg"
        title="Acess your files, anywhere"
        description="The abillity to use a smartphone, tablet or a computer to acess your account means your files follow you everywhere"
      />

      <ReasonCard
        image="/icon-security.svg"
        title="Security you can trust"
        description="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files"
      />

      <ReasonCard
        image="/icon-collaboration.svg"
        title="Real-time collaboration"
        description="Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
      />

      <ReasonCard
        image="/icon-any-file.svg"
        title="Store any type of file"
        description="Wheather you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared"
      />
    </section>
  );
}
