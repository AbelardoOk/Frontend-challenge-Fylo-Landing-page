import { ReasonCard } from "./reasonCard";

export function GridPage() {
  return (
    <section className="grid grid-cols-2 px-32 -mt-28 gap-16 items-center bg-primary-main">
      <ReasonCard
        image="/icon-access-anywhere.svg"
        title="Acess your files, anywhere"
        description="The abillity to use a smartphone, tablet or a computer to acess your account means your files follow you everywhere"
      />

      <ReasonCard
        image="/icon-security.svg"
        title="Security you can trust"
        description="The abillity to use a smartphone, tablet or a computer to acess your account means your files follow you everywhere"
      />

      <ReasonCard
        image="/icon-collaboration.svg"
        title="Real-time collaboration"
        description="The abillity to use a smartphone, tablet or a computer to acess your account means your files follow you everywhere"
      />

      <ReasonCard
        image="/icon-any-file.svg"
        title="Store any type of file"
        description="The abillity to use a smartphone, tablet or a computer to acess your account means your files follow you everywhere"
      />
    </section>
  );
}
