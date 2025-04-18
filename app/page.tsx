import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import PropertyCarousel from "@/components/property-carousel"
import CityPropertiesGrid from "@/components/city-properties-grid"
import WhyChooseUs from "@/components/why-choose-us"
import LocalExpertise from "@/components/local-expertise"
import BestProperties from "@/components/best-properties"
import Testimonials from "@/components/testimonials"
import RecentArticles from "@/components/recent-articles"
import RealEstateCategories from "@/components/real-estate-categories"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <PropertyCarousel />
      <CityPropertiesGrid />
      <WhyChooseUs />
      <BestProperties />
      <LocalExpertise />
      <Testimonials />
      <RecentArticles />
      <RealEstateCategories />

    </main>
  )
}
