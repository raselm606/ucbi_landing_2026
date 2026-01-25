"use client";
import { blogData, blogSectionData } from "@/lib/mock-data/blog";
import { slugify, trimByWords } from "@/lib/utils/text";
import Image from "next/image";
import Link from "next/link";
import arrow_blog from '../../public/images/arrow_blog.svg';
const BlogSection = () => {
  return (
    <>
    <div className="blog_section">
        <div className="container cline">
            <div className="row mb-3">
                <div className="col-lg-12 text-center">
                    <h2 data-aos="fade-up" data-aos-delay="600" className="section_title_dark">
                        {blogSectionData.title}
                        </h2>
                </div>
            </div>
            <div className="row drs">

                { blogData.map(({ id, thumb, date, title, desc }) => (
                <div className="col-lg-3 mb-3 mt-3" key={id}>
                    
                    <div className="blog_item" >
                        <Link href={`/blog/${slugify(title)}`}>
                        <div className="blog_img" data-aos="fade-up" data-aos-delay="700">
                            <Image src={thumb} alt="blog1" width={370} height={250} />
                            <div className="blog_date">
                                <span>{date}</span>
                            </div>
                        </div>
                         </Link>
                        <div className="blog_content">
                            <h4 data-aos="fade-up" data-aos-delay="750">{title}</h4>
                            <p data-aos="fade-up" data-aos-delay="800">{trimByWords(desc,20)}</p>
                            <Link data-aos="fade-up" data-aos-delay="800" href="#">Read more <Image src={arrow_blog} alt="arrow" width={15} height={15} /> </Link>
                        </div>
                    </div>
                   
                </div>
                ))}
               
               

                

            </div>
        </div>
    </div>
    </>
  )
}

export default BlogSection