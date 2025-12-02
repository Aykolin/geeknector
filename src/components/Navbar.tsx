import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  Compass, 
  Rss, 
  Search, 
  Users, 
  MessageCircle, 
  LogIn,
  Menu,
  X,
  Package
} from "lucide-react";

const navItems = [
  { icon: Video, label: "Vídeos", href: "#" },
  { icon: Compass, label: "Explorar", href: "#explorar" },
  { icon: Rss, label: "Feed", href: "#feed" },
  { icon: Search, label: "Procurar", href: "#" },
  { icon: Users, label: "Comunidades", href: "#comunidades" },
  { icon: MessageCircle, label: "Chat", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Package className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-wider text-foreground">PACKZIN</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              <LogIn className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground border-0">
              Criar conta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 px-4">
              <Button variant="outline" className="w-full border-border">
                <LogIn className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Criar conta
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
