import { QuoteCard } from "./quoteCard";

export function QuotePage() {
  return (
    <section className="grid grid-cols-3 px-20 gap-12">
      <QuoteCard
        name="Satish Patel"
        tag="Founder & CEO, Huddle"
        opinion="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        icon="/profile-1.jpg"
      />

      <QuoteCard
        name="Bruce McKenzie"
        tag="Founder & CEO, Huddle"
        opinion="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        icon="/profile-2.jpg"
      />

      <QuoteCard
        name="Iva Boyd"
        tag="Founder & CEO, Huddle"
        opinion="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
        icon="/profile-3.jpg"
      />
    </section>
  );
}
