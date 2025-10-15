import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8 animate-fade-up">
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none gradient-text">
              404
            </h1>
          </div>

          {/* Icon */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center glow-effect">
              <Search className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Message */}
          <div className="mb-12 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Página não encontrada
            </h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Ops! Parece que você se perdeu. A página que você está procurando não existe.
            </p>
          </div>

          {/* Button */}
          <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button 
              asChild
              size="lg"
              className="gradient-primary text-white hover:opacity-90 transition-opacity text-lg px-8 glow-effect"
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Voltar para a home
              </Link>
            </Button>
          </div>

          {/* Path info */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <p className="text-sm text-muted-foreground">
              Tentou acessar: <span className="font-mono text-primary">{location.pathname}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
