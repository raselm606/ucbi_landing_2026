import Button from "@/components/ui/Button";
import Image from "next/image";
import HeroImg from '../../public/images/hero_coins1.png';
const HeroSection = () => {
  return (
    <>
    <div className="hero_section ">
      <div className="container cline section_padding">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-3">
            <div className="hero_content">
              <h1 className="hero_title">UCBI Blockchain <br />Data Banking</h1>
              <p className="hero_paragraph">Union of Cryptocurrencies and Blockchain International</p>
              <div className="hero_button">
                <Button href="#" variant="primary">Trading</Button>
              </div>
            </div>
          </div>
          <div className="offset-lg-2 col-lg-5">
            <div className="hero_image">
              <Image src={HeroImg}  alt="hero_image" priority/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeroSection