import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import BlogSection from "@/components/sections/BlogSection";
import Driving from "@/components/sections/Driving";
import HeroSection from "@/components/sections/HeroSection";
import OurJourney from "@/components/sections/OurJourney";
import PapersToken from "@/components/sections/PapersToken";
import Partners from "@/components/sections/Partners";
import Scaleable from "@/components/sections/Scaleable";
const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Partners />
      <Driving />
      <PapersToken />
      <OurJourney /> 
      <BlogSection />
      <Scaleable />
      <Footer />
    </>
  )
}

export default Homepage