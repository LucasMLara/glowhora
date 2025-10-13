import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Glowhora Logo" className="w-10 h-10" />
            <span className="text-2xl font-bold gradient-text">Glowhora</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#waitlist" className="hover:text-primary transition-colors">
              Lista de Espera
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Glowhora. Todos os direitos reservados.</p>
          <p className="mt-2">Feito com 💜 para profissionais que valorizam seu tempo</p>
        </div>
      </div>
    </footer>
  );
};
