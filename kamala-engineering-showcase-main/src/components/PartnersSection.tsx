/**
 * Partners Section Component
 * 
 * Displays partnered companies in a slideshow/carousel format with:
 * - Automatic scrolling carousel with configurable speed
 * - Responsive design for all screen sizes
 * - Smooth animations and hover effects
 * - Company logos with fallback handling
 * - Professional styling consistent with site theme
 */

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Partner companies data
 * Add your actual partner logos to the assets folder and update the paths below
 */
const partners = [
  {
    name: "Kenya Power",
    logo: "/api/placeholder/180/100", 
    description: "Leading power distribution company in Kenya"
  },
  {
    name: "Safaricom",
    logo: "/api/placeholder/180/100",
    description: "Premier telecommunications company"
  },
  {
    name: "KenGen",
    logo: "/api/placeholder/180/100", 
    description: "Kenya's largest electric power generator"
  },
  {
    name: "Bamburi Cement",
    logo: "/api/placeholder/180/100",
    description: "Leading cement manufacturer in East Africa"
  },
  {
    name: "East African Breweries",
    logo: "/api/placeholder/180/100",
    description: "Premier beverages company"
  },
  {
    name: "Kenya Airways",
    logo: "/api/placeholder/180/100",
    description: "The Pride of Africa airline"
  },
  {
    name: "Equity Bank",
    logo: "/api/placeholder/180/100",
    description: "Leading financial services provider"
  },
  {
    name: "Tusker Mattresses",
    logo: "/api/placeholder/180/100",
    description: "Quality mattress manufacturer"
  }
];

/**
 * Configuration for carousel behavior
 * Adjust autoplaySpeed to control carousel scrolling speed (in milliseconds)
 */
const carouselConfig = {
  autoplaySpeed: 4000, // 4 seconds per slide for better visibility
  itemsPerView: {
    mobile: 2,    // Number of logos visible on mobile
    tablet: 3,    // Number of logos visible on tablet
    desktop: 4    // Number of logos visible on desktop for larger logos
  }
};

/**
 * Partners Section Component
 * Renders an infinite scrolling carousel of partner company logos
 */
export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Auto-scroll effect for the carousel
   * Moves to the next set of logos every few seconds
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, carouselConfig.autoplaySpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    // Partners Section - Positioned above footer with light background
    <section className="py-16 bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Our Trusted Partners
          </h2>
          <div className="w-20 h-1 bg-accent-gold mx-auto"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            We collaborate with industry-leading companies to deliver exceptional 
            engineering solutions across Kenya and East Africa.
          </p>
        </motion.div>

        {/* Partners Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / carouselConfig.itemsPerView.desktop}%)`,
              width: `${(partners.length * 100) / carouselConfig.itemsPerView.desktop}%`
            }}
          >
            {/* Render partners multiple times for infinite scroll effect */}
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / (partners.length * 3)}%` }}
              >
                {/* Partner Logo Card */}
                <div className="bg-background rounded-xl p-8 shadow-md border border-border hover:shadow-xl transition-all duration-300 group hover:scale-105">
                  <div className="aspect-video flex items-center justify-center h-24">
                    {/* Partner Logo with Fallback */}
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                      onError={(e) => {
                        // Fallback to a placeholder if logo fails to load
                        e.currentTarget.src = 'data:image/svg+xml,' + encodeURIComponent(`
                          <svg xmlns="http://www.w3.org/2000/svg" width="180" height="100" viewBox="0 0 180 100">
                            <rect width="180" height="100" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1"/>
                            <text x="90" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#6b7280">
                              ${partner.name}
                            </text>
                          </svg>
                        `);
                      }}
                    />
                  </div>
                  
                  {/* Partner Name (Hidden on smaller screens) */}
                  <div className="mt-4 text-center hidden md:block">
                    <h3 className="text-sm font-medium text-primary group-hover:text-accent-gold transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-secondary/20 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none"></div>
        </motion.div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(partners.length / carouselConfig.itemsPerView.desktop) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * carouselConfig.itemsPerView.desktop)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / carouselConfig.itemsPerView.desktop) === index
                  ? 'bg-accent-gold w-8'
                  : 'bg-border hover:bg-accent-gold/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Partnership Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Interested in partnering with us?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="inline-flex items-center px-6 py-3 bg-accent-gold text-accent-gold-foreground rounded-md hover:bg-accent-gold/90 transition-colors duration-300 font-medium"
          >
            Let's Collaborate
          </button>
        </motion.div>
      </div>
    </section>
  );
}