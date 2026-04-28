import { Logo } from "@/components/ui";

function Footer() {
  return (
    <footer className="bg-dark mt-20 flex h-[152px] items-center justify-between px-8">
      <Logo variant="light" />

      <div className="text-gray flex flex-col gap-2">
        <p>© 2026 La Roma. Tous droits réservés.</p>
        <p>L&apos;art de la pizza napolitaine</p>
      </div>
    </footer>
  );
}

export default Footer;
