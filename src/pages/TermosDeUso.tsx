import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermosDeUso = () => {
  useEffect(() => {
    document.title = "Termos de Uso - Glowhora";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <article className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-up">
            Termos de Uso
          </h1>
          
          <p className="text-muted-foreground mb-8 animate-fade-up">
            Última atualização: Outubro de 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 animate-fade-in">
            <p className="text-foreground leading-relaxed">
              Ao acessar ou utilizar o Glowhora, você concorda com os termos e condições abaixo. Caso não concorde, não utilize este site.
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos termos</h2>
              <p className="text-foreground leading-relaxed">
                O uso do Glowhora implica na aceitação integral destes Termos de Uso e da Política de Privacidade.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso permitido</h2>
              <p className="text-foreground leading-relaxed">
                O Glowhora destina-se à gestão e organização de campanhas e conteúdos de RPG. Você concorda em utilizá-lo apenas para fins legais e em conformidade com a legislação aplicável.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Responsabilidades do usuário</h2>
              <p className="text-foreground leading-relaxed">
                O usuário é responsável pelas informações que fornece e pelo uso adequado das funcionalidades oferecidas pelo Glowhora.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Propriedade intelectual</h2>
              <p className="text-foreground leading-relaxed">
                Todo o conteúdo, marca e design do Glowhora pertencem exclusivamente à equipe do Glowhora. É proibida a reprodução ou distribuição sem autorização prévia.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitação de responsabilidade</h2>
              <p className="text-foreground leading-relaxed">
                O Glowhora não se responsabiliza por danos diretos ou indiretos decorrentes do uso indevido do serviço.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Modificações</h2>
              <p className="text-foreground leading-relaxed">
                Podemos alterar ou atualizar estes termos a qualquer momento, publicando a nova versão neste site.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contato</h2>
              <p className="text-foreground leading-relaxed">
                Dúvidas sobre estes termos? Fale conosco em:{" "}
                <a href="mailto:contato@glowhora.com" className="text-primary hover:underline">
                  contato@glowhora.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermosDeUso;
