import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleNavigation = (sectionId: string) => {
    if (isHome) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <img src={logo} alt="Glowhora Logo" className="w-8 h-8" />
            <span className="text-xl font-bold gradient-text">Glowhora</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation("sobre")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => handleNavigation("como-funciona")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => handleNavigation("funcionalidades")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Funcionalidades
            </button>
          </nav>

          <Button
            onClick={() => handleNavigation("waitlist")}
            className="gradient-primary text-white hover:opacity-90 transition-opacity"
          >
            Entrar na lista
          </Button>
        </div>
      </div>
    </header>
  );
};
