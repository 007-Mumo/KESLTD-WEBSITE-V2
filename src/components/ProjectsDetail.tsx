/**
 * Project Detail Page Component
 * 
 * Displays comprehensive information about a specific project including:
 * - Full project gallery and hero image
 * - Detailed project specifications and outcomes
 * - Client information and project timeline
 * - Technical details and project challenges
 * - Navigation back to projects listing
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Clock, Building } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

// Project data is now imported from centralized data file

/**
 * Project Detail Component
 * Displays comprehensive information about a specific project
 */
export default function ProjectsDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-primary">Project Not Found</h2>
              <p className="text-muted-foreground">The requested project could not be found.</p>
              <Link to="/">
                <Button className="bg-accent-gold text-accent-gold-foreground hover:bg-accent-gold/90">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back  Home
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
      {/* Hero Section with Project Image */}
      <section className="relative h-96 bg-primary">
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-30"
            onError={(e) => {
              e.currentTarget.src = '/fallback.jpg';
            }}
          />
        </div>
        <div className="absolute inset-0 bg-primary/70"></div>
        
        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">

          ///


          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link to="/projects">
              <Button variant="hero" size="lg" className="hidden sm:block">
                
                Back To Projects
              </Button>
            </Link>
          </motion.div>

          {/* Project Title and Category */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="inline-block">
              <span className="bg-accent-gold text-accent-gold-foreground px-4 py-2 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              {project.title}
            </h1>
            <div className="w-24 h-1 bg-accent-gold"></div>
          </motion.div>
        </div>
      </section>

      {/* Project Details Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="card-professional">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.fullContent}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Challenges & Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Challenges */}
                <Card className="card-professional">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Challenges</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Solutions */}
                <Card className="card-professional">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Solutions</h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent-gold rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="card-professional">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-primary mb-6">Project Outcomes</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      {project.outcomes.map((outcome, index) => (
                        <div key={index} className="text-center space-y-2">
                          <div className="w-12 h-12 bg-accent-gold/10 rounded-full flex items-center justify-center mx-auto">
                            <div className="w-6 h-6 bg-accent-gold rounded-full"></div>
                          </div>
                          <p className="text-muted-foreground font-medium">{outcome}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="card-professional">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">Project Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Building className="w-5 h-5 text-accent-gold" />
                        <div>
                          <p className="text-sm text-muted-foreground">Client</p>
                          <p className="font-medium">{project.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-accent-gold" />
                        <div>
                          <p className="text-sm text-muted-foreground">Location</p>
                          <p className="font-medium">{project.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-accent-gold" />
                        <div>
                          <p className="text-sm text-muted-foreground">Year</p>
                          <p className="font-medium">{project.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-accent-gold" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-medium">{project.duration}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="card-professional bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="text-xl font-semibold">Interested in Similar Work?</h3>
                    <p className="text-primary-foreground/80">
                      Contact us to discuss your project requirements and how we can help.
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
                      className="w-full bg-accent-gold text-accent-gold-foreground hover:bg-accent-gold/90 px-4 py-2 rounded-md transition-colors duration-300 font-medium"
                    >
                      Get Your Free Quote
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}