import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const feedPosts = [
  {
    id: 1,
    author: "cryforquincy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=quincy",
    content: "Novo projeto de arte digital saindo do forno! 🎨✨ Quem quer ver o resultado final?",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
    likes: 234,
    comments: 45,
    time: "2h"
  },
  {
    id: 2,
    author: "martinaolvr",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=martina",
    content: "Finalizando mais uma edição incrível! 🎬 Vocês estão prontos para o próximo vídeo?",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    likes: 189,
    comments: 32,
    time: "4h"
  },
  {
    id: 3,
    author: "pixel_master",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixel",
    content: "Live de desenvolvimento de games às 20h! Quem vai assistir? 🎮💜",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b2b0b?w=600&h=400&fit=crop",
    likes: 456,
    comments: 78,
    time: "6h"
  },
];

export function FeedSection() {
  return (
    <section id="feed" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-3xl">📱</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Feed</h2>
        </div>

        {/* Feed Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-colors"
            >
              {/* Author Header */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10 border-2 border-primary/30">
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>{post.author[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.time} atrás</p>
                  </div>
                </div>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <p className="px-4 pb-3 text-foreground">{post.content}</p>

              {/* Image */}
              <div className="relative aspect-video">
                <img 
                  src={post.image} 
                  alt="Post"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between p-4 border-t border-border">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                    <Heart className="w-5 h-5" />
                    <span className="text-sm">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments}</span>
                  </button>
                </div>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            Carregar mais
          </button>
        </div>
      </div>
    </section>
  );
}
