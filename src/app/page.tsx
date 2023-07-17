import { EarlyAcessCard } from "@/components/contactPage";
import { Footer } from "@/components/footer";
import { GridPage } from "@/components/gridPage";
import { Header } from "@/components/header";
import { IntroPage } from "@/components/introPage";
import { ProductPage } from "@/components/productivePage";
import { QuotePage } from "@/components/quotesPage";

export default function Home() {
  return (
    <main className="h-full bg-primary-main">
      <Header />
      <IntroPage />
      <GridPage />
      <ProductPage />
      <QuotePage />
      <EarlyAcessCard />
      <Footer />
    </main>
  );
}
