import { Users, Target, Heart, TrendingUp, FileText, Star, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import aboutBanner from '@/assets/about-banner.jpg';
import aboutSearch from '@/assets/about-search.jpg';
import aboutHiring from '@/assets/about-hiring.jpg';

const stats = [
  { value: '250M', label: 'Unique monthly visitors', icon: Users },
  { value: '15M', label: 'Resumes', icon: FileText },
  { value: '20M', label: 'Total ratings and reviews', icon: Star },
  { value: '50', label: 'Jobs added per second globally', icon: Briefcase },
];

const whyBest = [
  {
    icon: Target,
    title: 'Uniquely',
    bold: 'Qualified',
    desc: 'Get your job in front of candidates who are active on our network, engaged in their careers, and open to new opportunities.',
  },
  {
    icon: Users,
    title: 'Targeted',
    bold: 'Matches',
    desc: 'Our network gives us a deep, up-to-date, and insightful dataset of professionals. We use that data to match your role to the most qualified professionals.',
  },
  {
    icon: Heart,
    title: 'Our',
    bold: 'Believe',
    desc: 'We believe in unlocking the extraordinary potential within individuals and connecting them with opportunities that align with their aspirations.',
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Banner */}
      <section className="pt-20">
        <div className="bg-primary/5 border-b border-primary/10">
          <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-foreground">About Us</h1>
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-primary font-medium">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Banner Image */}
      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="rounded-xl overflow-hidden">
          <img
            src={aboutBanner}
            alt="Our team collaborating"
            className="w-full h-[200px] md:h-[260px] object-cover"
            width={1920}
            height={512}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 lg:px-8 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content with inline images */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-14">
          {/* Block 1: text left, image right */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Find the Right Candidates</h2>
              <p className="text-muted-foreground leading-relaxed">
                We give you all the tools you need to easily find the right candidates for your company or work.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Create your company profile and post jobs and find the right candidates. We make it easy for you to find candidates by providing useful search and filter options.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={aboutSearch} alt="Searching for jobs" className="w-full h-[240px] object-cover" loading="lazy" width={640} height={512} />
            </div>
          </div>

          {/* Block 2: image left, text right */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden md:order-1 order-2">
              <img src={aboutHiring} alt="Managing applications" className="w-full h-[240px] object-cover" loading="lazy" width={640} height={512} />
            </div>
            <div className="space-y-4 md:order-2 order-1">
              <h2 className="text-2xl font-bold text-foreground">Manage Applications Easily</h2>
              <p className="text-muted-foreground leading-relaxed">
                Received applications on your job? Notify candidates about their application status by changing status from the app only.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Want to send custom email to all or single candidate? Just use this app and let us do all the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Are We The Best */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why are we <span className="underline decoration-primary decoration-2 underline-offset-4">The Best?</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyBest.map((item) => (
              <div
                key={item.bold}
                className="bg-background rounded-2xl border border-border p-8 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title} <span className="text-primary">{item.bold}</span>
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
