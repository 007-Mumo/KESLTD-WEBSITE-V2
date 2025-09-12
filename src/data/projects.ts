/**
 * Centralized Projects Data
 * 
 * Contains all project information used across the Projects page and Project detail pages.
 * This centralized approach prevents duplication and ensures consistency.
 */

// Import project images
import powerImage from "@/assets/POWER-IMAGE.jpg";
import automationImage from "@/assets/project-automation.jpg";
import sustainableImage from "@/assets/RENEWABLE-ENERGY-IMAGE.jpg";
import residentialImage from "@/assets/CONSTRUCTION-IMAGE1.jpg";

/**
 * Project data interface
 */
export interface ProjectData {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  location: string;
  duration: string;
  client: string;
  info: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  team: Array<{
    name: string;
    role: string;
    image: string;
  }>;
  timeline: Array<{
    date: string;
    milestone: string;
    description: string;
    image: string;
  }>;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
}

/**
 * All projects data array
 * Used by both Projects listing page and individual Project detail pages
 */
export const projects: ProjectData[] = [
  {
    id: "1",
    title: "Industrial Power Upgrade",
    excerpt: "Comprehensive power system installation and modernization for large-scale manufacturing facilities across Kenya.",
    fullContent: "This flagship project involved the complete overhaul of power distribution systems for three major manufacturing facilities in Nairobi and Mombasa. Our team successfully upgraded legacy electrical infrastructure to meet modern safety standards while minimizing downtime. The project included installation of smart monitoring systems, backup power solutions, and energy-efficient transformers that reduced operational costs by 30%.",
    date: "2024",
    readTime: "8 min read",
    author: "Stu.Eng.Brian Mumo",
    category: "Power Systems",
    image: powerImage,
    location: "Nairobi & Mombasa",
    duration: "8 months",
    client: "Manufacturing Consortium Kenya",
    info: [
      {
        title: "Project Scope",
        description: "Complete electrical infrastructure overhaul across multiple facilities",
        icon: "⚡"
      },
      {
        title: "Technology Stack",
        description: "Smart monitoring systems, backup power solutions, energy-efficient transformers",
        icon: "🔧"
      },
      {
        title: "Safety Standards",
        description: "International electrical safety compliance and modern safety protocols",
        icon: "🛡️"
      },
      {
        title: "Energy Efficiency",
        description: "30% reduction in operational costs through efficient power systems",
        icon: "💡"
      },
      {
        title: "Monitoring Systems",
        description: "Real-time power monitoring and automated fault detection",
        icon: "📊"
      },
      {
        title: "Backup Solutions",
        description: "Redundant power systems ensuring 99.9% uptime reliability",
        icon: "🔋"
      }
    ],
    team: [
      {
        name: "Stu.Eng.Brian Mumo",
        role: "Project Lead & Senior Engineer",
        image: "@/assets/RENEWABLE-ENERGY-IMAGE.jpg"
      },
      {
        name: "Sarah Wanjiku",
        role: "Electrical Systems Engineer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Michael Ochieng",
        role: "Safety Compliance Officer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Grace Mutindi",
        role: "Installation Supervisor",
        image: "/api/placeholder/100/100"
      },
      {
        name: "David Kimani",
        role: "Quality Assurance Engineer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Janet Akinyi",
        role: "Project Coordinator",
        image: "/api/placeholder/100/100"
      }
    ],
    timeline: [
      {
        date: "Jan 2024",
        milestone: "Project Initiation",
        description: "Initial site assessment and planning phase",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Feb 2024",
        milestone: "Design Phase",
        description: "Electrical system design and approval",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Mar 2024",
        milestone: "Phase 1 Installation",
        description: "Nairobi facility power system upgrade",
        image: "/api/placeholder/150/100"
      },
      {
        date: "May 2024",
        milestone: "Phase 2 Installation",
        description: "Mombasa facility infrastructure overhaul",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Jul 2024",
        milestone: "Testing & Commissioning",
        description: "System testing and performance optimization",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Aug 2024",
        milestone: "Project Completion",
        description: "Final handover and documentation",
        image: "/api/placeholder/150/100"
      }
    ],
    challenges: [
      "Upgrading systems without production downtime",
      "Integrating legacy equipment with modern systems",
      "Coordinating across multiple facility locations"
    ],
    solutions: [
      "Phased implementation approach with temporary power systems",
      "Custom interface modules for legacy equipment integration",
      "Dedicated project teams for each facility location"
    ],
    outcomes: [
      "30% reduction in operational energy costs",
      "99.9% uptime achieved post-implementation",
      "Enhanced safety compliance across all facilities"
    ]
  },
  {
    id: "2",
    title: "Smart Automation Solutions",
    excerpt: "Advanced automation systems designed to enhance efficiency, safety, and productivity in industrial operations.",
    fullContent: "Implementation of cutting-edge industrial automation systems for a leading textile manufacturer. The project featured programmable logic controllers (PLCs), human-machine interfaces (HMIs), and integrated safety systems. Our solution increased production efficiency by 45% while significantly improving worker safety through automated hazard detection and response systems.",
    date: "2023",
    readTime: "6 min read",
    author: "Stu.Eng.Brian Mumo",
    category: "Automation",
    image: automationImage,
    location: "Eldoret",
    duration: "6 months",
    client: "Textile Industries Ltd",
    info: [
      {
        title: "Automation Level",
        description: "Full factory automation with PLC and HMI integration",
        icon: "🤖"
      },
      {
        title: "Safety Systems",
        description: "Automated hazard detection and emergency response protocols",
        icon: "🚨"
      },
      {
        title: "Efficiency Gains",
        description: "45% increase in production efficiency and throughput",
        icon: "📈"
      },
      {
        title: "Quality Control",
        description: "Integrated vision systems for real-time quality monitoring",
        icon: "👁️"
      },
      {
        title: "User Interface",
        description: "Intuitive HMI systems for operator control and monitoring",
        icon: "💻"
      },
      {
        title: "Maintenance",
        description: "Predictive maintenance systems reducing downtime by 60%",
        icon: "🔧"
      }
    ],
    team: [
      {
        name: "Stu.Eng.Brian Mumo",
        role: "Automation Lead Engineer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Peter Kiprotich",
        role: "PLC Programming Specialist",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Mary Chebet",
        role: "HMI Designer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "James Wekesa",
        role: "Safety Systems Engineer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Ruth Njeri",
        role: "Integration Specialist",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Simon Mutua",
        role: "Commissioning Engineer",
        image: "/api/placeholder/100/100"
      }
    ],
    timeline: [
      {
        date: "Mar 2023",
        milestone: "System Analysis",
        description: "Factory assessment and automation requirements analysis",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Apr 2023",
        milestone: "Design Development",
        description: "PLC programming and HMI interface design",
        image: "/api/placeholder/150/100"
      },
      {
        date: "May 2023",
        milestone: "Hardware Installation",
        description: "PLC panels and safety system installation",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Jun 2023",
        milestone: "Software Integration",
        description: "System programming and interface configuration",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Jul 2023",
        milestone: "Testing Phase",
        description: "Comprehensive testing and safety validation",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Aug 2023",
        milestone: "Go Live",
        description: "Production launch and operator training",
        image: "/api/placeholder/150/100"
      }
    ],
    challenges: [
      "Complex textile machinery integration",
      "Real-time quality control requirements",
      "Staff training on new automation systems"
    ],
    solutions: [
      "Custom PLC programming for textile-specific processes",
      "Integrated vision systems for quality monitoring",
      "Comprehensive training program with ongoing support"
    ],
    outcomes: [
      "45% increase in production efficiency",
      "60% reduction in quality defects",
      "Improved worker safety with automated hazard detection"
    ]
  },
  {
    id: "3",
    title: "Sustainable Infrastructure",
    excerpt: "Green energy solutions and sustainable infrastructure development for environmentally conscious growth.",
    fullContent: "A comprehensive renewable energy project featuring solar panel installations, wind energy systems, and smart grid technology for a new eco-friendly business park. The project achieved carbon neutrality within the first year of operation and serves as a model for sustainable development in East Africa.",
    date: "2024",
    readTime: "7 min read",
    author: "Stu.Eng.Brian Mumo",
    category: "Sustainability",
    image: sustainableImage,
    location: "Kisumu",
    duration: "12 months",
    client: "Green Valley Business Park",
    info: [
      {
        title: "Renewable Energy",
        description: "Solar and wind hybrid systems providing 100% clean energy",
        icon: "🌱"
      },
      {
        title: "Smart Grid",
        description: "Intelligent load balancing and energy storage systems",
        icon: "⚡"
      },
      {
        title: "Carbon Neutral",
        description: "Zero carbon emissions achieved within first year",
        icon: "🌍"
      },
      {
        title: "Energy Storage",
        description: "Advanced battery systems for 24/7 renewable power",
        icon: "🔋"
      },
      {
        title: "Monitoring",
        description: "Real-time energy production and consumption tracking",
        icon: "📊"
      },
      {
        title: "Scalability",
        description: "Modular design allowing for future expansion",
        icon: "📈"
      }
    ],
    team: [
      {
        name: "Stu.Eng.Brian Mumo",
        role: "Sustainability Project Lead",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Caroline Auma",
        role: "Renewable Energy Engineer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Robert Otieno",
        role: "Grid Integration Specialist",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Lucy Wangari",
        role: "Environmental Compliance Officer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Paul Mwangi",
        role: "Energy Storage Engineer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Esther Kamau",
        role: "Sustainability Consultant",
        image: "/api/placeholder/100/100"
      }
    ],
    timeline: [
      {
        date: "Jan 2024",
        milestone: "Site Assessment",
        description: "Environmental impact and renewable potential study",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Mar 2024",
        milestone: "Design Phase",
        description: "Solar and wind system engineering design",
        image: "/api/placeholder/150/100"
      },
      {
        date: "May 2024",
        milestone: "Installation Start",
        description: "Solar panel and wind turbine installation",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Aug 2024",
        milestone: "Grid Integration",
        description: "Smart grid and energy storage system setup",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Oct 2024",
        milestone: "Testing",
        description: "System optimization and performance testing",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Dec 2024",
        milestone: "Carbon Neutral",
        description: "Achievement of carbon neutrality certification",
        image: "/api/placeholder/150/100"
      }
    ],
    challenges: [
      "Optimal renewable energy mix design",
      "Smart grid integration complexity",
      "Environmental impact minimization"
    ],
    solutions: [
      "Advanced modeling for solar and wind optimization",
      "Hybrid grid system with intelligent load balancing",
      "Eco-friendly construction methods and materials"
    ],
    outcomes: [
      "100% renewable energy supply achieved",
      "Carbon neutral operations within first year",
      "Model project for sustainable development in East Africa"
    ]
  },
  {
    id: "4",
    title: "Residential Development Projects",
    excerpt: "Complete electrical and infrastructure solutions for residential developments, ensuring safe and reliable power distribution.",
    fullContent: "Electrical infrastructure design and installation for a 500-unit residential complex. The project included underground cable networks, individual metering systems, emergency lighting, and smart home integration capabilities. All installations meet international safety standards and include provisions for future technology upgrades.",
    date: "2023",
    readTime: "5 min read",
    author: "Stu.Eng.Brian Mumo",
    category: "Residential",
    image: residentialImage,
    location: "Karen, Nairobi",
    duration: "10 months",
    client: "Urban Living Developments",
    info: [
      {
        title: "Smart Home Ready",
        description: "Pre-wired infrastructure for smart home technology integration",
        icon: "🏠"
      },
      {
        title: "Underground Systems",
        description: "Concealed cable networks for aesthetic and safety benefits",
        icon: "🔌"
      },
      {
        title: "Individual Metering",
        description: "Separate metering systems for accurate billing and monitoring",
        icon: "⚡"
      },
      {
        title: "Emergency Systems",
        description: "Backup lighting and emergency power distribution",
        icon: "🚨"
      },
      {
        title: "Safety Compliance",
        description: "International electrical safety standards adherence",
        icon: "✅"
      },
      {
        title: "Future Expansion",
        description: "Scalable design for 50% future capacity increase",
        icon: "🔮"
      }
    ],
    team: [
      {
        name: "Stu.Eng.Brian Mumo",
        role: "Residential Project Manager",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Anthony Maina",
        role: "Electrical Design Engineer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Margaret Wanjiru",
        role: "Installation Supervisor",
        image: "/api/placeholder/100/100"
      },
      {
        name: "George Odhiambo",
        role: "Smart Systems Specialist",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Beatrice Muthoni",
        role: "Quality Control Engineer",
        image: "/api/placeholder/100/100"
      },
      {
        name: "Francis Gitau",
        role: "Safety Inspector",
        image: "/api/placeholder/100/100"
      }
    ],
    timeline: [
      {
        date: "Jan 2023",
        milestone: "Project Planning",
        description: "Site survey and electrical infrastructure planning",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Mar 2023",
        milestone: "Underground Installation",
        description: "Cable trenching and underground network installation",
        image: "/api/placeholder/150/100"
      },
      {
        date: "May 2023",
        milestone: "Unit Wiring",
        description: "Individual unit electrical installation",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Jul 2023",
        milestone: "Smart Integration",
        description: "Smart home infrastructure and metering setup",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Sep 2023",
        milestone: "Testing Phase",
        description: "Comprehensive electrical testing and commissioning",
        image: "/api/placeholder/150/100"
      },
      {
        date: "Oct 2023",
        milestone: "Handover",
        description: "Final inspection and project handover",
        image: "/api/placeholder/150/100"
      }
    ],
    challenges: [
      "Underground infrastructure in varied terrain",
      "Smart home technology integration",
      "Scalable infrastructure for future expansion"
    ],
    solutions: [
      "Advanced underground cable management systems",
      "Pre-wired smart home infrastructure in all units",
      "Modular design allowing for easy expansion"
    ],
    outcomes: [
      "500 units successfully powered and connected",
      "Smart home ready infrastructure in all units",
      "Infrastructure designed for 50% future expansion"
    ]
  }
];