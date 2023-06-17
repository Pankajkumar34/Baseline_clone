import React from 'react'
import './section.less';
import { useLottie } from 'lottie-react';
import animationData from '../../Lottie/baseline.json'
const Section1 = () => {
    const defaultOptions = {
        
        animationData: animationData,
       
    };
    const { View } = useLottie(defaultOptions);
    return (
        <>
            <div className="main-banner-baseline">
                <div className="container">
                    <div className="row sub-main-banner-baseline">
                        <div className="col-md-6 banner-baseline__title" >

                            <h1 style={{ fontSize: "60px", fontWeight: "700" }}><span style={{ color: "#bb372a" }}>WEB</span><br />Designing</h1>
                            <p className='baseline-title-info'>
                                Web Designing Company can help you to attract customers. Commonly it is the design of the website which can draw in people but it also has the power to drive them away. Having a one among a type web composition is a vital piece of the marking and promoting the process of your commercial enterprise.
                            </p>
                            <button className='getstarted-btn' style={{ background: "#bb372a", boxShadow: "2px 5px 9px -2px #e55959c7" }}>Get Started</button>
                            <div className="icons d-flex">
                                <a href="https://www.instagram.com/baselineitdevelopmemt/" className='incons_link'><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://in.linkedin.com/company/baselineitdevelopment" className='incons_link'><i className="fa-brands fa-linkedin"></i></a>
                                <a href="https://twitter.com/BaselineITDev/" className='incons_link'><i className="fa-brands fa-twitter"></i></a>
                                <a href="https://www.facebook.com/BaselineItDevelopment.pvt.ltd" className='incons_link'><i className="fa-brands fa-facebook"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 banner-baseline__GIF">

                            <div>{View}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section1