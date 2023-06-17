import React from "react";
import '../Webdesign/Webdesign.less';
import NavBar from "../../../Navbar/Nav";
import webdesignimg from '../../../../image/19197357.png';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Aboutfooter from "../../../Footer/Aboutfooter";
const WebdesignPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <NavBar />
            <div className="web_design_banner">
                <div className="container">
                    <div className=" row webdesign-box">
                        <div className="col-md-12 col-lg-12 col-sm-12">
                            <div className="web_design_banner_content">
                                <h1>Best Web Designing Service</h1>
                                <h3>Creating Unique Web Designs, Bringing Your Websites Back To Life!</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* ---------- */}
            <div className="web_desiging_one">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="web_desiging_one_content">
                                <h2>We use cutting-edge, interactive, and future-ready web designs to propel your business's growth and profits.</h2>
                                <p>Baseline IT Development is a premier <b>web design company in Mohali</b> that strives to assist clients in obtaining an immersive, appealing, and result-driven website by utilizing the best web design technologies. In order to set your website apart from the competition, our creative team of the best web designers always puts their best foot forward - ensuring your success.</p>
                                <p>Given how important an engaging website can be to your growth and success, ignoring the design of your website can be a big mistake. It all goes through your website today, whether it's about increasing sales or generating leads.</p>
                                <p>Every website we develop and design will thus be finalized after extensive analysis and research. Before designing your website, our skilled website designers in Mohali consider all performance factors, the latest design trends, search factors, and more.</p>
                                <p><i>With <b className="color-red " style={{ color: "#bb372a" }}>Baseline IT Development,</b> you can be sure that your growth and success will go hand in hand.</i></p>
                                <div className="contact-btn">
                                    <NavLink to='/contactpage' className="btn-contact_link" type='button' >Contact us<span><i style={{ paddingLeft: "10px" }} className="fa-solid fa-phone"></i></span></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="web_desiging_one_img">
                                <img style={{ width: "100%" }} src={webdesignimg} alt="Web Designing Company Mohali" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------2 */}
            <div className="web_desiging_two">
                <div className="container">
                    <div className="web_des_head">
                        <h2>What Contributes To A Successful Website Design?</h2>
                        <p>Web designs must maximize user engagement while also increasing conversions.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="web_des_services aos-init aos-animate">
                                <div class="bg_circule"></div>
                                <p>Before you invest your money and time in working with us, we'd like to give you a quick rundown of the elements and factors that contribute to an influential website design. A compelling website design, in essence, represents your business's persona. It will motivate more and more users if it is built with an interactive architecture, educative elements, exciting CTAs, and storytelling.</p>
                                <p>Underperforming websites, on the other hand, are created by drawing inspiration from a few top internet sources or by lacking any of the factors listed above.</p>
                                <p>However, as your go-to <b className="color-red" style={{ color: "#bb372a" }}>website designing company in Mohali</b>, we take all of these factors into account - ensuring that you only get your hands on the most immersive web designs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------3 */}

            <div className="web_designig_three">
                <div className="container">
                    <div className="web_designig_three_head">
                        <h2>Why Choose Baseline IT Development?</h2>
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <div className="web_designig_three_content">
                                <ul>
                                    <li><i className="fa-regular fa-hand-point-right"></i><span> Align your website's design with your customers' needs.</span></li>
                                    <li><i className="fa-regular fa-hand-point-right"></i><span> Collect, analyze, and combine user interactions to give your website its final shape.</span></li>
                                    <li><i className="fa-regular fa-hand-point-right"></i><span> Creating a website that is scalable, accessible, and interactive.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="web_designig_three_content">
                                <ul>
                                    <li><i className="fa-regular fa-hand-point-right"></i><span> Designing a visually appealing and enticing website.</span></li>
                                    <li><i className="fa-regular fa-hand-point-right"></i><span> Refine concepts dynamically to achieve the best results.</span></li>
                                    <li><i className="fa-regular fa-hand-point-right"></i><span> Create and maintain prototypes that reflect the best user experience.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="designing-content">
                        <h2>Let us collaborate!</h2>
                        <p><i>Need a quote for a new web design or re-design project? <br/>Give our <b>web designing in Mohali</b> some information about your project and <a href="https://baselineitdevelopment.com/contact">get started today!</a></i></p>
                    </div>
                </div>
            </div>
            <Aboutfooter/>
        </>
    )
}

export default WebdesignPage