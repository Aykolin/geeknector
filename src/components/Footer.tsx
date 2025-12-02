import { Zap, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  platform: {
    title: "Plataforma",
    links: [
      { label: "Explorar", href: "/#explorar" },
      { label: "Marketplace", href: "/#explorar" },
      { label: "Feed", href: "/feed" },
      { label: "Comunidades", href: "/#comunidades" },
    ]
  },
  content: {
    title: "Conteúdos",
    links: [
      { label: "Arte Digital", href: "#" },
      { label: "Presets", href: "#" },
      { label: "Templates", href: "#" },
      { label: "Packs", href: "#" },
    ]
  },
  support: {
    title: "Suporte",
    links: [
      { label: "Central de Ajuda", href: "#" },
      { label: "Guia do Criador", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Privacidade", href: "#" },
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-wider text-foreground">GEEKNECTOR</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              O marketplace de conteúdo digital para criadores. Venda seus packs, presets, templates e muito mais.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Geeknector. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Termos
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}