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
      <Hero />
      <About />
      <Kitchen />
      <Team />
      <Gallery />
      <Location />
    </>
  );
}

export default HomePage;
