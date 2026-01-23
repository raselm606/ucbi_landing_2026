'use client';
import Image from "next/image";
import CountUp from 'react-countup';
import driving_img from '../../public/images/driving.png';
const Driving = () => {
  return (
    <>
        <div className="driving_section ">
            <div className="container cline">
                <div className="row align-items-center ">
                    <div className="col-lg-5 col-md-6 mb-3">
                        <div className="driving_img">
                            <Image src={driving_img} alt="Driving Image" />
                        </div>
                    </div>
                    <div className="offset-lg-2 offset-md-1 col-md-5 col-lg-4">
                        <div className="driving_content">
                            <h2 className="section_title_dark">
                                Driving the future of finance <br /> UCBI’s mission & vision
                            </h2>
                            <p className="section_paragraph_dark">
                                Our mission is to redefine the global financial landscape by seamlessly integrating blockchain technology with institutional-grade banking  solutions we are committed to pioneering a new era of decentralized  finance (DeFi) — one that harmonizes regulatory compliance financial  sovereignty and technological innovation
                            </p>
                            <p className="section_paragraph_dark">
                                Our vision is to establish as the premier bridge between traditional  finance
                                and the decentralized economy by leveraging cutting-edge  blockchain
                                infrastructure tokenized financial instruments and advanced  data banking
                                solutions we aim to create an ecosystem where institutional investors
                                enterprises and retail participants can interact securely
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