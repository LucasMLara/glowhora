import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const scrollableHeight = documentHeight - windowHeight;
        
        const progress = scrollableHeight > 0 ? Math.min((scrollTop / scrollableHeight) * 100, 100) : 0;

        setScrollProgress(progress);
        setShowButton(progress > 80);
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-transparent">
        <div
          className="h-full gradient-primary"
          style={{ 
            width: `${scrollProgress}%`,
            transition: 'width 0.1s linear'
          }}
        />
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full gradient-primary text-white shadow-lg hover:opacity-90 transition-all animate-fade-in"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
