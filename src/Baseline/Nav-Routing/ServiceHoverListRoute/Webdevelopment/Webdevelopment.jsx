import React from "react";
import NavBar from "../../../Navbar/Nav";
import '../Webdevelopment/Webdevelopment.less';
import bcompany from '../../../../image/b-company.png';
import Experience from '../Webdevelopment/BaselineExperience';
import Aboutfooter from "../../../Footer/Aboutfooter";
const Webdevelopment = () => {
    return (
        <>
            <div className="nav-footer">
                <NavBar />

                <div className="main-webdevelopent-box">
                    <div className="container">
                        <div className="row development_c_banner">
                            <div className="col-md-5">
                                <div className="webdevelopment-heading">
                                    <h1 className="webdevelopment-heading">Best Web Development Company In Mohali</h1>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="development_c_banner_img">
                                    <img style={{ width: "100%" }} src={bcompany} alt="Web Development Company Mohali" />
                                </div>

                            </div>
                        </div>
                        <div className="experience-box">
                            <Experience />
                        </div>

                    </div>

                </div>
                <Aboutfooter/>
            </div>
        </>
    )
}
export default Webdevelopment