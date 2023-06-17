import React from 'react'
import '../Footer/Footer.less';
const Footer = () => {
    const [read, setRead] = React.useState(false)
    const [read1, setRead1] = React.useState(false)
    return (
        <>
            <div className='footer-main'>
                <div className="container">
                    <div className="sub-footer-main">
                        <div className="clint-speak">
                            <h2 className="aos-init aos-animate"> <span style={{ color: "#bb372a" }}>Our</span> Clients Speak to US</h2>
                        </div>
                        <div className="row footer-clint-read-more">
                            <div className="col-md-6 baseline-development">
                                <div className="contant-box">
                                    <div className="read-more expanded" >
                                        <div className="content">
                                            <p>The team of Baseline IT development is efficiently and quickly completed my Shopify website,
                                                <span style={{ display: !read ? "none" : "block" }}>Perfect day to launch the website and the team suggested all the things according to my store requirement. All the candidates are very helpful, and they instant replies to every query and things are under budget.&nbsp; I think the entire team for their good efforts. Thanks!</span>
                                            </p>
                                        </div>
                                        <span className="trigger" style={{ cursor: "pointer" }} onClick={() => setRead(!read)}>{!read ? <p style={{ color: "blue" }}>+ read more</p> : <p style={{ color: "blue" }}>+ thank you for read</p>}</span>
                                    </div>
                                </div>
                                <div className="arrow">
                                    <i className="fa-solid fa-sort-down"></i>
                                </div>
                                <div className="row justify-content-center align-items-center mt-3 ml-5">
                                    <div className="col-md-2">
                                        <div className="box-img">
                                            <img src="https://baselineitdevelopment.com/assets/images/user.png" alt="Baseline" style={{ width: "100%", maxWidth: "80px", borderRadius: "50%", float: "right" }} />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <h2 style={{ fontSize: "18px", color: "red" }}>Nick</h2>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 baseline-development ">
                                <div className="contant-box" id="readmore">
                                    <div className="read-more expanded">
                                        <div className="content">
                                            <p style={{ margin: "0" }}>The staff is really appreciated for what has the creativity in their service coming back to me.
                                                <span style={{ display: !read1 ? "none" : "block" }}>I visited into the company (Baseline IT Development), there is a great environment, and everyone is busy with their work in a peaceful manner. I saw the actual work environment, that I saw before.
                                                    The sales team is very talented in communication and coordination with all the staff as well as clients. I talked with seniors and Team leads, everyone has experts in their work. I got the best service.
                                                    I am very happy, about I have a good partner to take care of my online business. I really appreciate for amazing staff in Baseline IT Development!! Amazing service!!! </span></p>
                                        </div>
                                        <span className="trigger" onClick={() => setRead1(!read1)}
                                            style={{ cursor: "pointer" }}>{!read1 ? <p style={{ color: "blue" }}>+ read more</p> : <p style={{ color: "blue" }}>+ thank you for read</p>}</span>
                                    </div>

                                </div>
                                <div className="arrow1">
                                    <i className="fa-solid icon fa-sort-down"></i>
                                </div>
                                <div className="row justify-content-center align-items-center mt-3 ml-5">
                                    <div className="col-md-2">
                                        <div className="box-img">
                                            <img src="https://baselineitdevelopment.com/assets/images/user.png" alt="Baseline" style={{ width: "100%", maxWidth: "80px", borderRadius: "50%", float: "right" }} />
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <h2 style={{ fontSize: "18px", color: "red" }}>Nick</h2>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
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
               </div>
            </div>
        </>
    )
}

export default Footer
