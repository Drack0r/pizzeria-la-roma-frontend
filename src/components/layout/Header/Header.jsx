import { Logo, Nav } from "@/components/ui";

function Header() {
  return (
    <header className="flex h-16 items-center justify-between pr-[2.7vh] pl-[2.4vh]">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
