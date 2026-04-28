import { Header } from "@/components/layout";
import {
  About,
  Gallery,
  Hero,
  Kitchen,
  Location,
  Team,
} from "@/components/sections";

function HomePage() {
  return (
    <>
      <Header />

      <main className="flex flex-col gap-20">
        <Hero />
        <About />
        <Kitchen />
        <Team />
        <Gallery />
        <Location />
      </main>
    </>
  );
}

export default HomePage;
