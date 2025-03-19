
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <AnimatedSection animation="fade-in" className="text-center px-4">
          <div className="mb-8">
            <div className="inline-block p-8 rounded-full bg-primary/10">
              <span className="text-7xl md:text-8xl font-semibold text-primary">404</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/">Return to Home</Link>
          </Button>
        </AnimatedSection>
      </div>
    </Layout>
  );
};

export default NotFound;
