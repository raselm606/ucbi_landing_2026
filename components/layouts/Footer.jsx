
import Image from 'next/image'
import Link from 'next/link'
import send from '../../public/images/arrow.svg'
import cc from '../../public/images/cc.png'
import FooterLogo from '../../public/images/logo.svg'
import sms from '../../public/images/sms.svg'
import facebook from '../../public/images/social/facebook.svg'
import linkedin from '../../public/images/social/linkedin.svg'
import mail from '../../public/images/social/mail.svg'
import medium from '../../public/images/social/medium.svg'
import twitter from '../../public/images/social/s.svg'
const Footer = () => {
  return (
    <>
    <div className="footer_section">
      <div className="container cline">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <div className="footer_info">
              <Image  src={FooterLogo} width={120} height={52} alt="Footer Logo"/>
              <p>Receive exclusive UCBI updates <br />straight to your inbox.</p>
              <form action="#" className="footer_subscriber">
                <div className="input-group from_area">
                  <span className="input-group-text"><Image src={sms} alt="Mail Icon" /></span>
                  <input type="email" placeholder="Your email address"   className="form-control" />
                  <button className="send_btn" type="submit" >
                    <Image src={send} alt="Send Icon" />
                  </button>
                </div>
                <div className="mb-3 mt-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label"  >Check me out</label>
                </div>
              </form>
            </div>
          </div>
          <div className=" offset-lg-2 col-lg-2 mb-3">
            <div className="footer_nav_menus">
              <h6>Services</h6>
              <div className="footer_navs">
                <ul>
                  <li><Link href="#">Blockchain</Link></li>
                  <li><Link href="#">WEB3 Advisory</Link></li>
                  <li><Link href="#">Treasury Fundraiser</Link></li>
                  <li><Link href="#">Secure Data Vaults</Link></li>
                  <li><Link href="#">On-Chain Analytics</Link></li>
                  <li><Link href="#">Token Launch Support</Link></li>
                  <li><Link href="#">AML & KYC Verification</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="  col-lg-2 mb-3">
            <div className="footer_nav_menus">
              <h6>Follow Us</h6>
              <div className="footer_navs">
                <ul>
                  <li><Link href="#">Medium</Link></li>
                  <li><Link href="#">Coinmarketcap</Link></li>
                  <li><Link href="#">Blockchain Explorer</Link></li>
                  <li><Link href="#">CoinGecko</Link></li>
                  <li><Link href="#">Twitter</Link></li>
                  <li><Link href="#">Telegram</Link></li> 
                </ul>
              </div>
            </div>
          </div>

          <div className="  col-lg-1 mb-3">
            <div className="footer_nav_menus">
              <h6>Contact</h6>
              <div className="footer_navs">
                <ul>
                  <li><Link href="#" mailto="contact@ucbibanking.io">Contact@ucbibanking.io</Link></li> 
                  <li><Link href="#" mailto="support@ucbibanking.io">Support@ucbibanking.io</Link></li> 
                  
                </ul>
              </div>
              <div className="cc_web">
                <Image  src={cc} alt='ucbibanking.io' />
                     
                    <Link href="#"> 
                       ucbibanking.io
                    </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    <div className="bottom_footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_elements">
              <div className="social">
                <ul>
                  <li><Link href="#"><Image   src={mail} alt="mail"/> </Link></li>
                  <li><Link href="#"><Image   src={twitter} alt="twitter"/></Link></li>
                  <li><Link href="#"><Image   src={linkedin} alt="linkedin"/></Link></li>
                  <li><Link href="#"><Image   src={facebook} alt="facebook"/></Link></li>
                  <li><Link href="#"><Image   src={medium} alt="medium"/></Link></li>
                </ul>
              </div>
              <div className="copyright">
                <p>UCBI Group Technologies Copyright © 2026 All rights reserved</p>
              </div>
              <div className="cc_terms">
                <ul>
                  <li><Link href="#">Privacy Policy</Link></li>
                  <li><Link href="#">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer