import { Smartphone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const DownloadApp = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(142 72% 29% / 0.08) 0%, hsl(142 72% 29% / 0.15) 100%)',
      }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className={`container mx-auto px-4 lg:px-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationFillMode: 'forwards' }}>
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Phone mockup */}
          <div className="flex-shrink-0">
            <div className="w-64 h-[500px] bg-foreground/5 rounded-[3rem] border-4 border-foreground/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/10 rounded-full" />
              <div className="text-center p-8">
                <Smartphone size={64} className="text-primary mx-auto mb-4" />
                <p className="text-lg font-bold text-foreground">JS Jobber</p>
                <p className="text-sm text-muted-foreground mt-1">Mobile App</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Get the App</span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 tracking-tight leading-tight">
              Download the JS Jobber
              <br />Mobile App
            </h2>
            <p className="text-lg text-muted-foreground mt-4 mb-8 max-w-md leading-relaxed">
              Search and apply for jobs on the go. Get instant notifications for new opportunities matching your profile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-foreground hover:bg-foreground/90 text-background text-base font-bold px-6 py-6 rounded-xl gap-3">
                <Download size={20} />
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on</div>
                  <div className="font-bold">App Store</div>
                </div>
              </Button>
              <Button className="bg-foreground hover:bg-foreground/90 text-background text-base font-bold px-6 py-6 rounded-xl gap-3">
                <Download size={20} />
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
