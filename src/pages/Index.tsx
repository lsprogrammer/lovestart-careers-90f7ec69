import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import ExploreCategories from '@/components/ExploreCategories';
import BrowseJobs from '@/components/BrowseJobs';
import FeaturedJobs from '@/components/FeaturedJobs';
import MembershipPlans from '@/components/MembershipPlans';
import TopEmployers from '@/components/TopEmployers';
import DownloadApp from '@/components/DownloadApp';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorks />
      <ExploreCategories />
      <BrowseJobs />
      <FeaturedJobs />
      <MembershipPlans />
      <TopEmployers />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Index;
