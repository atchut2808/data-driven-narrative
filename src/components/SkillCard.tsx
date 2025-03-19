
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  className?: string;
}

export const SkillCard = ({ title, icon, skills, className }: SkillCardProps) => {
  return (
    <div className={cn(
      'bg-white rounded-xl shadow-sm border border-border/50 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:-translate-y-1',
      className
    )}>
      <div className="flex items-center mb-4 space-x-3">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            <span className="text-foreground/80">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
