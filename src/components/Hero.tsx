/**
 * Hero Banner Component
 * 
 * Full-width hero section for the homepage featuring:
 * - Hero background image with overlay
 * - Company tagline and main heading
 * - Primary CTAs for projects and contact
 * - Responsive design optimized for all devices
 */

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { scrollToContact } from "@/utils/navigation";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/HERO-IMAGE .jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[70vh] min-h-[600px] flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Engineering Excellence - Kamala Engineering Services" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Engineering Excellence
            <span className="block text-accent-gold">for Modern Kenya</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Transforming industries through innovative electrical engineering solutions, 
            sustainable infrastructure, and cutting-edge automation systems.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            {/* Primary CTA - View Projects */}
            <Link to="/projects">
              <Button 
                size="lg" 
                className="bg-accent-gold text-accent-gold-foreground hover:bg-accent-gold/90 shadow-lg px-8 py-4 text-lg font-medium"
              >
                View Our Projects
              </Button>
            </Link>
            
            {/* Secondary CTA - Get in Touch */}
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-medium border-2"
            >
              Get Free Quote
            </Button>
          </div>

          {/* Key Stats or Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent-gold"></div>
              <div className="text-sm text-white/80"></div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent-gold"></div>
              <div className="text-sm text-white/80"></div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent-gold"></div>
              <div className="text-sm text-white/80"></div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent-gold"></div>
              <div className="text-sm text-white/80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}