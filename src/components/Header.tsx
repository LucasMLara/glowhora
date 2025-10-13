import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Header = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Glowhora Logo" className="w-8 h-8" />
            <span className="text-xl font-bold gradient-text">Glowhora</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="#funcionalidades" className="text-sm font-medium hover:text-primary transition-colors">
              Funcionalidades
            </a>
          </nav>

          <Button 
            onClick={scrollToWaitlist}
            className="gradient-primary text-white hover:opacity-90 transition-opacity"
          >
            Entrar na lista
          </Button>
        </div>
      </div>
    </header>
  );
};
