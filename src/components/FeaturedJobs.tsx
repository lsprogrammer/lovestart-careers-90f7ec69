import { MapPin, Clock, DollarSign, Bookmark, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const jobs = [
  { title: 'Senior React Developer', company: 'TechCorp Solutions', location: 'New York, NY', type: 'Full Time', salary: '$120k - $150k', posted: '2 days ago' },
  { title: 'Product Designer', company: 'Creative Studio', location: 'San Francisco, CA', type: 'Full Time', salary: '$100k - $130k', posted: '3 days ago' },
  { title: 'Marketing Manager', company: 'GrowthLab Inc.', location: 'Austin, TX', type: 'Remote', salary: '$90k - $110k', posted: '1 day ago' },
  { title: 'Data Scientist', company: 'DataFlow AI', location: 'Boston, MA', type: 'Full Time', salary: '$130k - $160k', posted: '5 days ago' },
  { title: 'DevOps Engineer', company: 'CloudNine Systems', location: 'Seattle, WA', type: 'Contract', salary: '$140k - $170k', posted: '1 day ago' },
  { title: 'Project Manager', company: 'BuildRight Corp', location: 'Chicago, IL', type: 'Full Time', salary: '$95k - $120k', posted: '4 days ago' },
];

const typeColors: Record<string, string> = {
  'Full Time': 'bg-primary/10 text-primary border-0',
  'Remote': 'bg-blue-50 text-blue-600 border-0',
  'Contract': 'bg-amber-50 text-amber-600 border-0',
  'Part Time': 'bg-purple-50 text-purple-600 border-0',
};

const FeaturedJobs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(210 40% 98%)' }} ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Latest Openings</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 tracking-tight">
            Featured Jobs
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Hand-picked opportunities from top employers around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {jobs.map((job, i) => (
            <div
              key={job.title}
              className={`group bg-background rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-lg">
                  {job.company.charAt(0)}
                </div>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Bookmark size={20} />
                </button>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{job.company}</p>

              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                <span className="flex items-center gap-1"><DollarSign size={14} /> {job.salary}</span>
              </div>

              <div className="flex items-center justify-between">
                <Badge className={typeColors[job.type] || 'bg-muted text-muted-foreground border-0'}>
                  {job.type}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock size={12} /> {job.posted}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            View All Jobs
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
