import { ExternalLink } from "lucide-react";

export const Waitlist = () => {
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
            Faça parte dos primeiros a testar o Glowhora e revolucione a forma
            como você gerencia seus agendamentos.
          </p>
        </div>

        <div
          className="max-w-md mx-auto animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          <a
            href="https://forms.gle/eFP9pwNorfPo7A1n7"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-primary text-white hover:opacity-90 transition-opacity h-12 px-8 glow-effect w-full sm:w-auto mx-auto flex items-center justify-center gap-2 rounded-lg"
          >
            Quero ser avisado
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>🔒 Seus dados estão seguros. Não compartilhamos com terceiros.</p>
        </div>
      </div>
    </section>
  );
};
