
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SkillCard } from "@/components/SkillCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChartBar, Database, Globe, Computer, Server } from "lucide-react";

const HomePage = () => {
  // Skills data
  const skillsData = [
    {
      title: "Programming & Analysis",
      icon: <Computer className="h-5 w-5" />,
      skills: ["Python (Pandas, NumPy, scikit-learn)", "Hypothesis Testing", "Time Series Analysis", "Statistical Modeling"],
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "Snowflake", "PostgreSQL", "Database Solutions for Microsoft SQL Server"],
    },
    {
      title: "Tools & Technologies",
      icon: <Server className="h-5 w-5" />,
      skills: ["Streamlit", "Airflow", "Docker", "Kubernetes", "AWS (S3, ECS), GCP"],
    },
    {
      title: "Visualization & Management",
      icon: <ChartBar className="h-5 w-5" />,
      skills: ["Power BI", "Geo Spatial Analytics", "Git", "JIRA"],
    },
  ];

  // Experience highlights
  const experienceHighlights = [
    {
      title: "Senior Business Analyst",
      company: "Porter",
      period: "April 2024 – Present",
      description: [
        "Developed a comprehensive leadership dashboard, delivering real-time insights into critical organizational metrics and boosting operational efficiency by 30%.",
        "Collaborated with Finance, Operations, and Product teams to define KPIs and ensure the dashboard addressed cross-functional needs.",
      ],
    },
    {
      title: "Business Analyst",
      company: "Porter",
      period: "Jan 2023 – April 2024",
      description: [
        "Automated the Finance MIS dashboard, providing quantitative visibility into earnings and expenditures.",
        "Built and deployed a commission rate estimator model using regression and time series analysis, resulting in a 2% increase in gross margin.",
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* About Section Preview */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                A data-driven professional dedicated to transforming complex business challenges into actionable insights
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in" delay={200}>
              <p className="text-lg text-foreground/80 mb-6">
                Senior Business Analyst with expertise in Python, SQL, and data analysis, driving strategic decisions
                and measurable business growth. Proven success in optimizing processes and delivering actionable insights
                through cross-functional collaboration.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Skilled in leveraging tools like Streamlit, AWS, and Google Analytics to implement
                data-driven solutions that enhance efficiency, reduce costs, and improve key business outcomes.
              </p>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/about">
                    Learn More About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="section-title">Skills & Expertise</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Specialized tools and technologies that power my analytical approach
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((skill, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <SkillCard
                  title={skill.title}
                  icon={skill.icon}
                  skills={skill.skills}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="section-title">Work Experience</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                A proven track record of delivering data-driven solutions across industries
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {experienceHighlights.map((experience, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <ExperienceCard
                  title={experience.title}
                  company={experience.company}
                  period={experience.period}
                  description={experience.description}
                  index={index}
                />
              </AnimatedSection>
            ))}
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/experience">
                    View Full Experience
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12">
              <h2 className="section-title">Key Projects</h2>
              <p className="section-subtitle max-w-2xl mx-auto">
                Selected projects showcasing my analytical capabilities and technical skills
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <AnimatedSection animation="fade-in" delay={100}>
              <ProjectCard
                title="Bundesliga Data Shootout (Kaggle)"
                description="Analyzed match and player data, developing predictive models with feature engineering and hyperparameter tuning."
                technologies={["Python", "Machine Learning", "Feature Engineering", "Statistical Analysis"]}
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={200}>
              <ProjectCard
                title="Finance MIS Dashboard"
                description="Built an end-to-end solution (Snowflake + Python + Streamlit + AWS) for real-time financial insights; integrated Google Analytics for tracking usage patterns."
                technologies={["Snowflake", "Python", "Streamlit", "AWS", "Google Analytics"]}
              />
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={300} className="col-span-1 md:col-span-2">
              <div className="flex justify-center mt-4">
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link to="/projects">
                    Explore All Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary/5">
        <div className="section-container">
          <AnimatedSection animation="fade-in">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to collaborate?</h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                I'm open to new opportunities and collaborations. Let's connect and discuss how my data expertise can benefit your team or project.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
