import React from "react";
import NavBar from "../../Navbar/Nav";
import '../About/About.less';
import Aboutfooter from "../../Footer/Aboutfooter";
import baselinepic from '../../../image/baselinew1.png';
const About = () => {

    return (
        <>
            <NavBar />
            <div className="about-main">
                <div className="container">
                    <div className="row sub-main-about">
                        <div className="col-md-6 baseline-development">
                            <div className="about-text " style={{ width: "88%", lineHeight: " 26px" }}>
                                <h2 className=" aos-animate" style={{ fontSize: "60px", fontWeight: " 700", margin: "15px 0px 31px 0" }}>About<span style={{ color: " rgb(187, 55, 42)" }}>Us</span></h2>
                                <p>The baseline development group is focused on web services and solution with offices in Mohali and USA. We serve clients all around the world. The inner working of our website have proven vital to our success in online marketing. Connected learning, enhancements and expanding our affiliation with audience members have been our mantras.</p>
                            </div>
                            <div class="about-line  ">
                                <div className="play-btn">
                                    <i className="fa-solid fa-play-button fs-play-icon fa-play" ></i>
                                </div>
                                <div className="play-line ">

                                    <img src="https://baselineitdevelopment.com/assets/images/Line%206.png" style={{ margin: "-7px 29px 0 17", width: "77%" }} alt="Baseline" />

                                </div>
                                <div className="">

                                    <h4>DISCOVER</h4>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 baseline-banner">
                            <div className="container-fluid">
                                <div className="baseline-image-box">
                                    <img src={baselinepic} className="baseline__image" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Aboutfooter />


        </>
    )
}
export default About

