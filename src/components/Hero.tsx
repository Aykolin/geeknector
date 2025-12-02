import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShoppingBag, Crown } from "lucide-react";
import { Link } from "react-router-dom";

const rotatingWords = ["conteúdos", "packs", "criações", "exclusivos"];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Marketplace de Conteúdo Digital</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Compre e venda</span>
            <br />
            <span className="relative inline-block min-w-[220px] md:min-w-[350px]">
              {rotatingWords.map((word, index) => (
                <span
                  key={word}
                  className={`absolute left-0 right-0 gradient-text text-glow transition-all duration-500 ${
                    index === currentWordIndex 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {word}
                </span>
              ))}
              <span className="invisible">{rotatingWords[0]}</span>
            </span>
            <br />
            <span className="text-foreground">incríveis</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            O marketplace definitivo para criadores de conteúdo. Venda seus packs, arte digital, presets, templates e muito mais.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground text-lg px-8 py-6 glow-effect"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Explorar conteúdos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border bg-secondary/30 hover:bg-secondary text-foreground text-lg px-8 py-6"
            >
              <Crown className="w-5 h-5 mr-2" />
              Vender agora
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "10K+", label: "Criadores" },
              { value: "50K+", label: "Conteúdos" },
              { value: "R$500K+", label: "Vendidos" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Categories Preview */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-12 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            {["Arte Digital", "Presets", "Templates", "Packs", "NFTs", "E-books"].map((cat) => (
              <span 
                key={cat}
                className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}