import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PoliticaDePrivacidade = () => {
  useEffect(() => {
    document.title = "Política de Privacidade - Glowhora";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 pb-16">
        <article className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-up">
            Política de Privacidade
          </h1>
          
          <p className="text-muted-foreground mb-8 animate-fade-up">
            Última atualização: Outubro de 2025
          </p>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6 animate-fade-in">
            <p className="text-foreground leading-relaxed">
              A sua privacidade é importante para nós. Esta Política de Privacidade descreve como o Glowhora coleta, usa e protege as informações pessoais dos usuários.
            </p>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Coleta de informações</h2>
              <p className="text-foreground leading-relaxed">
                Coletamos informações fornecidas voluntariamente, como nome e e-mail, quando você se inscreve em nossa lista de espera ou entra em contato conosco.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Uso das informações</h2>
              <p className="text-foreground leading-relaxed mb-3">
                As informações coletadas são utilizadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Enviar atualizações sobre o Glowhora;</li>
                <li>Melhorar nossos serviços e comunicações;</li>
                <li>Entrar em contato quando necessário.</li>
              </ul>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Compartilhamento de dados</h2>
              <p className="text-foreground leading-relaxed">
                Não compartilhamos suas informações com terceiros, exceto quando exigido por lei ou para cumprir obrigações legais.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Armazenamento e segurança</h2>
              <p className="text-foreground leading-relaxed">
                Os dados são armazenados com medidas de segurança adequadas para evitar acesso, alteração ou divulgação não autorizada.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Seus direitos</h2>
              <p className="text-foreground leading-relaxed">
                Você pode solicitar a exclusão, correção ou acesso às suas informações pessoais a qualquer momento, entrando em contato conosco pelo e-mail:{" "}
                <a href="mailto:contato@glowhora.com" className="text-primary hover:underline">
                  contato@glowhora.com
                </a>
                .
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies</h2>
              <p className="text-foreground leading-relaxed">
                Utilizamos cookies apenas para fins analíticos e de funcionamento básico do site. Você pode desativá-los nas configurações do seu navegador.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Alterações nesta política</h2>
              <p className="text-foreground leading-relaxed">
                Podemos atualizar esta política periodicamente. Recomendamos revisar esta página ocasionalmente para se manter informado.
              </p>
            </section>

            <section className="mt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contato</h2>
              <p className="text-foreground leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:{" "}
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

export default PoliticaDePrivacidade;
