import React from "react";
// import '../Webdevelopment/Experience.less';
import './Experience.less';
import baselineSvg from '../../../../image/b-company-2.png';
import Section4 from "../../../Section4/Section4";
const Experience = () => {
    return (
        <div className="service-development-page">
            <div className="container">

                <div className="baseline_company_d ">
                    <p></p>
                    <h3 className="baseline_company_d_experienece" >We create stunning websites…………………. We develop scalable user experiences…………….. We build future-ready brand identities!! </h3>

                    Developing a website for your business is the first step in climbing the digital marketing ladder, and we are experts at giving your first step the recognition it deserves. As the best web development company in Mohali, we know what it takes to develop a creative, engaging, and user-friendly website. Founded in Mohali in 2012, we have a team of the best website developers in India who always go above and beyond to provide you with a future-proof website.
                    <br /><br />
                    Baseline IT Development has been rated as one of the best web development companies in India by various reputed online sources and review sites. We have a large pool of talented, experienced web developers who provide clients with nothing less than an award-winning website.
                    <br /><br />
                    Over the years, our dedicated website developers in Mohali have successfully completed projects for hundreds of clients, including conglomerates, SMEs, startups, and some large corporations.
                    <br /><br />
                    We always focus on developing an all-inclusive website that entices users and increases your lead generation, revenues, and profits while keeping all trends and updates in mind.
                    <p></p>
                </div>
                <div class="baseline_company_d_img">
                    <img style={{ width: "100%" }} src={baselineSvg} alt="" />
                </div>
                <div className="New_content">
                    <h3>One-Stop Destination For All Your Web Development Needs </h3>
                    <p> As the best web development company in Mohali, we offer our customers an extensive range of website development services all under one roof. By doing so, we hope to ease the burden on businesses that require multiple types of websites based on their specializations and industries. </p>
                    <div className="list-experience">
                        <ul className="experience-ul">
                            <li>
                                <a href="https://baselineitdevelopment.com/hire-php-developer">Php Development</a><br />
                            </li>
                            <li>
                                <a href="https://baselineitdevelopment.com/hire-reactjs-developer">React.js</a><br />
                            </li>
                            <li>
                                <a href="https://baselineitdevelopment.com/bigcommerce-development-services">Bigcommerce</a><br /></li>
                            <li>
                                <a href="https://baselineitdevelopment.com/hire-laravel-developer">Laravel</a><br /></li>
                            <li>
                                <a href="https://baselineitdevelopment.com/hire-shopify-developer">Shopify</a><br /></li>
                            <li>
                                <a href="https://baselineitdevelopment.com/hire-wordpress-developer">Wordpress</a>
                            </li>
                            <li><a href="https://baselineitdevelopment.com/hire-web-developer">Web Deveolper</a>
                            </li>
                            <li>
                                <a href="https://baselineitdevelopment.com/hire-woocommerce-developer">Woo Commerce Deveolper</a>
                            </li>
                            <li>
                                <a href="https://baselineitdevelopment.com/seo-experts-india">SEO-Experts India</a>
                            </li>
                            <li>
                                <a href="https://baselineitdevelopment.com/seo-expert-kerala">SEO Expert Kerala</a>
                            </li>
                        </ul>
                        <div className="baseline-experience-p">
                            <p>We leave no stone unturned in order to provide you with a measurable website that checks all of the usability, functionality, and performance boxes.
                                Baseline IT Development believes in transforming your business by accelerating customer interactions through the use of cutting-edge technology and design.</p>
                        </div>
                    </div>
                </div>
                <div className="baseline-question-box">
                    <h4 className="Main_question">
                        What Sets Baseline IT Development Apart From The Competition?</h4>


                    <ul className="experience-ul">
                        <li>Years of knowledge, experience, and expertise.<br /></li>
                        <li>Hundreds of satisfied clients from a variety of industries.<br /></li>
                        <li>A goal-oriented, results-driven approach.<br /></li>
                        <li>100% Customized Solutions.<br /></li>
                        <li>Experienced, talented, and committed website developers.<br /></li>
                        <li>Commitment to customer satisfaction and success.<br /></li>
                        <li>24/7 Customer Support.</li>
                    </ul>

                </div>
                <div className="technologies">
                    <Section4 />
                </div>
                <div className="main-question">
                    <h3 id="Main_question_1">We Prioritize Meeting Your Long-Term Business Objectives</h3>
                    <p>We are always eager to work with clients who want to achieve business success through a combination of technology, innovation, and a user-friendly website. Our team will first listen to each of your needs and then create a proper framework to provide you with a feature-rich, future-ready website.
                        <br /><br />
                        Let's get started on your project! You’re one step away from contacting the best website development company in Mohali. Connect with one of our <a href="https://baselineitdevelopment.com/contact">web developers</a> now.</p>
                </div>

            </div>
        </ div>
    )
}
export default Experience