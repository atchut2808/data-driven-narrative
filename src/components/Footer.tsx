
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Atchut Bulusu</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Senior Business Analyst / Senior Data Analyst driving strategic insights and measurable growth through data.
            </p>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/atchut-bulusu-901162200/"
                className="text-foreground/70 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/atchut2808"
                className="text-foreground/70 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:atchut2808@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:items-end">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail size={16} className="mr-2" />
                <a href="mailto:atchut2808@gmail.com" className="hover:text-primary transition-colors">
                  atchut2808@gmail.com
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Phone size={16} className="mr-2" />
                <a href="tel:+919922478534" className="hover:text-primary transition-colors">
                  +91 9922478534
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin size={16} className="mr-2" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-muted-foreground text-sm">
            &copy; {currentYear} Atchut Bulusu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
