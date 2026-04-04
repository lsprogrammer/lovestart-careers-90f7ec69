import { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const plans = [
  {
    name: 'Silver',
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: ['5 Job Postings', 'Basic Analytics', 'Email Support', '30 Day Visibility', 'Standard Listing'],
    popular: false,
  },
  {
    name: 'Gold',
    monthlyPrice: 59,
    yearlyPrice: 590,
    features: ['25 Job Postings', 'Advanced Analytics', 'Priority Support', '60 Day Visibility', 'Featured Listing', 'Company Profile Page'],
    popular: true,
  },
  {
    name: 'Platinum',
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: ['Unlimited Postings', 'Full Analytics Suite', '24/7 Dedicated Support', '90 Day Visibility', 'Premium Listing', 'Brand Spotlight', 'API Access'],
    popular: false,
  },
];

const MembershipPlans = () => {
  const [isYearly, setIsYearly] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 tracking-tight">
            Membership Plans
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
            Choose the perfect plan to accelerate your hiring process.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 mt-8 bg-muted rounded-full p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                !isYearly ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                isYearly ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground'
              }`}
            >
              Yearly
              <span className="ml-1 text-xs opacity-80">Save 18%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular
                  ? 'border-primary bg-primary/5 shadow-xl scale-105'
                  : 'border-border bg-background hover:border-primary/30'
              } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star size={14} /> Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-black text-foreground">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground text-base">/{isYearly ? 'year' : 'month'}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-base text-foreground">
                    <Check size={18} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 text-base font-bold rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg'
                    : 'bg-foreground/5 text-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
