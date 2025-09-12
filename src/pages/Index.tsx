import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import  PartnersSection  from "@/components/PartnersSection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      
      {/* Projects CTA Section - Replacing full projects grid */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Card className="card-professional max-w-2xl mx-auto">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-3xl font-bold text-primary">
                Explore Our Engineering Projects
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover our portfolio of successful engineering projects across Kenya, 
                from industrial automation to sustainable infrastructure solutions.
              </p>
              <Link to="/projects">
                <Button size="lg" className="bg-accent-gold text-accent-gold-foreground hover:bg-accent-gold/90">
                  View Our Projects →
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <ServicesSection />
      <InsightsSection />
      <ContactSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
