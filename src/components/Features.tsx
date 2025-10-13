import { Check } from "lucide-react";

const mvpFeatures = [
  "Cadastro e login de profissionais",
  "Agenda semanal interativa",
  "Controle de disponibilidade",
  "Agendamentos automáticos",
  "Lembretes por e-mail",
  "Confirmações automáticas",
  "Pagamento via Stripe",
  "Página pública personalizada",
  "Link único para compartilhar",
  "Painel de controle intuitivo"
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Funcionalidades <span className="gradient-text">principais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para gerenciar seus agendamentos de forma profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {mvpFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
