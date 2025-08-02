import TopHeader from "../../components/TopHeader"
import MainHeader from "../../components/MainHeader"
import HeroSection from "../../components/HeroSection"
import ServicesGrid from "../../components/ServicesGrid"
import StatisticsSection from "../../components/StatisticsSection"
import WhyChooseSection from "../../components/WhyChooseSection"
import RepairOptions from "../../components/RepairOptions"
import HowItWorks from "../../components/HowItWorks"
import CustomerTestimonials from "../../components/CustomerTestimonials"
import LocationsSection from "../../components/LocationsSection"
import InsideFixfactor from "../../components/InsideFixfactor"
import CTASection from "../../components/CTASection"
import FAQSection from "../../components/FAQSection"
import BlogSection from "../../components/BlogSection"
import Footer from "../../components/Footer"
import LiveChat from "../../components/LiveChat"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TopHeader />
      <MainHeader />
      <HeroSection />
      <ServicesGrid />
      <StatisticsSection />
      <WhyChooseSection />
      <RepairOptions />
      <HowItWorks />
      <CustomerTestimonials />
      <LocationsSection />
      <InsideFixfactor />
      <CTASection />
      <FAQSection />
      <BlogSection />
      <Footer />
      <LiveChat />
    </div>
  )
}
