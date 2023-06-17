import React from "react";
import NavBar from "../../Navbar/Nav";
import '../Contact-page/Contact.less';
// import CntactForm from "./ContactForm";
import CntactForm from "./contactForm";
import Details from "./Details";
import Aboutfooter from "../../Footer/Aboutfooter";
const ContactPage = () => {
    return (
        <>
            <div className="main-contac-tpage">
                 <NavBar/>
                <div className="container">
                    <div className="row contact-box-page">
                        <div class="col-md-8 contact_first_box">
                            <div class="cantant-box">
                                <h2 className="workbatter-heading">Work better <span style={{color: "#bb372a"}}>together</span></h2>
                                <p className="info-contact-page-workbatter">To help our company win, we work together across boundaries to meet the needs of our customers. We value
                                    our people, encourage their development, and reward their success. Communication is part of working
                                    together so, you have good communication with your team for better work. Our better working process is all
                                    about our teamwork together. To establish a process and work better together, people may propose many
                                    different paths, strategies, and agendas, so a preliminary discussion is necessary.</p>
                            </div>
                        </div>
                    </div>
                    <CntactForm/>
                    <Details/>
                   
                </div>
                <Aboutfooter/>
               
            </div>
        </>
    )
}

export default ContactPage