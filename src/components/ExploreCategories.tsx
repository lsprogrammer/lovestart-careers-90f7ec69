import {
  Calculator, GraduationCap, Wrench, BarChart3,
  Stethoscope, Palette, Code, HeadphonesIcon, ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const categories = [
  { icon: Calculator, title: 'Accounting / Finance', subtitle: 'Financial Services', jobs: 156 },
  { icon: GraduationCap, title: 'Education / Training', subtitle: 'Teaching & Research', jobs: 203 },
  { icon: Wrench, title: 'Engineering', subtitle: 'Mechanical & Civil', jobs: 187 },
  { icon: BarChart3, title: 'Business / Strategy', subtitle: 'Management & Analytics', jobs: 142 },
  { icon: Stethoscope, title: 'Healthcare', subtitle: 'Medical & Pharma', jobs: 231 },
  { icon: Palette, title: 'Design / Creative', subtitle: 'UI/UX & Graphics', jobs: 118 },
  { icon: Code, title: 'IT / Software', subtitle: 'Development & DevOps', jobs: 342 },
  { icon: HeadphonesIcon, title: 'Customer Support', subtitle: 'Service & Relations', jobs: 95 },
];

const ExploreCategories = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(210 40% 98%)' }} ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Browse by Category</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 tracking-tight">
            Explore Categories
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Find the right job category that matches your skills and interests.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group bg-background rounded-2xl p-6 border border-border hover:border-primary hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <cat.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{cat.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cat.subtitle}</p>
              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all duration-200">
                {cat.jobs} Jobs <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            Explore All Categories
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
