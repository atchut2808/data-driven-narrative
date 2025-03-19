
import { Layout } from '@/components/Layout';
import { SkillCard } from '@/components/SkillCard';
import AnimatedSection from '@/components/AnimatedSection';
import { ChartBar, ChartLine, ChartPie, Database, Server, Computer, Globe } from 'lucide-react';

const AboutPage = () => {
  // Skills data grouped by category
  const skillsCategories = [
    {
      title: "Programming & Data Analysis",
      skills: [
        {
          title: "Python Ecosystem",
          icon: <Computer className="h-5 w-5" />,
          skills: ["Pandas", "NumPy", "scikit-learn", "NLTK", "OpenCV"],
        },
        {
          title: "Data Analysis",
          icon: <ChartLine className="h-5 w-5" />,
          skills: ["Statistical Analysis", "Hypothesis Testing", "Time Series Analysis", "A/B Testing"],
        },
      ],
    },
    {
      title: "Database & Infrastructure",
      skills: [
        {
          title: "Database Technologies",
          icon: <Database className="h-5 w-5" />,
          skills: ["SQL", "Snowflake", "PostgreSQL", "Microsoft SQL Server"],
        },
        {
          title: "Cloud & Infrastructure",
          icon: <Server className="h-5 w-5" />,
          skills: ["AWS (S3, ECS)", "GCP", "Docker", "Kubernetes"],
        },
      ],
    },
    {
      title: "Tools & Frameworks",
      skills: [
        {
          title: "Development Tools",
          icon: <Globe className="h-5 w-5" />,
          skills: ["Streamlit", "Airflow", "Git", "JIRA"],
        },
        {
          title: "Visualization & Reporting",
          icon: <ChartBar className="h-5 w-5" />,
          skills: ["Power BI", "Geo Spatial Analytics", "Google Analytics"],
        },
      ],
    },
  ];

  // Certifications
  const certifications = [
    {
      title: "Designing Database Solutions for Microsoft SQL Server",
      issuer: "Microsoft",
      year: "2022",
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
                  About Me
                </span>
                <h1 className="text-3xl md:text-4xl font-medium mb-6">
                  Senior Business Analyst with a passion for data-driven insights
                </h1>
                <p className="text-lg text-muted-foreground">
                  Turning complex data into strategic business value
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Profile Section */}
          <AnimatedSection animation="fade-in" delay={200} className="mb-20">
            <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden max-w-5xl mx-auto">
              <div className="p-8 md:p-10 space-y-6">
                <h2 className="text-2xl font-medium">Professional Summary</h2>
                <p className="text-foreground/80">
                  Senior Business Analyst with expertise in Python, SQL, and data analysis, 
                  driving strategic decisions and measurable business growth. Proven success in 
                  optimizing processes and delivering actionable insights through cross-functional collaboration.
                </p>
                <p className="text-foreground/80">
                  Skilled in leveraging tools like Streamlit, AWS, and Google Analytics to implement 
                  data-driven solutions that enhance efficiency, reduce costs, and improve key business outcomes.
                </p>
                <p className="text-foreground/80">
                  Led cross-functional teams in geospatial analytics projects, optimizing route planning and 
                  cutting operational costs by 12%. Introduced A/B testing frameworks for new product features, 
                  improving adoption rates by 20%. Mentored junior analysts, spearheading knowledge-sharing 
                  sessions on Python best practices and advanced SQL queries.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Skills Section */}
          <div className="space-y-20">
            {skillsCategories.map((category, categoryIndex) => (
              <AnimatedSection key={categoryIndex} animation="fade-in" delay={categoryIndex * 100}>
                <div className="mb-10">
                  <h2 className="text-2xl font-medium mb-2">{category.title}</h2>
                  <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skillIndex}
                      title={skill.title}
                      icon={skill.icon}
                      skills={skill.skills}
                    />
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Education & Certifications */}
          <AnimatedSection animation="fade-in" delay={300} className="mt-20">
            <div className="mb-10">
              <h2 className="text-2xl font-medium mb-2">Education & Certifications</h2>
              <div className="h-1 w-20 bg-primary/30 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <h3 className="text-xl font-medium mb-3">Education</h3>
                <div className="space-y-2">
                  <p className="font-medium">B.Tech in Mechanical Engineering</p>
                  <p className="text-foreground/80">College of Engineering Pune (COEP)</p>
                  <p className="text-muted-foreground">Aug 2015 – May 2019</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-border/50 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20">
                <h3 className="text-xl font-medium mb-3">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="space-y-2">
                      <p className="font-medium">{cert.title}</p>
                      <p className="text-foreground/80">Issuer: {cert.issuer}</p>
                      <p className="text-muted-foreground">Year: {cert.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
