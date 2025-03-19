
import { Layout } from '@/components/Layout';
import { ProjectCard } from '@/components/ProjectCard';
import AnimatedSection from '@/components/AnimatedSection';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Bundesliga Data Shootout (Kaggle)",
      description: "Analyzed match and player data from Germany's premier football league, developing predictive models with feature engineering and hyperparameter tuning. Applied statistical methods to identify key performance indicators that influence match outcomes, achieving high accuracy in match prediction models.",
      technologies: ["Python", "Machine Learning", "Feature Engineering", "Statistical Analysis", "Pandas", "scikit-learn"],
    },
    {
      title: "Finance MIS Dashboard",
      description: "Built an end-to-end solution using Snowflake, Python, Streamlit, and AWS for real-time financial insights. The dashboard provides quantitative visibility into earnings and expenditures, integrated with Google Analytics for tracking usage patterns. Resulted in a 40% reduction in monthly reporting efforts through streamlined processes.",
      technologies: ["Snowflake", "Python", "Streamlit", "AWS", "Google Analytics", "SQL"],
    },
    {
      title: "Leadership Dashboard",
      description: "Developed a comprehensive dashboard delivering real-time insights into critical organizational metrics, boosting operational efficiency by 30%. Built using Streamlit, Python, and Snowflake SQL, hosted on ECS with Google SSO integration for improved security and access control.",
      technologies: ["Streamlit", "Python", "Snowflake SQL", "AWS ECS", "Google SSO", "Data Visualization"],
    },
    {
      title: "Commission Rate Estimator Model",
      description: "Built and deployed a predictive model using regression and time series analysis techniques to optimize commission rates. The model analyzed historical performance data to suggest optimal commission structures, resulting in a 2% increase in gross margin.",
      technologies: ["Python", "Regression Analysis", "Time Series Forecasting", "Data Modeling", "Statistical Analysis"],
    },
    {
      title: "Geospatial Analytics for Route Optimization",
      description: "Led cross-functional teams in geospatial analytics projects to optimize route planning, resulting in reduced operational costs by 12%. Implemented spatial data analysis techniques to identify efficient delivery routes and resource allocation strategies.",
      technologies: ["Geospatial Analysis", "Python", "Data Visualization", "Route Optimization Algorithms"],
    },
    {
      title: "A/B Testing Framework",
      description: "Introduced systematic A/B testing frameworks for evaluating new product features, which improved adoption rates by 20%. Designed statistical methodologies to measure feature impact and guide product development decisions based on quantitative evidence.",
      technologies: ["A/B Testing", "Statistical Hypothesis Testing", "Python", "Data Analysis", "Product Analytics"],
    },
  ];

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="section-container">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-4">
                  Projects
                </span>
                <h1 className="text-3xl md:text-4xl font-medium mb-6">
                  Key Projects & Case Studies
                </h1>
                <p className="text-lg text-muted-foreground">
                  Showcasing my analytical capabilities and technical skills through real-world applications
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectsPage;
