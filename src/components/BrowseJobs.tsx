import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const tabs = ['By Title', 'By Skills', 'By Category', 'Popular Searches'];

const tabData: Record<string, string[]> = {
  'By Title': [
    'Software Engineer', 'Product Manager', 'Data Analyst', 'UX Designer',
    'Marketing Manager', 'Sales Executive', 'Accountant', 'HR Manager',
    'Project Manager', 'DevOps Engineer', 'Business Analyst', 'Content Writer',
  ],
  'By Skills': [
    'JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'AWS',
    'Figma', 'Photoshop', 'Excel', 'Salesforce', 'Docker', 'TypeScript',
  ],
  'By Category': [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Engineering',
    'Marketing', 'Design', 'Sales', 'HR', 'Operations', 'Legal', 'Customer Service',
  ],
  'Popular Searches': [
    'Remote Jobs', 'Work from Home', 'Part Time', 'Internship',
    'Fresher Jobs', 'Night Shift', 'Freelance', 'Contract',
    'Walk-in', 'Urgent Hiring', 'MNC Jobs', 'Government Jobs',
  ],
};

const BrowseJobs = () => {
  const [activeTab, setActiveTab] = useState('By Title');
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Quick Browse</span>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3 tracking-tight">
            Browse Jobs
          </h2>
        </div>

        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationFillMode: 'forwards' }}>
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {tabData[activeTab].map((item) => (
              <a
                key={item}
                href="#"
                className="px-5 py-2.5 rounded-full border border-border text-base font-medium text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseJobs;
