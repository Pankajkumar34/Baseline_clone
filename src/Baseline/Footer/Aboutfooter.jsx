import React from 'react'

function Aboutfooter() {
    return (
        <>
            <div className="footer-list">
                <div className="container">
                    <div className="row all-footer-list">
                        <div className="col-md-3 ">
                            <div className="footer-heading">
                                <h3>Company</h3>
                            </div>
                            <div className="footer-list">
                                <ul className='footer-ul'>
                                    <li><a href="#" className='footerlist-link'>About</a></li>
                                    <li><a href="#" className='footerlist-link'>Service</a></li>
                                    <li><a href="#" className='footerlist-link'>Carees</a></li>
                                    <li><a href="#" className='footerlist-link'>Contact Us</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-heading">
                                <h3>Programs</h3>
                            </div>
                            <div className="footer-list">
                                <ul className='footer-ul'>
                                    <li><a href="#" className='footerlist-link'>Web development</a></li>
                                    <li><a href="#" className='footerlist-link'>SEO services</a></li>
                                    <li><a href="#" className='footerlist-link'>Designing</a></li>
                                    <li><a href="#" className='footerlist-link'>Digital Marketing</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-heading">
                                <h3>Chat With us</h3>
                            </div>
                            <div className="footer-list">
                                <ul className='footer-ul'>
                                    <li><a href="#" className='footerlist-link' ><i className="fa-brands fa-whatsapp"></i>&nbsp;7340740007</a></li>
                                    <li><a href="#" className='footerlist-link' ><i className="fa-brands fa-skype"></i> &nbsp;<u>Start Chat </u></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer-heading">
                                <h3>Connect Us</h3>
                            </div>
                            <div className="footer-list">
                                <div className="icons d-flex">
                                    <a href="https://www.instagram.com/baselineitdevelopmemt/" className='footer-incons_link'><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://in.linkedin.com/company/baselineitdevelopment" className='footer-incons_link'><i className="fa-brands fa-linkedin"></i></a>
                                    <a href="https://twitter.com/BaselineITDev/" className='footer-incons_link'><i className="fa-brands fa-twitter"></i></a>
                                    <a href="https://www.facebook.com/BaselineItDevelopment.pvt.ltd" className='footer-incons_link'><i className="fa-brands fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right">
                        <p style={{color:"white"}}>© 2023 Baseline IT Development</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutfooter