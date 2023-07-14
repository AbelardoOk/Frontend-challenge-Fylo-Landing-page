import { GridPage } from "@/components/gridPage";
import { Header } from "@/components/header";
import { IntroPage } from "@/components/introPage";

export default function Home() {
  return (
    <main className="h-full bg-primary-intro">
      <Header />
      <IntroPage />
      <GridPage />
    </main>
  );
}
