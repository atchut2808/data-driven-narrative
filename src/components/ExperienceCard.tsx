
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  index: number;
}

export const ExperienceCard = ({ title, company, period, description, index }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={cn(
        'group bg-white shadow-sm border border-border/50 rounded-xl transition-all duration-300 overflow-hidden',
        'hover:shadow-md hover:border-primary/20'
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div 
        className="p-6 cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-xl font-medium">{title}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {company}
              </span>
            </div>
            <p className="text-muted-foreground">{period}</p>
          </div>
          <button
            type="button"
            className={cn(
              'flex items-center justify-center h-6 w-6 rounded-full text-muted-foreground hover:bg-secondary transition-all',
              isExpanded ? 'rotate-180' : 'rotate-0'
            )}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">{isExpanded ? 'Collapse' : 'Expand'}</span>
          </button>
        </div>
      </div>
      <div
        className={cn(
          'transition-all duration-300 overflow-hidden px-6',
          isExpanded ? 'max-h-96 pb-6' : 'max-h-0'
        )}
      >
        <ul className="space-y-3">
          {description.map((item, idx) => (
            <li key={idx} className="flex space-x-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2"></span>
              <span className="text-foreground/80">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
