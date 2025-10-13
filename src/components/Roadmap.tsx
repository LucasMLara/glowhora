import { Sparkles } from "lucide-react";

const futureFeatures = [
  "Agendamento multi-profissional para equipes",
  "Inteligência artificial para otimizar horários",
  "Integração com WhatsApp Business",
  "Sincronização com Google Calendar",
  "App mobile (PWA instalável)",
  "Painel de métricas e relatórios",
  "Sistema de fidelidade para clientes",
  "Agendamento recorrente automático"
];

export const Roadmap = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-semibold">Em breve</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Futuras <span className="gradient-text">atualizações</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos constantemente evoluindo para oferecer a melhor experiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {futureFeatures.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center mb-3">
                <Sparkles className="h-4 w-4 text-secondary" />
              </div>
              <p className="text-sm font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
