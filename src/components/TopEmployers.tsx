import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Building2 } from 'lucide-react';

const employers = [
  'Google', 'Apple', 'Microsoft', 'Amazon', 'Siemens',
  'Tesla', 'Meta', 'Netflix', 'Spotify', 'Adobe',
];

const TopEmployers = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'hsl(210 40% 98%)' }} ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Trusted By</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 tracking-tight">
            Top Employers
          </h2>
        </div>

        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`} style={{ animationFillMode: 'forwards' }}>
          {employers.map((name) => (
            <div
              key={name}
              className="group flex flex-col items-center justify-center gap-3 py-8 px-4 rounded-2xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Building2 size={28} className="text-primary" />
              </div>
              <span className="text-base font-bold text-foreground">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopEmployers;
