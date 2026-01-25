import Button from '@/components/ui/Button';
const PapersToken = () => {
  return (
    <>
    <div className="papers_token_section">
        <div className="container cline">
            <div className="row g-0">
                <div className="col-lg-5 mb-3">
                    <div className="white_paper_area" data-aos="fade-up" data-aos-delay="600">
                       <h2 className="section_title_white" data-aos="fade-up" data-aos-delay="600">
                        UCBI Blockchain Data <br /> Banking Whitepaper
                       </h2>
                       <p className="section_paragraph_white" data-aos="fade-up" data-aos-delay="700">
                        The UCBI Banking Whitepaper provides a comprehensive overview of our blockchain-based data banking ecosystem, designed to deliver secure, transparent, and efficient financial services.
                        </p> 
                        <Button variant="primary" href="" data-aos="fade-up" data-aos-delay="700"> Download</Button> 
                    </div>
                </div>
                <div className=" offset-lg-2 col-lg-5">
                    <div className="tokenomics_area" data-aos="fade-up" data-aos-delay="600">
                        <h2 className="section_title_dark" data-aos="fade-up" data-aos-delay="700">
                            Tokenomics Overview <br /> (Support Line)
                        </h2>
                        <p className="section_paragraph_dark" data-aos="fade-up" data-aos-delay="800">
                            The UCBI tokenomics model is carefully structured to support longterm value creation, sustainable ecosystem growth, and broad utility within the UCBI Banking platform.
                        </p>
                        <Button variant="primary" href="" data-aos="fade-up" data-aos-delay="700"> Download</Button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PapersToken