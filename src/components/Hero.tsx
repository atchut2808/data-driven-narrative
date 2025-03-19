
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-in-right">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  Senior Business Analyst / Senior Data Analyst
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
                Atchut Bulusu
              </h1>
              <p className="text-xl md:text-2xl font-medium text-foreground/80">
                Driving strategic insights and measurable growth through data.
              </p>
              <p className="text-muted-foreground max-w-lg">
                Senior Business Analyst with expertise in Python, SQL, and data analysis, 
                driving strategic decisions and measurable business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/experience">
                    View Experience
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="hidden lg:block" animation="fade-in-left" delay={300}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Abstract data visualization illustration */}
              <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className={`rounded-lg bg-gradient-to-br ${
                      i % 3 === 0
                        ? 'from-primary/30 to-primary/5'
                        : i % 3 === 1
                        ? 'from-primary/10 to-primary/0'
                        : 'from-primary/20 to-primary/0'
                    } backdrop-blur-sm animate-float`}
                    style={{
                      animationDelay: `${i * 200}ms`,
                      animationDuration: `${3 + i % 3}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
