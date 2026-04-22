import { Logo, Nav } from "@/components/ui";

function Header() {
  return (
    <header className="fixed z-99 flex h-16 w-full items-center justify-between bg-white pr-[2.7vh] pl-[2.4vh]">
      <Logo />
      <Nav />
    </header>
  );
}

export default Header;
