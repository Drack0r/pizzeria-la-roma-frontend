import { Header } from "@/components/layout";
import { About, Hero } from "@/components/sections";

function HomePage() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-20">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default HomePage;
