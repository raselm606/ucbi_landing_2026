import Image from "next/image";
import Link from "next/link";
import goalImg from '../../public/images/goal.jpg';
import azbitf from '../../public/images/margin.png';
import yahoof from '../../public/images/yahoo.png';
import zoomexf from '../../public/images/zoomex.png';
const GoalandEffort = () => {
  return (
    <>
    <div className="goal_sectio line_top">
        <div className="container cline">
            <div className="row g-0">
                <div className="col-lg-6 mb-3 ">
                    <div className="goal_content bg_bb">
                        <h2 className="section_title_dark" data-aos="fade-up" data-aos-delay="700">
                            Main Goal & Efforts support <br /> secure digital innovation.
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="750" className="section_paragraph_dark">We deliver transparent, global financial solutions bridging traditional finance and digital assets, driving user-centric innovation and collaborative growth in decentralized finance.</p>

                        <div className="divider_lin"></div>

                        <div className="featured_o" data-aos="fade-up" data-aos-delay="800">
                            <p>We are featured on:</p>
                            <Link href="#" className="fe_link"><Image src={yahoof} alt="featured logos" width={100} height={50} /></Link>
                            <Link href="#" className="fe_link"><Image src={azbitf} alt="featured logos" width={100} height={50} /></Link>
                            <Link href="#" className="fe_link"><Image src={zoomexf} alt="featured logos" width={100} height={50} /></Link>
                             
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 mb-3">
                    <div className="goal_im" >
                        <Image data-aos="fade-up" data-aos-delay="850" src={goalImg} alt="goal image" width={600} height={400} />
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default GoalandEffort