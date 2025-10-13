import { Calendar, Smartphone, Zap, CreditCard, Bell, Link2 } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Controle Total",
    description: "Gerencie todos os seus horários em um só lugar com visualização intuitiva"
  },
  {
    icon: Link2,
    title: "Página Personalizada",
    description: "Link único para seus clientes agendarem direto com você"
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Agendamentos confirmados automaticamente sem troca de mensagens"
  },
  {
    icon: Bell,
    title: "Notificações Smart",
    description: "Lembretes automáticos por e-mail para você e seus clientes"
  },
  {
    icon: CreditCard,
    title: "Pagamentos Integrados",
    description: "Receba pagamentos online via Stripe de forma segura"
  },
  {
    icon: Smartphone,
    title: "100% Online",
    description: "Acesse de qualquer dispositivo, a qualquer hora"
  }
];

export const About = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que é o <span className="gradient-text">Glowhora</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma plataforma completa de agendamento inteligente feita para profissionais autônomos 
            que querem mais tempo para trabalhar e menos tempo organizando planilhas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
