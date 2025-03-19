
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  className?: string;
}

export const ProjectCard = ({ title, description, technologies, className }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        'bg-white shadow-sm border border-border/50 rounded-xl overflow-hidden transition-all duration-300',
        'hover:shadow-md hover:border-primary/20 hover:-translate-y-1',
        className
      )}
    >
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-foreground/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 bg-secondary text-foreground/70 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
