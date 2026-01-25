import Image from "next/image";
import timelineImage from '../../public/images/timeline_line.png';
const OurJourney = () => {
  return (
    <>
    <div className="ourjourney_section">
        <div className="container cline">
          <div className="row">
            <div className="col-lg-4">
              <div className="journey_content" data-aos="fade-up" data-aos-delay="600">
                <h2 className="section_title_white">Our journey through the years <br /> reflects our vision and progress <br /> in digital banking.</h2> 
                </div>
            </div>
          </div>

          <div className="timeline_area">
            <Image data-aos="fade-up" data-aos-delay="600" className="line_img" src={timelineImage} alt="timeline" />
            <div className="row justify-content-center  mt-5">
              <div className="col-lg-2">
                  <div className="timeline_item timeline_one" data-aos="fade-up" data-aos-delay="700">
                    <h4>Founding Year</h4>
                    <p>Laying the foundation 2019</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2">
                  <div className="timeline_item timeline_two" data-aos="fade-up" data-aos-delay="800">
                    <h4>Year 3</h4>
                    <p>Building the Ecosystem</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2">
                  <div className="timeline_item timeline_three" data-aos="fade-up" data-aos-delay="900">
                    <h4>Year 5</h4>
                    <p>Expansion & Market Validation</p>
                  </div>
              </div>

              <div className="offset-lg-1 col-lg-2"> 
                  <div className="timeline_item timeline_four" data-aos="fade-up" data-aos-delay="950">
                    <h4>Today</h4>
                    <p>Scaling for Institutional Adoption</p>
                  </div> 
              </div>

            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default OurJourney