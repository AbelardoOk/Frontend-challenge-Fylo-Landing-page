import { QuoteCard } from "./quoteCard";
import Image from "next/image";

export function QuotePage() {
  return (
    <section className="flex flex-col px-14 lg:grid lg:grid-cols-3 lg:px-20 gap-12 z-auto">
      <Image className="absolute -mt-8 -m-3" src="/bg-quotes.png" alt="" width={55} height={45} />

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
