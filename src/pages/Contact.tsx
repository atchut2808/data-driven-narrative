
import { Layout } from '@/components/Layout';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "atchut2808@gmail.com",
      link: "mailto:atchut2808@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 9922478534",
      link: "tel:+919922478534",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Bengaluru, Karnataka",
      link: null,
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: "LinkedIn",
      value: "atchut-bulusu-901162200",
      link: "https://www.linkedin.com/in/atchut-bulusu-901162200/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      title: "GitHub",
      value: "atchut2808",
      link: "https://github.com/atchut2808",
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
                  Contact
                </span>
                <h1 className="text-3xl md:text-4xl font-medium mb-6">
                  Get in Touch
                </h1>
                <p className="text-lg text-muted-foreground">
                  Let's connect and discuss how my data expertise can benefit your team
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <AnimatedSection animation="fade-in-right" delay={100}>
              <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={info.title === "LinkedIn" || info.title === "GitHub" ? "_blank" : undefined}
                              rel={info.title === "LinkedIn" || info.title === "GitHub" ? "noopener noreferrer" : undefined}
                              className="text-lg font-medium hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-lg font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-left" delay={200}>
              <Card className="overflow-hidden border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-medium mb-6">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
