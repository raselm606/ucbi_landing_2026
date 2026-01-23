import Button from '@/components/ui/Button';
const PapersToken = () => {
  return (
    <>
    <div className="papers_token_section">
        <div className="container cline">
            <div className="row g-0">
                <div className="col-lg-6 mb-3">
                    <div className="white_paper_area">
                       <h2 className="section_title_white">
                        UCBI Blockchain Data <br /> Banking Whitepaper
                       </h2>
                       <p className="section_paragraph_white">
                        The UCBI Banking Whitepaper provides a comprehensive overview of our blockchain-based data banking ecosystem, designed to deliver secure.
                        </p> 
                        <Button variant="primary" href=""> Download</Button> 
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tokenomics_area">
                        <h2 className="section_title_dark">
                            Tokenomics Overview <br /> (Support Line)
                        </h2>
                        <p className="section_paragraph_dark">
                            The UCBI tokenomics model is carefully structured to support longterm value creation, sustainable ecosystem growth, and broad utility within the UCBI Banking platform.
                        </p>
                        <Button variant="primary" href=""> Download</Button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default PapersToken