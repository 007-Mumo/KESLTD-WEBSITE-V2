/**
 * Insights Page Component
 * 
 * Displays the complete collection of engineering insights and articles with:
 * - Comprehensive blog post catalog
 * - Detailed article cards with publication dates
 * - Search and filtering capabilities
 * - Navigation to individual insight detail pages
 * - Responsive design and smooth animations
 */

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { insights } from "@/data/insights";

/**
 * Extended insights data with additional details for full page display
 * Each insight includes: id, title, excerpt, full content, publication date, author, and reading time
 */
const allInsights = [
  {
    id: "1",
    title: "The Future of Renewable Energy in Africa",
    excerpt: "Exploring how renewable energy technologies are revolutionizing infrastructure development across the African continent.",
    fullContent: "Africa stands at the forefront of a renewable energy revolution that promises to transform the continent's energy landscape. With abundant solar resources, wind potential, and innovative approaches to grid development, African nations are pioneering sustainable energy solutions that could serve as models for the rest of the world.",
    date: "December 15, 2024",
    readTime: "5 min read",
    author: "Std.Eng Brian Mumo",
    category: "Renewable Energy",
    tags: ["Solar Power", "Wind Energy", "Smart Grids", "Sustainability"]
  },
  {
    id: "2",
    title: "Industrial Automation: Efficiency & Safety",
    excerpt: "How modern automation systems are transforming industrial operations while enhancing safety standards and productivity.",
    fullContent: "The integration of artificial intelligence, IoT sensors, and advanced control systems is reshaping industrial operations across Kenya and East Africa. Modern automation solutions not only boost productivity but also create safer working environments through predictive maintenance and real-time hazard detection.",
    date: "December 1, 2024",
    readTime: "7 min read",
    author: "Std.Eng Brian Mumo",
    category: "Automation",
    tags: ["Industrial IoT", "PLC Systems", "Safety Automation", "Productivity"]
  },
  {
    id: "3",
    title: "Smart Infrastructure for Sustainable Cities",
    excerpt: "The role of intelligent infrastructure in building sustainable urban environments for future generations.",
    fullContent: "As African cities grow rapidly, the need for smart, sustainable infrastructure becomes critical. From intelligent traffic management to efficient waste systems and green building technologies, smart infrastructure is the key to creating livable urban environments that can support growing populations while minimizing environmental impact.",
    date: "December 5, 2024",
    readTime: "6 min read",
    author: "Std.Eng Brian Mumo",
    category: "Smart Cities",
    tags: ["Urban Planning", "Smart Grids", "IoT Infrastructure", "Sustainability"]
  },
  {
    id: "4",
    title: "Power System Modernization in Kenya",
    excerpt: "Upgrading legacy electrical infrastructure to meet modern demands while maintaining reliability and safety.",
    fullContent: "Kenya's electrical infrastructure is undergoing significant modernization to support the country's growing industrial and residential needs. This comprehensive overview examines the challenges and opportunities in upgrading legacy systems while maintaining service reliability and safety standards.",
    date: "November 28, 2024",
    readTime: "8 min read",
    author: "Std.Eng Brian Mumo",
    category: "Power Systems",
    tags: ["Grid Modernization", "Infrastructure", "Power Distribution", "Safety"]
  },
  {
    id: "5",
    title: "Environmental Impact of Engineering Projects",
    excerpt: "Balancing development needs with environmental conservation through sustainable engineering practices.",
    fullContent: "Modern engineering projects must carefully balance development goals with environmental protection. This article explores best practices for minimizing environmental impact while delivering essential infrastructure that supports economic growth and improves quality of life.",
    date: "November 22, 2024",
    readTime: "6 min read",
    author: "Std.Eng Brian Mumo",
    category: "Environmental Engineering",
    tags: ["Sustainability", "Environmental Impact", "Green Engineering", "Conservation"]
  },
  {
    id: "6",
    title: "The Role of AI in Modern Engineering",
    excerpt: "How artificial intelligence is transforming engineering design, analysis, and project management across all disciplines.",
    fullContent: "Artificial intelligence is revolutionizing engineering practices, from design optimization and predictive maintenance to project management and quality control. This comprehensive analysis explores current applications and future possibilities for AI in engineering.",
    date: "November 15, 2024",
    readTime: "9 min read",
    author: "Std.Eng Brian Mumo",
    category: "Technology",
    tags: ["Artificial Intelligence", "Engineering Design", "Automation", "Innovation"]
  }
];


/**
 * Main Insights Page Component
 * Renders the complete insights catalog with navigation and search functionality
 */
export default function Insights() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
         <Link to="/">
                <Button size="lg" className="bg-accent-gold text-accent-gold-foreground hover:bg-accent-gold/90">
                 Back To Homepage
                </Button>
              </Link>
              

          {/* Page Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold">Engineering Insights</h1>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
            <p className="max-w-3xl mx-auto text-xl text-primary-foreground/80">
              Stay informed with the latest trends, innovations, and best practices in engineering and technology. 
              Explore thought leadership articles from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insights Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="card-professional overflow-hidden">
              <div className="md:flex">
                {/* Featured Content */}
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-accent-gold text-accent-gold-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured Article
                    </span>
                    <span className="text-sm text-muted-foreground">{allInsights[0].category}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4 hover:text-accent-gold transition-colors duration-300">
                    {allInsights[0].title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {allInsights[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{allInsights[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{allInsights[0].date}</span>
                      </div>
                      <span>{allInsights[0].readTime}</span>
                    </div>
                    <Link to={`/insights/${allInsights[0].id}`}>
                      <Button variant="primary">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
                {/* Featured Image Placeholder */}
                <div className="md:w-1/3 bg-gradient-to-br from-primary to-accent-gold flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <div className="w-16 h-16 bg-primary-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Calendar className="w-8 h-8" />
                    </div>
                    <p className="font-medium">Latest Insight</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Insights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allInsights.slice(1).map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              >
                {/* Insight Card */}
                <Card className="card-professional group cursor-pointer h-full">
                  <CardContent className="p-6 space-y-4 h-full flex flex-col">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                        {insight.category}
                      </span>
                    </div>
                    
                    {/* Article Title */}
                    <h3 className="text-xl font-semibold text-primary group-hover:text-accent-gold transition-colors duration-300 line-clamp-2">
                      {insight.title}
                    </h3>
                    
                    {/* Article Excerpt */}
                    <p className="text-muted-foreground leading-relaxed flex-grow line-clamp-3">
                      {insight.excerpt}
                    </p>
                    
                    {/* Article Metadata */}
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{insight.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{insight.date}</span>
                          <span>•</span>
                          <span>{insight.readTime}</span>
                        </div>
                        <Link to={`/insights/${insight.id}`}>
                          <Button variant="ghost" size="sm" className="text-accent-gold hover:text-accent-gold/80 p-0">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}