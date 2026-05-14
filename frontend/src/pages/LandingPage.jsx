import Header from '../components/Header.jsx';
import SuccessModal from '../components/SuccessModal.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ServicesSection from '../components/ServicesSection.jsx';
import ApproachSection from '../components/ApproachSection.jsx';
import AdvantagesSection from '../components/AdvantagesSection.jsx';
import ShowcasesSection from '../components/ShowcasesSection.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import StackSection from '../components/StackSection.jsx';
import ReviewsSection from '../components/ReviewsSection.jsx';
import ContactsSection from '../components/ContactsSection.jsx';
import BlogSection from '../components/BlogSection.jsx';
import Footer from '../components/Footer.jsx';
import { useAnalyticsTracking } from '../hooks/useAnalyticsTracking.js';
import { useLandingInteractions } from '../hooks/useLandingInteractions.js';

export default function LandingPage() {
  useAnalyticsTracking();
  useLandingInteractions();

  return (
    <>
      <Header />
      <main id="top" className="relative z-10 w-full">
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <AdvantagesSection />
        <ShowcasesSection />
        <ProcessSection />
        <StackSection />
        <ReviewsSection />
        <ContactsSection />
        <BlogSection />
        <Footer />
      </main>
      <SuccessModal />
    </>
  );
}
