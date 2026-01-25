'use client';
import { drivingData } from "@/lib/mock-data/driving";
import Image from "next/image";
import CountUp from 'react-countup';
const Driving = () => {
  return (
    <>
        <div className="driving_section ">
            <div className="container cline">
                <div className="row align-items-center ">
                    <div className="col-lg-5 col-md-6 mb-3">
                        <div className="driving_img" data-aos="fade-up" data-aos-delay="700">
                            <Image src={drivingData.img} alt="Driving Image" height={100} width={550} />
                        </div>
                    </div>
                    <div className="offset-lg-2 offset-md-1 col-md-5 col-lg-4">
                        <div className="driving_content">
                            <h2 className="section_title_dark" data-aos="fade-up" data-aos-delay="700">
                                {drivingData.title[0]} <br /> {drivingData.title[1]}
                            </h2>
                            <p className="section_paragraph_dark" data-aos="fade-up" data-aos-delay="800">
                                {drivingData.para[0]}
                            </p>
                            <p className="section_paragraph_dark" data-aos="fade-up" data-aos-delay="900">
                                {drivingData.para[1]}
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-12 mt-5">
                        <div className="big_text_number">
                            {/* <span>$16,949,639.46</span> */}
                            <CountUp start={9949639.46} end={16949639.46} decimals={2} decimal="." 
                            prefix="$"   duration={4} delay={0} >
                                {({ countUpRef }) => (
                                    <div>
                                    <span ref={countUpRef} />
                                    </div>
                                )}
                                </CountUp>
                        </div>
                    </div>
                </div>


                
            </div>

        </div>
    </>
  )
}

export default Driving