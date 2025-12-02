import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Heart, MessageCircle, Share2, MoreHorizontal, Bookmark, 
  TrendingUp, Clock, Users, Image as ImageIcon, Video, 
  ShoppingCart, Star, Sparkles, Filter, Search
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock Data
const feedPosts = [
  {
    id: 1,
    author: "neon.artworks",
    displayName: "Neon Arts",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=neon",
    role: "Criador Verificado",
    content: "🚀 Finalmente lançado! Meu novo pack de overlays para streamers 'Cyberpunk 2077 Vibe'. Totalmente editável no After Effects. Quem adquirir nas primeiras 24h ganha um emote exclusivo!",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
    likes: 842,
    comments: 56,
    time: "2h",
    product: {
      isSelling: true,
      title: "Cyberpunk Stream Pack Vol. 1",
      price: 45.90,
      rating: 4.9,
      sales: 120
    }
  },
  {
    id: 2,
    author: "dev.master",
    displayName: "Code Wizard",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wizard",
    role: "Dev",
    content: "Dica rápida de CSS: Como criar esse efeito de brilho suave (glow) apenas com box-shadow. Salva pra não esquecer! ✨ #css #frontend #tips",
    image: null, // Texto puro
    likes: 1205,
    comments: 89,
    time: "5h",
    product: {
      isSelling: false
    }
  },
  {
    id: 3,
    author: "beat.maker_pro",
    displayName: "Beat Maker Pro",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=beat",
    role: "Músico",
    content: "Acabei de subir 10 novos beats de Lo-Fi sem copyright para vocês usarem em vídeos e streams. 🎧☕️",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    likes: 2300,
    comments: 142,
    time: "1d",
    product: {
      isSelling: true,
      title: "Lo-Fi Chill Beats Pack (No Copyright)",
      price: 29.90,
      rating: 5.0,
      sales: 450
    }
  }
];

const trendingTags = ["#StreamPacks", "#VtuberAssets", "#LoFiBeats", "#Fanart", "#TechSetup"];

const Feed = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedPosts(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- Sidebar Esquerda (Navegação) --- */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm shadow-sm">
                <CardContent className="p-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-lg font-medium hover:bg-primary/10 hover:text-primary">
                    <TrendingUp className="mr-3 h-5 w-5" /> Feed Principal
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-lg font-medium hover:bg-primary/10 hover:text-primary">
                    <ShoppingCart className="mr-3 h-5 w-5" /> Marketplace
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-lg font-medium hover:bg-primary/10 hover:text-primary">
                    <Users className="mr-3 h-5 w-5" /> Comunidades
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-lg font-medium hover:bg-primary/10 hover:text-primary">
                    <Bookmark className="mr-3 h-5 w-5" /> Salvos
                  </Button>
                </CardContent>
              </Card>

              {/* Filtros Rápidos */}
              <div className="space-y-3">
                <h3 className="px-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">Filtros</h3>
                <div className="flex flex-wrap gap-2">
                  {["Arte", "Música", "Codes", "3D", "Packs"].map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* --- Coluna Central (Feed) --- */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Criar Post */}
            <Card className="border-border shadow-sm">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>EU</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-4">
                    <Input 
                      placeholder="O que você está criando hoje?" 
                      className="border-none bg-secondary/30 focus-visible:ring-0 placeholder:text-muted-foreground"
                    />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                          <ImageIcon className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                          <Video className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary">
                          <ShoppingCart className="h-5 w-5" />
                        </Button>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Publicar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lista de Posts */}
            {feedPosts.map((post) => (
              <Card key={post.id} className="border-border shadow-sm overflow-hidden hover:border-primary/30 transition-all duration-300">
                <div className="p-4">
                  {/* Header do Post */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-primary/20">
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-foreground">{post.displayName}</span>
                          <span className="text-xs text-muted-foreground">@{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px] h-4 px-1 border-primary/30 text-primary">
                            {post.role}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                    </Button>
                  </div>

                  {/* Conteúdo Texto */}
                  <p className="text-foreground/90 leading-relaxed mb-4 whitespace-pre-wrap font-sans">
                    {post.content}
                  </p>

                  {/* Imagem do Post (se houver) */}
                  {post.image && (
                    <div className="relative rounded-xl overflow-hidden mb-4 border border-border">
                      <img 
                        src={post.image} 
                        alt="Conteúdo do post" 
                        className="w-full h-auto object-cover max-h-[500px]"
                      />
                      
                      {/* CARD DE PRODUTO SOBRE A IMAGEM (Estilo Packzin) */}
                      {post.product.isSelling && (
                        <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md p-3 rounded-lg border border-primary/20 shadow-lg flex items-center justify-between animate-in slide-in-from-bottom-2">
                          <div>
                            <p className="text-xs font-semibold text-primary uppercase mb-0.5">Produto Vinculado</p>
                            <h4 className="font-bold text-sm text-foreground line-clamp-1">{post.product.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                              <span className="flex items-center text-yellow-500"><Star className="h-3 w-3 fill-current mr-1" /> {post.product.rating}</span>
                              <span>•</span>
                              <span>{post.product.sales} vendidos</span>
                            </div>
                          </div>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20">
                            Comprar R${post.product.price?.toFixed(2)}
                          </Button>
                        </div>
                      )}
                    </div>
                  )}

                  <Separator className="my-4" />

                  {/* Ações */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`hover:text-red-500 hover:bg-red-500/10 gap-2 ${likedPosts.includes(post.id) ? "text-red-500" : "text-muted-foreground"}`}
                        onClick={() => toggleLike(post.id)}
                      >
                        <Heart className={`h-5 w-5 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                        {post.likes}
                      </Button>
                      
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:bg-primary/10 gap-2">
                        <MessageCircle className="h-5 w-5" />
                        {post.comments}
                      </Button>
                      
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500 hover:bg-green-500/10 gap-2">
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                    
                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* --- Sidebar Direita (Extras) --- */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              
              {/* Trending Topics */}
              <Card className="border-border bg-card shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" /> Em Alta
                  </h3>
                  <div className="space-y-4">
                    {trendingTags.map((tag, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{tag}</p>
                        <p className="text-xs text-muted-foreground">2.4k posts hoje</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Sugestões de Criadores */}
              <Card className="border-border bg-gradient-to-br from-card to-secondary/10 shadow-sm">
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-4">Criadores em Destaque</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=creator${i}`} />
                          <AvatarFallback>CR</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 overflow-hidden">
                          <p className="text-sm font-semibold truncate">Pixel Master</p>
                          <p className="text-xs text-muted-foreground truncate">Pixel Art & Assets</p>
                        </div>
                        <Button size="sm" variant="outline" className="h-8 px-2 border-primary/50 text-primary hover:bg-primary hover:text-white">
                          Seguir
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="text-xs text-muted-foreground text-center">
                <p>© 2024 GeekNector. Feito com 💜 para criadores.</p>
                <div className="flex justify-center gap-2 mt-2">
                  <a href="#" className="hover:underline">Termos</a>
                  <a href="#" className="hover:underline">Privacidade</a>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feed;
