/**
 * Projects Page Component
 * 
 * Displays all company projects in a comprehensive grid layout with:
 * - Full project catalog with filtering capabilities
 * - Detailed project cards with images and descriptions
 * - Navigation to individual project detail pages
 * - Responsive design for all screen sizes
 * - Smooth animations and hover effects
 */

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

// Projects data is now imported from centralized data file

/**
 * Main Projects Page Component
 * Renders the complete projects catalog with navigation and filtering
 */
export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Page Header with Navigation */}
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
            <h1 className="text-5xl md:text-6xl font-bold">Our Projects</h1>
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
            <p className="max-w-3xl mx-auto text-xl text-primary-foreground/80">
              Explore our comprehensive portfolio of engineering excellence. Each project represents 
              our commitment to innovation, quality, and sustainable development across Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Project Card with Enhanced Content */}
                <Card className="card-professional group cursor-pointer h-full">
                  {/* Project Image with Category Badge */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = '/fallback.jpg';
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-gold text-accent-gold-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold text-primary group-hover:text-accent-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Project Metadata */}
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {project.excerpt}
                    </p>
                    
                    {/* View Details Button */}
                    <Link to={`/projects/${project.id}`} className="mt-auto">
                      <Button variant="primary" className="w-full">
                        View Details
                      </Button>
                    </Link>
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