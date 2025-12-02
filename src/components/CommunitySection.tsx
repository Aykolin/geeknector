import { Users, Crown, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const communities = [
  {
    name: "Gamers BR",
    members: 15420,
    icon: "🎮",
    color: "from-purple-500 to-pink-500",
    description: "A maior comunidade de gamers do Brasil"
  },
  {
    name: "Arte Digital",
    members: 8930,
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    description: "Artistas digitais compartilhando técnicas"
  },
  {
    name: "Música & Beats",
    members: 12340,
    icon: "🎵",
    color: "from-green-500 to-emerald-500",
    description: "Produtores e músicos independentes"
  },
  {
    name: "Streamers",
    members: 9870,
    icon: "📺",
    color: "from-red-500 to-orange-500",
    description: "Comunidade de criadores de conteúdo"
  },
];

const features = [
  {
    icon: Crown,
    title: "Seja Premium",
    description: "Destaque seus serviços e ganhe mais visibilidade"
  },
  {
    icon: Zap,
    title: "Pagamento Rápido",
    description: "Receba seus pagamentos de forma segura e rápida"
  },
  {
    icon: Shield,
    title: "Proteção Total",
    description: "Suas transações são 100% protegidas"
  },
];

export function CommunitySection() {
  return (
    <section id="comunidades" className="py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Comunidades ativas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Encontre sua <span className="gradient-text">comunidade</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Junte-se a milhares de criadores que compartilham suas paixões e habilidades
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communities.map((community) => (
            <div 
              key={community.name}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${community.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                {community.icon}
              </div>
              <h3 className="font-bold text-foreground mb-1">{community.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{community.description}</p>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{community.members.toLocaleString()} membros</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 p-8 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-lg px-10 py-6 glow-effect"
          >
            Criar minha comunidade
          </Button>
        </div>
      </div>
    </section>
  );
}
