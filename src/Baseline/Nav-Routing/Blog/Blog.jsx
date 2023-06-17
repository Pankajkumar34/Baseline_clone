import React from 'react';
import '../Blog/blog.less';
import NavBar from '../../Navbar/Nav';
import image from '../../../image/seo-vs-ppc.png';
import image1 from '../../../image/noline.png';
import image2 from '../../../image/cms.png';
import image3 from '../../../image/srchcon.png';
import image4 from '../../../image/sdewvolp.png';
import image5 from '../../../image/seoexprt.png';
import image6 from '../../../image/frontend-pngg.png';
import image7 from '../../../image/website-development-team-front-laptop-build-website-65709-1.jpg';
import Blog2 from './Blog2';
const Blog = () => {
  return (
    <>
      <NavBar />
      <div className="main-blog-page">
        <div className="container">

          <div className="sub-blog-page">
            <div className="bog-heading">
              <h2 className='our-blog-heading'><span style={{ color: "#bb372a" }}>Our</span>Blog</h2>
            </div>
            <Blog2
              heading="SEO vs PPC: Which One Is Better for Your Business?"
              dscp="Search Engine Optimization (SEO) and Pay-per-click advertising (PPC) are two of the most popular ways for businesses to increase their online visibility and attract more traffic to their websites. Both SEO and PPC have their unique advantages and disadvantages, and choosing the right approach for your business can be a daunting task. In this article, we'll compare SEO and PPC and help you decide which one is better for your business."
              image={<img style={{ width: "100%", padding: "10px", height: "320px" }} src={image} alt="" />}

              image1={<img style={{ width: "100%", padding: "10px", height: "320px" }} src={image1} alt="" />}
              heading1="How E-Commerce Website Development Can Boost Your Online Sales"
              dscp1="In today's digital age, businesses must have an online presence to stay competitive. One of the best ways to do this is through e-commerce website development."
            />
            <Blog2
              heading="How to Choose the Right CMS for Your Website"
              dscp="When building a website, one of the most important decisions you will make is choosing the right Content Management System (CMS). A CMS is a software application that allows you to manage and publish content on your website."
              image={<img style={{ width: "100%", padding: "10px", height: "320px" }} src={image2} alt="" />}

              heading1="How to Optimize Your Website for Search Engines"
              dscp1="As a business owner, you know the importance of having a website. But, creating a website is not enough to get your business noticed online."
              image1={<img style={{ width: "100%", padding: "10px", height: "320px" }} src={image3} alt="" />}
            />
            <Blog2
              heading="The Advantages of Outsourcing IT Services for Your Business"
              dscp="Outsourcing IT services is the practice of hiring external companies or individuals to handle your business's IT needs. This approach offers numerous advantages to businesses, including:"
              image={<img style={{ width: "100%", padding: "10px", height: "320px" }} src={image4} alt="" />}

              heading1="The Benefits of Hiring an SEO Expert for Your Business"
              dscp1="In today's digital age, having a strong online presence is crucial for the success of any business. One of the best ways to ensure that your business gets noticed online is by hiring an SEO expert."
              image1={<img style={{ width: "100%", padding: "10px", height: "320px" }} src={image5} alt="" />}
            />
            <Blog2

              heading="Top Front-End Frameworks for Web Development"
              dscp="Front-end frameworks have become an integral part of web development. They provide developers with pre-built tools, libraries, and templates that make it easier and faster to build responsive and modern websites. "
              image={<img style={{ width: "100%", padding: "10px", height: "320px" }} src={image6} />}



              image1={<img style={{ width: "100%", padding: "10px", height: "320px" }} src={image7} />}
              heading1="What Should You Consider When Developing Your Website "
              dscp1="When developing a website, content is one of the most important aspects to consider. It is the primary means by which you communicate with your audience, and it plays a crucial role in driving traffic and engagement."

            />

          </div>
        </div>
      </div>
    </>
  )
}

export default Blog