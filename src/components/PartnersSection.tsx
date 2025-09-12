import { motion } from "framer-motion";
import SchneiderLogo from "@/assets/SchneiderLogo.png";
import EricssonLogo from "@/assets/Ericsson-logo.png";
import SiemensLogo from "@/assets/Siemens.jpg";
import NokiaLogo from "@/assets/Nokia.jpg";
import HuaweiLogo from "@/assets/Huawei-Logo.png";
import ChintLogo from "@/assets/Chint-logo.png";
import EPLAN from "@/assets/EPLAN.jpg";
import POWERWORLD from "@/assets/POWER-WORLD.jpg";

const partners = [
  {
    
    logo: SchneiderLogo,
    
  },
  {
   
    logo: EricssonLogo,
    
  },
  {
    
    logo: SiemensLogo,
    
  },
  {
    
    logo: NokiaLogo,
    
  },
  {
    
    logo: HuaweiLogo,
    
  },
  {
    
    logo: ChintLogo,
    
  },
  {
    
    logo: EPLAN,
   
  },
  {
    
    logo: POWERWORLD,
    
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-10">Our Partners</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center"
          >
            <img
              src={partner.logo}
              
              className="h-20 object-contain mb-4"
            />
            
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
