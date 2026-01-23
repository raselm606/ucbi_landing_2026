import Header from "@/components/layouts/Header";
import Driving from "@/components/sections/Driving";
import HeroSection from "@/components/sections/HeroSection";
import OurJourney from "@/components/sections/OurJourney";
import PapersToken from "@/components/sections/PapersToken";
import Partners from "@/components/sections/Partners";
const Homepage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Partners />
      <Driving />
      <PapersToken />
      <OurJourney /> 
    </>
  )
}

export default Homepage