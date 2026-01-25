"use client";
import Image from "next/image";
import Link from "next/link";
import arrow_blog from '../../public/images/arrow_blog.svg';
import blog1 from '../../public/images/blog1.jpg';
import blog2 from '../../public/images/blog2.jpg';
import blog3 from '../../public/images/blog3.jpg';
const BlogSection = () => {
  return (
    <>
    <div className="blog_section">
        <div className="container cline">
            <div className="row mb-3">
                <div className="col-lg-12 text-center">
                    <h2 data-aos="fade-up" data-aos-delay="600" className="section_title_dark">Stay updated with the latest  from UCBI</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 mb-3">
                    
                    <div className="blog_item">
                        <Link href="#">
                        <div className="blog_img" data-aos="fade-up" data-aos-delay="700">
                            <Image src={blog1} alt="blog1" width={370} height={250} />
                            <div className="blog_date">
                                <span>January 18, 2026</span>
                            </div>
                        </div>
                         </Link>
                        <div className="blog_content">
                            <h4 data-aos="fade-up" data-aos-delay="750">Bringing secure, scalable solutions to global.</h4>
                            <p data-aos="fade-up" data-aos-delay="800">UCBI delivers secure and scalable core banking solutions designed to support the evolving needs of global digital finance...</p>
                            <Link data-aos="fade-up" data-aos-delay="800" href="#">Read more <Image src={arrow_blog} alt="arrow" width={15} height={15} /> </Link>
                        </div>
                    </div>
                   
                </div>
                <div className="col-lg-3 mb-3">
                    
                    <div className="blog_item">
                        <Link href="#">
                        <div className="blog_img" data-aos="fade-up" data-aos-delay="700">
                            <Image src={blog2} alt="blog1" width={370} height={250} />
                            <div className="blog_date">
                                <span>January 20, 2026</span>
                            </div>
                        </div>
                         </Link>
                        <div className="blog_content">
                            <h4 data-aos="fade-up" data-aos-delay="750">Bringing secure, scalable solutions to global.</h4>
                            <p data-aos="fade-up" data-aos-delay="800">UCBI delivers secure and scalable core banking solutions designed to support the evolving needs of global digital finance...</p>
                            <Link data-aos="fade-up" data-aos-delay="800" href="#">Read more <Image src={arrow_blog} alt="arrow" width={15} height={15} /> </Link>
                        </div>
                    </div>
                   
                </div>
                <div className="col-lg-3 mb-3">
                    
                    <div className="blog_item">
                        <Link href="#">
                        <div className="blog_img" data-aos="fade-up" data-aos-delay="700">
                            <Image src={blog3} alt="blog1" width={370} height={250} />
                            <div className="blog_date">
                                <span>January 22, 2026</span>
                            </div>
                        </div>
                         </Link>
                        <div className="blog_content">
                            <h4 data-aos="fade-up" data-aos-delay="750">Bringing secure, scalable solutions to global.</h4>
                            <p data-aos="fade-up" data-aos-delay="800">UCBI delivers secure and scalable core banking solutions designed to support the evolving needs of global digital finance...</p>
                            <Link data-aos="fade-up" data-aos-delay="800" href="#">Read more <Image src={arrow_blog} alt="arrow" width={15} height={15} /> </Link>
                        </div>
                    </div>
                   
                </div>

                <div className="col-lg-3 mb-3">
                    
                    <div className="blog_item">
                        <Link href="#">
                        <div className="blog_img" data-aos="fade-up" data-aos-delay="700">
                            <Image src={blog2} alt="blog1" width={370} height={250} />
                            <div className="blog_date">
                                <span>January 25, 2026</span>
                            </div>
                        </div>
                         </Link>
                        <div className="blog_content">
                            <h4 data-aos="fade-up" data-aos-delay="750">Bringing secure, scalable solutions to global.</h4>
                            <p data-aos="fade-up" data-aos-delay="800">UCBI delivers secure and scalable core banking solutions designed to support the evolving needs of global digital finance...</p>
                            <Link data-aos="fade-up" data-aos-delay="800" href="#">Read more <Image src={arrow_blog} alt="arrow" width={15} height={15} /> </Link>
                        </div>
                    </div>
                   
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default BlogSection