import { Navbar } from "@/components/Navbar";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { CommunitySection } from "@/components/CommunitySection";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rss } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        
        {/* Feed CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
          <div className="container mx-auto px-4 text-center">
            <Rss className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Explore o Feed da comunidade
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Descubra novos criadores, veja lançamentos exclusivos e conecte-se com a comunidade.
            </p>
            <Link to="/feed">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground">
                Acessar Feed
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;