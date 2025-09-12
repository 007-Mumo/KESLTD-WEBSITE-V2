/**
 * Navigation Component
 * 
 * This component handles the main navigation for the Kamala Engineering website.
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Smooth scrolling to page sections
 * - Company logo and branding
 * - Call-to-action button for quotes
 * - Mobile-optimized touch targets
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import kesLogo from "@/assets/KESLTD LOGO.png"; // Company logo
import { scrollToSection, scrollToContact, scrollToServices } from "@/utils/navigation";

export default function Navigation() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  /**
   * Handles navigation to different pages and sections
   * Ensures CTAs route to correct home page sections
   */
  const handleNavigation = (destination: string) => {
    if (destination === "quote" || destination === "contact") {
      scrollToContact(navigate);
    } else if (destination === "services") {
      scrollToServices(navigate);
    } else if (destination === "about") {
      scrollToSection('about', navigate);
    } else {
      // Regular navigation for pages
      if (destination.startsWith('/')) {
        navigate(destination);
      }
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation Header - Sticky positioning for consistent visibility */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo and Company Branding Section */}
          <div className="flex items-center space-x-4">
            img src={kesLogo} alt= "KES LTD Logo" className="h-12 w-auto" 
            <div className="text-xl font-bold text-white">
              KAMALA ENGINEERING
              <div className="text-xs text-accent-gold font-medium tracking-wider">
                SERVICES LTD
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation Menu - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-accent-gold' : ''}`}>
              Home
            </Link>
            <Link to="/projects" className={`nav-link ${location.pathname.startsWith('/projects') ? 'text-accent-gold' : ''}`}>
              Projects
            </Link>
            <button onClick={() => handleNavigation("services")} className="nav-link">
              Services
            </button>
            <Link to="/insights" className={`nav-link ${location.pathname.startsWith('/insights') ? 'text-accent-gold' : ''}`}>
              Insights
            </Link>
            <button onClick={() => handleNavigation("contact")} className="nav-link">
              Contact
            </button>
          </nav>
          
          {/* Right Side Actions - CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Call-to-Action Button - Hidden on mobile */}
            <Button variant="hero" size="lg" onClick={() => handleNavigation("quote")} className="hidden sm:block">
              Get Free Quote
            </Button>
            
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-accent-gold transition-colors"
            >
              {/* Toggle between hamburger and X icon based on menu state */}
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Conditionally rendered */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-white/10">
            <nav className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              {/* Mobile navigation links - Full width buttons for easy touch */}
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block nav-link text-left w-full"
              >
                Home
              </Link>
              <Link 
                to="/projects" 
                onClick={() => setIsMenuOpen(false)}
                className="block nav-link text-left w-full"
              >
                Projects
              </Link>
              <button 
                onClick={() => handleNavigation("services")} 
                className="block nav-link text-left w-full"
              >
                Services
              </button>
              <Link 
                to="/insights" 
                onClick={() => setIsMenuOpen(false)}
                className="block nav-link text-left w-full"
              >
                Insights
              </Link>
              <button 
                onClick={() => handleNavigation("contact")} 
                className="block nav-link text-left w-full"
              >
                Contact
              </button>
              {/* Mobile CTA Button - Only shown on very small screens */}
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => handleNavigation("quote")}
                className="w-full sm:hidden"
              >
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}