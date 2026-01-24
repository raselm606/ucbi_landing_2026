"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import coin1 from '../../public/images/coin1.png';
import coin2 from '../../public/images/coin2.png';
import coin3 from '../../public/images/coin3.png';
import coin4 from '../../public/images/coin4.png';
import contractImg from '../../public/images/contract.png';

const ContractInvestment = () => {
const [priceBTC, setBTCPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin",
      {
        headers: {
          "x-cg-demo-api-key": "x-cg-demo-api-key",
        },
      }
    )
      .then(res => {
        if (!res.ok) throw new Error("API Error");
        return res.json();
      })
      .then(data => {
        setBTCPrice(data?.bitcoin?.usd ?? "N/A");
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load crypto prices");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
     
    <div className="goal_sectio">
        <div className="container cline">
            <div className="row g-0 cont_bg align-items-center">
                <div className="col-lg-6 mb-3 ">
                    <div className="goal_content contract_in">
                        <h2 className="section_title_white">
                            Contract staking investment in UCBI
                        </h2>
                        <p className="section_paragraph_white">
                            Experience a 10% Contract Investment opportunity with UCBI Banking, designed to strategically allocate funds into the ecosystem’s development and expansion initiatives. This investment model supports the growth.
                        </p>

                        <div className="divider_lin ggl"></div>

                        
                    </div>
                    
                </div>
                <div className=" col-lg-5 mb-3">
                    <div className="goal_im">
                        <Image src={contractImg} alt="goal image" width={600} height={400} />
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="token_info">
                        <p>Token investment: 
       
                        </p>
                        <div className="token_slide">

                            <Marquee speed={60} gradient={false}>
                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={coin1} alt="" width={50} height={50} />
                                    <span>Bitcoin</span>
                                    </div>
                                    <span className="price_t">${priceBTC}  </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={coin2} alt="" width={50} height={50} />
                                    <span> Ethereum</span>
                                    </div>
                                    <span className="price_t">$3.09876  </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={coin3} alt="" width={50} height={50} />
                                    <span> Ripple</span>
                                    </div>
                                    <span className="price_t">$ 30.0989      </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={coin4} alt="" width={50} height={50} />
                                    <span> PhantomLedger</span>
                                    </div>
                                    <span className="price_t">-$0.562     </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={coin1} alt="" width={50} height={50} />
                                    <span>VeilCrypto</span>
                                    </div>
                                    <span className="price_t">-$0.839  </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={coin2} alt="" width={50} height={50} />
                                    <span> RuneToken</span>
                                    </div>
                                    <span className="price_t">+$0.567    </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={coin3} alt="" width={50} height={50} />
                                    <span> MysticHash</span>
                                    </div>
                                    <span className="price_t">-$1.004      </span>
                                </div>

                                <div className="token_item">
                                    <div className="main_coin">
                                        <Image src={coin4} alt="" width={50} height={50} />
                                    <span> PhantomLedger</span>
                                    </div>
                                    <span className="price_t">-$0.562     </span>
                                </div>

                            </Marquee>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default ContractInvestment