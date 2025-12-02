import { MessageCircle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  author: string;
  avatar: string;
  isNew?: boolean;
  isVerified?: boolean;
  image?: string;
}

export function ServiceCard({
  title,
  description,
  price,
  author,
  avatar,
  isNew,
  isVerified,
  image,
}: ServiceCardProps) {
  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      {/* Image */}
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        {/* New Badge */}
        {isNew && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground border-0">
            NOVO
          </Badge>
        )}

        {/* Title */}
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {description}
        </p>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src={avatar} 
              alt={author}
              className="w-8 h-8 rounded-full object-cover border-2 border-border"
            />
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">{author}</span>
              {isVerified && (
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              )}
            </div>
          </div>

          {/* Chat Button */}
          <button className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Price */}
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-2xl font-bold gradient-text">
            R${price}
          </span>
          <button className="text-sm text-primary hover:underline">
            Ver detalhes
          </button>
        </div>
      </div>
    </div>
  );
}
