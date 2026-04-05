import { Search, MapPin, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'upload'>('search');

  return (
    <section className="relative min-h-[480px] flex items-center pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(142 72% 29% / 0.05) 0%, hsl(142 72% 29% / 0.12) 50%, hsl(210 40% 96% / 0.8) 100%)',
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-14 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-4 tracking-tight">
            Find Top <span className="text-primary">Candidates</span>
            <br />
            & Dream Jobs
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Connecting thousands of employers with talented job seekers.
            Your next opportunity is just a search away.
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex bg-muted rounded-full p-1 mb-8">
            <button
              onClick={() => setActiveTab('search')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === 'search'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Search size={18} />
              Job Search
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                activeTab === 'upload'
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Upload size={18} />
              Upload CV
            </button>
          </div>

          {/* Search Bar */}
          {activeTab === 'search' ? (
            <div className="bg-background rounded-2xl shadow-2xl p-3 flex flex-col md:flex-row gap-3 max-w-3xl mx-auto border border-border">
              <div className="flex items-center gap-3 flex-1 px-4 py-2 bg-muted/50 rounded-xl">
                <Search size={20} className="text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Job title or keyword..."
                  className="w-full bg-transparent text-base outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="flex items-center gap-3 flex-1 px-4 py-2 bg-muted/50 rounded-xl">
                <MapPin size={20} className="text-muted-foreground shrink-0" />
                <input
                  type="text"
                  placeholder="Location..."
                  className="w-full bg-transparent text-base outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-base font-bold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Search size={20} />
                Search
              </Button>
            </div>
          ) : (
            <div className="bg-background rounded-2xl shadow-2xl p-8 max-w-xl mx-auto border border-border text-center">
              <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 hover:border-primary transition-colors cursor-pointer">
                <Upload size={48} className="text-primary mx-auto mb-4" />
                <p className="text-lg font-semibold text-foreground mb-2">Drop your CV here</p>
                <p className="text-muted-foreground">or click to browse files</p>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-16 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary">12,500+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium mt-1">Jobs Posted</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary">8,200+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium mt-1">Employers</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-primary">45,000+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium mt-1">Candidates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
