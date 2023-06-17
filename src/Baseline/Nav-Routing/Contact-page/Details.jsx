import React from "react";
import '../Contact-page/Details.less'

const Details = () => {
    return (
        <>
            <div className="main-details-box">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 information">
                            <div className="inforamtion-text">
                                <h2 style={{ fontWeight: "700" }}> <span style={{ color: "#bb372a" }}>Contact </span>Details</h2>
                                <ul className="information-list">
                                    <li>1st FLOOR, F33</li>
                                    <li>Phase-8, Industrial Area, Sector 73</li>
                                    <li>Sahibzada Ajit Singh Nagar, Punjab 160071</li>
                                    <li className="emilii">E-Mail:<a style={{ color: "#bb372a", textDecoration: "none" }} href=""> hr@baselineitdevelopment.com</a></li>
                                    <li className="sless">E-Mail:<a style={{ color: "#bb372a", textDecoration: "none" }} href=""> sales@baselineitdevelopment.com</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-6 information-socialmedia">
                            <div className="socialmedia-icons">
                                <h2 style={{ color: "#bb372a", fontWeight: "700", fontSize: "32px" }}> Chat <span style={{ color: "black" }}> With Us </span> </h2>
                                <div className="whatsapp">

                                    <img className="whatsapp_logo" src="https://i.postimg.cc/G3Dk7x3H/Png-Item-404856.png" />

                                    <div id="text_number" className="whatsapp_data">
                                        <a style={{ color: "green", fontWeight: "700", fontSize: "18px", textDecoration: "none" }} href="https://wa.me/7340740007">7340740007</a>
                                    </div>
                                </div>
                                <div className="whatsapp">

                                    <img className="whatsapp_logo" src="https://www.freepnglogos.com/uploads/skype-logo-png/skype-logo-vector-icon-template-clipart-download-0.png" />

                                    <div id="skype_text" className="whatsapp_data">
                                        <a style={{ color: "#0d6efd", fontWeight: "700", fontSize: "18px", textDecoration: "none" }} href="skype:baselinesales@outlook.com?chat">Start Chat</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="map-back">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.2541470297783!2d76.70341921539709!3d30.71125489371788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee9fe6a743ff%3A0x384c4fd813517643!2sBaseline%20IT%20Development%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1661328908112!5m2!1sen!2sin"
                                    style={{ width: "100%", height: "500px" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                        </div>
                    </div>
                </div>
               
            </div>
            
        </>
    )
}
export default Details