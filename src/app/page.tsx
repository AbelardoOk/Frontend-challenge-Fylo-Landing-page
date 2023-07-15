import { GridPage } from "@/components/gridPage";
import { Header } from "@/components/header";
import { IntroPage } from "@/components/introPage";
import { ProductPage } from "@/components/productivePage";

export default function Home() {
  return (
    <main className="h-full bg-primary-main">
      <Header />
      <IntroPage />
      <GridPage />
      <ProductPage />
    </main>
  );
}
