import { BeadString } from "./BeadDecoration";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-10">
      <div className="container px-4 text-center">
        <BeadString className="mb-4" />
        
        <p className="font-script text-3xl font-bold text-background">
          Pulseiras da Dany
        </p>
        
        <p className="mt-3 text-sm text-background/60">
          Feito com 💝 em cada miçanga
        </p>
        
        <p className="mt-6 text-xs text-background/40">
          © {currentYear} Pulseiras da Dany. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
