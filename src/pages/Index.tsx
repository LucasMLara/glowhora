import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import { Waitlist } from "@/components/Waitlist";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <div id="sobre">
          <About />
        </div>
        <div id="como-funciona">
          <HowItWorks />
        </div>
        <div id="funcionalidades">
          <Features />
        </div>
        <Roadmap />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
