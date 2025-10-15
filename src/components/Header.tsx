import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <img src={logo} alt="Glowhora Logo" className="w-8 h-8" />
            <span className="text-xl font-bold gradient-text">Glowhora</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("funcionalidades")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Funcionalidades
            </button>
          </nav>

          <Button
            onClick={() => scrollToSection("waitlist")}
            className="gradient-primary text-white hover:opacity-90 transition-opacity"
          >
            Entrar na lista
          </Button>
        </div>
      </div>
    </header>
  );
};
