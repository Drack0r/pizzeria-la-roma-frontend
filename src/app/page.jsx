import { Header } from "@/components/layout";
import { About, Gallery, Hero } from "@/components/sections";

function HomePage() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-20">
        <Hero />
        <About />
        <Gallery />
      </main>
    </>
  );
}

export default HomePage;
