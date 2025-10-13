import { UserPlus, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie seu perfil",
    description: "Cadastre-se em minutos e configure suas informações profissionais"
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure seus horários",
    description: "Defina sua disponibilidade e os serviços que você oferece"
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Receba agendamentos",
    description: "Compartilhe seu link e deixe seus clientes agendarem automaticamente"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container px-4 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Como <span className="gradient-text">funciona</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para revolucionar sua forma de gerenciar agendamentos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}
              
              <div className="relative">
                <div className="w-20 h-20 mx-auto rounded-2xl gradient-primary flex items-center justify-center mb-6 glow-effect">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-secondary text-white flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
