import { UserPlus, Search, Send, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  {
    icon: UserPlus,
    title: 'Create Account',
    description: 'Sign up with your email and build your professional profile in minutes.',
  },
  {
    icon: Search,
    title: 'Search Jobs',
    description: 'Browse thousands of listings filtered by category, location, and skills.',
  },
  {
    icon: Send,
    title: 'Send Resume',
    description: 'Apply directly with one click and track your application status.',
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Getting Started</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Three simple steps to land your dream job or find the perfect candidate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative group text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <step.icon size={36} className="text-primary" />
              </div>
              <div className="absolute -top-4 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-black">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>

              {i < 2 && (
                <ArrowRight size={24} className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
