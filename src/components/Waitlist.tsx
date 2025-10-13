import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { toast } from "sonner";

export const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }

    // Aqui você integraria com sua API/banco de dados
    console.log("Email submitted:", email);
    
    setIsSubmitted(true);
    toast.success("Você está na lista! Em breve avisaremos quando o Glowhora estiver disponível.");
    setEmail("");
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        <div className="w-full h-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chega de perder tempo com <br />
            <span className="gradient-text">mensagens e planilhas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Faça parte dos primeiros a testar o Glowhora e revolucione a forma como você gerencia seus agendamentos.
          </p>
        </div>

        <div className="max-w-md mx-auto animate-fade-up" style={{ animationDelay: "200ms" }}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="email" 
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 text-lg border-2"
                />
              </div>
              <Button 
                type="submit"
                size="lg"
                className="gradient-primary text-white hover:opacity-90 transition-opacity h-12 px-8 glow-effect"
              >
                Quero ser avisado
              </Button>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Você está na lista!</h3>
              <p className="text-muted-foreground">
                Em breve, avisaremos quando o Glowhora estiver disponível.
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>🔒 Seus dados estão seguros. Não compartilhamos com terceiros.</p>
        </div>
      </div>
    </section>
  );
};
