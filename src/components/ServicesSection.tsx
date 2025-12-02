import { ServiceCard } from "./ServiceCard";
import { Flame, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const services = [
  {
    title: "Produção musical, trilhas e beats profissionais",
    description: "Olá, sou produtor musical e trabalhei na área de remixes por bastante tempo e posso criar...",
    price: 80,
    author: "caio.vinicius",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=caio",
    isNew: false,
    isVerified: false,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=300&fit=crop"
  },
  {
    title: "Desenho seu avatar estilo anime",
    description: "Avatar para qualquer rede social ou stream. Rapidez e qualidade garantidos. IMPORTANTE...",
    price: 35,
    author: "aesir_art",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aesir",
    isNew: true,
    isVerified: true,
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=300&fit=crop"
  },
  {
    title: "Jogo com você qualquer jogo por 1 hora",
    description: "Jogo qualquer jogo que você quiser. Sou amável e falo sobre qualquer coisa com você...",
    price: 30,
    author: "vicvix",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vicvix",
    isNew: false,
    isVerified: false,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
  },
  {
    title: "Em busca de duo para jogar? 🎮",
    description: "Venha jogar comigo! Sou sua companhia fofa pra subir de elo, dar boas risadas e trocar...",
    price: 30,
    author: "crys4ngel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=crys",
    isNew: false,
    isVerified: true,
    image: "https://images.unsplash.com/photo-1493711662062-fa541f7f2f19?w=400&h=300&fit=crop"
  },
  {
    title: "Edição de vídeo profissional",
    description: "Quer dar um toque de profissionalismo no seu video? Independente de qual seja? Me manda...",
    price: 35,
    author: "junksss",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=junks",
    isNew: true,
    isVerified: false,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop"
  },
  {
    title: "Top 10 melhores animes de fantasia",
    description: "Está cansado de ver sempre os mesmos animes? Hoje eu vou te recomendar 10 Isekais...",
    price: 20,
    author: "avestruz132",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=avestruz",
    isNew: true,
    isVerified: false,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
  },
];

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="explorar" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Flame className="w-8 h-8 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Serviços da comunidade
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-border"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full border-border"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] snap-start">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-8">
          <Button 
            variant="outline" 
            className="border-border bg-secondary/30 hover:bg-secondary"
          >
            Ver todos os serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
