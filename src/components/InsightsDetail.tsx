/**
 * Insight Detail Page Component
 * 
 * Displays comprehensive information about a specific insight/article including:
 * - Full article content with proper typography
 * - Author information and publication details
 * - Navigation back to home page
 * - Responsive design with animations
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { insights } from "@/data/insights";

/**
 * Insight Detail Component
 * Displays comprehensive information about a specific insight/article
 */
export default function InsightsDetail() {
  const { id } = useParams<{ id: string }>();
  const insight = insights.find(i => i.id === id);

  // Handle case where insight is not found
  if (!insight) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">Article Not Found</h2>
              <p className="text-muted-foreground">The requested article could not be found.</p>
              <Link to="/">
                <Button variant="hero" size="lg" className="hidden sm:block">
                  
                  Back Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-primary">
        <div className="absolute inset-0">
          <img 
            src={insight.image || '/api/placeholder/1200/400'} 
            alt={insight.title}
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              e.currentTarget.src = '/api/placeholder/1200/400';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-primary/70"></div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/insights">
              <Button variant="hero" size="lg" className="hidden sm:block">
            
                Back To Insights
              </Button>
            </Link>
          </motion.div>

          {/* Article Title and Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-block">
              <span className="bg-accent-gold text-accent-gold-foreground px-4 py-2 rounded-full text-sm font-medium">
                {insight.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              {insight.title}
            </h1>
            <div className="w-24 h-1 bg-accent-gold"></div>
          </motion.div>
        </div>
      </section>

      {/* Article Details Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Article Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b border-border"
          >
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{insight.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{insight.readTime}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <User className="w-4 h-4" />
              <span>{insight.author}</span>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="card-professional">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">
                    {insight.fullContent}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="card-professional bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold">Have Questions About This Topic?</h3>
                <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                  Our engineering experts are here to help. Contact us to discuss how we can 
                  apply these insights to your specific project needs.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      window.location.href = '/#contact';
                    }
                  }}
                  className="bg-accent-gold text-accent-gold-foreground hover:bg-accent-gold/90 px-8 py-3 rounded-md transition-colors duration-300 font-medium"
                >
                  Get Your Free Quote
                </button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}