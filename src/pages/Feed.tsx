import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Heart, MessageCircle, Share2, MoreHorizontal, Bookmark, TrendingUp, Clock, Users, Image, Video, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const feedFilters = [
  { id: "all", label: "Para você", icon: TrendingUp },
  { id: "following", label: "Seguindo", icon: Users },
  { id: "recent", label: "Recentes", icon: Clock },
];

const contentTypes = [
  { id: "all", label: "Todos" },
  { id: "image", label: "Imagens", icon: Image },
  { id: "video", label: "Vídeos", icon: Video },
  { id: "post", label: "Posts", icon: FileText },
];

const feedPosts = [
  {
    id: 1,
    author: "visual.studio",
    displayName: "Visual Studio",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=visual",
    isVerified: true,
    content: "🎨 Acabei de lançar meu novo pack de presets! 20 filtros exclusivos inspirados em filmes dos anos 80. Link na bio! #presets #lightroom #photography",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop",
    likes: 1234,
    comments: 89,
    shares: 45,
    time: "2h",
    hasProduct: true,
    productPrice: 29,
  },
  {
    id: 2,
    author: "aesir_art",
    displayName: "Aesir Art",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aesir",
    isVerified: true,
    content: "Comissão finalizada! 💜 Muito feliz com o resultado desse avatar. Obrigado pela confiança @cliente! Slots abertos para janeiro ✨",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&h=600&fit=crop",
    likes: 2567,
    comments: 156,
    shares: 78,
    time: "4h",
    hasProduct: true,
    productPrice: 65,
  },
  {
    id: 3,
    author: "editor.master",
    displayName: "Editor Master",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=editor",
    isVerified: true,
    content: "🎬 Tutorial novo no ar! Aprenda a fazer transições cinematográficas no Premiere Pro. Link do curso completo nos comentários!",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop",
    likes: 3421,
    comments: 234,
    shares: 156,
    time: "6h",
    hasProduct: true,
    productPrice: 149,
  },
  {
    id: 4,
    author: "streamlabs.pro",
    displayName: "StreamLabs Pro",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=stream",
    isVerified: false,
    content: "Novo overlay pack disponível! 🎮 Perfeito para streamers de Valorant. Animações suaves e design clean. Quem curtiu?",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
    likes: 876,
    comments: 67,
    shares: 34,
    time: "8h",
    hasProduct: true,
    productPrice: 35,
  },
  {
    id: 5,
    author: "design.hub",
    displayName: "Design Hub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=design",
    isVerified: true,
    content: "Dica do dia: Consistência visual é tudo! 📱 Seus posts precisam ter uma identidade. Confira nosso template kit com 50+ designs prontos!",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    likes: 1890,
    comments: 123,
    shares: 89,
    time: "12h",
    hasProduct: true,
    productPrice: 45,
  },
  {
    id: 6,
    author: "cine.looks",
    displayName: "Cine Looks",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=cine",
    isVerified: false,
    content: "Before & After usando nosso LUT 'Golden Hour' 🌅 Transforme seus vídeos em obras cinematográficas!",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
    likes: 654,
    comments: 45,
    shares: 23,
    time: "1d",
    hasProduct: true,
    productPrice: 25,
  },
];

const trendingTopics = [
  { tag: "#PresetsPro", posts: "12.5K" },
  { tag: "#DigitalArt", posts: "8.3K" },
  { tag: "#StreamerLife", posts: "6.7K" },
  { tag: "#Templates", posts: "5.2K" },
  { tag: "#VideoEditing", posts: "4.8K" },
];

const suggestedCreators = [
  { name: "pixel.art", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixel", followers: "25K" },
  { name: "motion.design", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=motion", followers: "18K" },
  { name: "photo.master", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=photo", followers: "32K" },
];

const Feed = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  const toggleSave = (postId: number) => {
    setSavedPosts(prev => 
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Left - Filters */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Feed Filters */}
                <div className="bg-card rounded-2xl border border-border p-4">
                  <h3 className="font-semibold text-foreground mb-4">Feed</h3>
                  <div className="space-y-2">
                    {feedFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedFilter(filter.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          selectedFilter === filter.id
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        <filter.icon className="w-5 h-5" />
                        {filter.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Type Filters */}
                <div className="bg-card rounded-2xl border border-border p-4">
                  <h3 className="font-semibold text-foreground mb-4">Tipo de conteúdo</h3>
                  <div className="space-y-2">
                    {contentTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                          selectedType === type.id
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {type.icon && <type.icon className="w-5 h-5" />}
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Mobile Filters */}
              <div className="lg:hidden flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {feedFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedFilter === filter.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <filter.icon className="w-4 h-4" />
                    {filter.label}
                  </button>
                ))}
              </div>

              {/* Posts */}
              {feedPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors"
                >
                  {/* Author Header */}
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-primary/30">
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0].toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground">{post.displayName}</p>
                          {post.isVerified && (
                            <Badge className="bg-primary/20 text-primary text-xs px-2">PRO</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">@{post.author} · {post.time}</p>
                      </div>
                    </div>
                    <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                    </button>
                  </div>

                  {/* Content */}
                  <p className="px-4 pb-4 text-foreground whitespace-pre-line">{post.content}</p>

                  {/* Image */}
                  <div className="relative aspect-video">
                    <img 
                      src={post.image} 
                      alt="Post"
                      className="w-full h-full object-cover"
                    />
                    {post.hasProduct && (
                      <div className="absolute bottom-4 right-4">
                        <Button size="sm" className="bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground">
                          Comprar R${post.productPrice}
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between p-4 border-t border-border">
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-2 transition-colors ${
                          likedPosts.includes(post.id) 
                            ? "text-accent" 
                            : "text-muted-foreground hover:text-accent"
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                        <span className="text-sm">{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm">{post.shares}</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => toggleSave(post.id)}
                      className={`p-2 rounded-full transition-colors ${
                        savedPosts.includes(post.id)
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${savedPosts.includes(post.id) ? "fill-current" : ""}`} />
                    </button>
                  </div>
                </article>
              ))}

              {/* Load More */}
              <div className="text-center py-8">
                <Button variant="outline" className="border-border bg-secondary/30 hover:bg-secondary">
                  Carregar mais
                </Button>
              </div>
            </div>

            {/* Sidebar Right - Trending & Suggestions */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                {/* Trending Topics */}
                <div className="bg-card rounded-2xl border border-border p-4">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Em alta
                  </h3>
                  <div className="space-y-3">
                    {trendingTopics.map((topic) => (
                      <a 
                        key={topic.tag}
                        href="#"
                        className="block p-3 rounded-xl hover:bg-secondary transition-colors"
                      >
                        <p className="font-medium text-primary">{topic.tag}</p>
                        <p className="text-sm text-muted-foreground">{topic.posts} posts</p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Suggested Creators */}
                <div className="bg-card rounded-2xl border border-border p-4">
                  <h3 className="font-semibold text-foreground mb-4">Criadores sugeridos</h3>
                  <div className="space-y-4">
                    {suggestedCreators.map((creator) => (
                      <div key={creator.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={creator.avatar} />
                            <AvatarFallback>{creator.name[0].toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground text-sm">@{creator.name}</p>
                            <p className="text-xs text-muted-foreground">{creator.followers} seguidores</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          Seguir
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feed;