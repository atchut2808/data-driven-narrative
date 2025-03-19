
import { Layout } from '@/components/Layout';
import { ExperienceCard } from '@/components/ExperienceCard';
import AnimatedSection from '@/components/AnimatedSection';

const ExperiencePage = () => {
  const experiences = [
    {
      title: "Senior Business Analyst",
      company: "Porter",
      period: "April 2024 – Present",
      description: [
        "Developed a comprehensive leadership dashboard, delivering real-time insights into critical organizational metrics and boosting operational efficiency by 30%.",
        "Collaborated with Finance, Operations, and Product teams to define KPIs and ensure the dashboard addressed cross-functional needs.",
        "Built the dashboard using Streamlit, Python, and Snowflake SQL, hosted on ECS, integrated Google Analytics and Google SSO, improving scalability and security.",
        "Drove solutions bridging technical and business requirements, improving workflows and performance tracking."
      ],
    },
    {
      title: "Business Analyst",
      company: "Porter",
      period: "Jan 2023 – April 2024",
      description: [
        "Automated the Finance MIS dashboard, providing quantitative visibility into earnings and expenditures. Achieved a 40% reduction in monthly efforts through streamlined reporting and collaboration with the Finance team.",
        "Built and deployed a commission rate estimator model using regression and time series analysis, resulting in a 2% increase in gross margin.",
        "Performed statistical analysis on pricing changes' impact on Average Order Value, informing strategic pricing decisions.",
        "Documented findings, requirements, and processes to ensure clear communication and stakeholder alignment."
      ],
    },
    {
      title: "Data Analyst",
      company: "Soroco",
      period: "Aug 2021 – Jan 2023",
      description: [
        "Analyzed over 8,000 hours of user data monthly via Python (pandas) and advanced visualizations, generating actionable insights.",
        "Automated SQL-to-API migration and scheduling tasks with Airflow, reducing workload by 60%.",
        "Contributed to machine learning (NLP, sentiment analysis) initiatives with scikit-learn, NLTK, and OpenCV.",
        "Led cross-functional teams in geospatial analytics projects, optimizing route planning and cutting operational costs by 12%.",
        "Introduced A/B testing frameworks for new product features, improving adoption rates by 20%.",
        "Mentored junior analysts, spearheading knowledge-sharing sessions on Python best practices and advanced SQL queries."
      ],
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
                  Experience
                </span>
                <h1 className="text-3xl md:text-4xl font-medium mb-6">
                  Professional Journey
                </h1>
                <p className="text-lg text-muted-foreground">
                  A chronicle of my experience driving business growth through data analysis
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline View */}
          <div className="max-w-4xl mx-auto">
            <div className="relative space-y-8">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 h-full w-px bg-border transform -translate-x-1/2 hidden md:block"></div>
              
              {experiences.map((exp, index) => (
                <AnimatedSection 
                  key={index} 
                  animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"} 
                  delay={index * 100}
                  className="relative"
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 hidden md:block"></div>
                    
                    <ExperienceCard
                      title={exp.title}
                      company={exp.company}
                      period={exp.period}
                      description={exp.description}
                      index={index}
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ExperiencePage;
