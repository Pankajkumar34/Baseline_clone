import React from "react";
import NavBar from "../../../Navbar/Nav";
import digitailimg from '../../../../image/digital-marketing-image.png'
import '../DigitalMarketing/DigitalMarketing.less';
import Aboutfooter from "../../../Footer/Aboutfooter";
const DigitalMarketing = () => {
    return (
        <>
            <NavBar />
            <div className="digitalmarketin_banner">
                <div className="container">
                    <div className=" row webdesign-box">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <div className="web_design_banner_content">
                                <h1>Best <span style={{ color: "#bb372a" }}>Digital Marketing</span> Company in Mohali, India</h1>
                                <p className="webdesign-text-p">Baseline IT Development - Digital Marketing Services
                                    Analyze, Advertise, Optimize - we do it all for your true digital growth!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* --------1 */}
            <div className="digital_marketing_one">
                <div className="container">
                    <div className="row item_center">
                        <div className="col-md-6">
                            <div className="digital_marketing_one_content">
                                <h4>Nowadays, no online business can imagine its existence without incorporating digital marketing se4vices into its marketing and growth strategies. Digital marketing is the norm, the future, and the face of this technologically advanced world.
                                </h4>
                                <p>So, since you're here, we'd like to ask you where you see your company today and in the next 4-5 years. You most likely have no answer to this question! </p>
                                <p>Let us give you a clear answer with the following quote from renowned Czech writer Milan Kundera: </p>
                                <div className="btt">
                                    <h3>“Business has only two functions- marketing and innovation.” - Milan Kundera</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="digital_marketing_one_img">
                                <img style={{ width: "100%", objectFit: "contain" }} src={digitailimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------2 */}
            <div className="on-page-digital">
                <div className="container">
                    <div className="digital_txt">
                        <p>Don't worry if your company isn't getting the recognition it deserves on the internet. We're here to help! Baseline IT Development is the #1 digital marketing company in Mohali, thanks entirely to the tireless efforts of our dedicated, experienced IT professionals. With measurable, innovative, and organic digital marketing campaigns, we specialize in creating digital marketing solutions and strategies that accelerate your online growth and get your business where it needs to be.

                        </p>
                        <p>The only thing that matters to the Baseline digital marketing team is getting better results. Connect with us today to see what we can do for you!!</p>
                    </div>
                </div>
            </div>
            {/* ------3 */}
            <div className="digital-marketing-services">
                <div className="container">
                    <div className="digital_service_txt">
                        <h2>Our Digital Marketing Services</h2>
                        <p>Name the types of digital marketing services your company provides or specializes in!
                        </p>
                    </div>
                    <div className="digital_service_txt">
                        <h2>We Make Your Objectives Come True </h2>
                        <p>In a broader sense, digital marketing is no longer a negotiable component for businesses that want to give their customers the best option.</p>
                        <p>People no longer need to conduct offline searches for items because they can do so instantly with a few taps and swipes on their gadgets. Everything has moved online, including working, shopping, researching, and browsing. Thereby, the only chance your brand has to succeed or to be the best is to choose digital marketing services that are focused on your target audience. </p>
                        <p>Fortunately, we're here to make things easier for you with our <b>digital marketing services Mohali:</b></p>

                        <ul className="digital-marketing-list">
                            <li>Enhanced brand awareness.</li>
                            <li>Amplified lead generation.</li>
                            <li>Cost-effective customer acquisition.</li>
                            <li>Unprecedented brand value &amp; reputation.</li>
                            <li>Focus on the entire sales funnel.</li>
                            <li>Get qualified leads.</li>
                            <li>Careful campaign tracking, reports, and measurements.</li>
                            <li>Freedom to adapt to ever-changing customer profiles.</li>
                        </ul>
                    </div>
                    <div className="digital_service_txt">
                        <h2>Why Baseline IT Development For Your Digital Transformation? </h2>
                        <p>Are you ready to unleash your true worth and brand recognition? We're always ready and able! You're only a few steps away from contacting the <b>best digital marketing company in Mohali</b>and accomplishing your digital dream, growth, and success.</p>
                        <p>Call us or <a href="https://baselineitdevelopment.com/contact">request a quote</a> today! </p>
                    </div>
                </div>
            </div>
<Aboutfooter/>


        </>
    )
}
export default DigitalMarketing