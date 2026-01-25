import Image from "next/image";
import Marquee from "react-fast-marquee";
import one from "../../public/images/partners/1.png";
import two from "../../public/images/partners/2.png";
import three from "../../public/images/partners/3.png";
import four from "../../public/images/partners/4.png";
import five from "../../public/images/partners/5.png";
import six from "../../public/images/partners/6.png";
const Partners = () => {
  return (
    <>
    <div className="partner_section">
        <div className="container cline ">
          
                 <Marquee speed={60} gradient={false}>
                    
                    <div className="partner_img" >
                        <Image src={one} alt="Partner Logo"/>
                        <Image src={two} alt="Partner Logo"/>
                        <Image src={three} alt="Partner Logo"/>
                        <Image src={four} alt="Partner Logo"/>
                        <Image src={five} alt="Partner Logo"/>
                        <Image src={six} alt="Partner Logo"/>
                        
                        <Image src={one} alt="Partner Logo"/>
                        <Image src={two} alt="Partner Logo"/>
                        <Image src={three} alt="Partner Logo"/>
                        <Image src={four} alt="Partner Logo"/>
                        <Image src={five} alt="Partner Logo"/>
                        <Image src={six} alt="Partner Logo"/>
                    </div>
                    
                    </Marquee>
                
                
            
        </div>
    </div>
    </>
  )
}

export default Partners