import React from 'react'
import '../Section6/Section6.less';
const Section6 = () => {
    return (
        <>
            <div className="container">
                <div className="get-a-beautiful-website">
                    <div className=" row get-beautiful-website__box">
                        <div class="col-md-6">
                            <h2> <span style={{color: "#bb372a"}} >Get a beautiful</span> website that<br /> converts visitors into customers.</h2>
                        </div>
                        <div className="col-md-6">
                            <p className='get-beautiful-website__box__business-website'>Elaborate your business with trusted websites. We have a creative team of designers and developers who build your website that your customer will love. On all devices, your website looks great with a fast loading speed. Our team always believes in word challenging and teamwork.</p>
                        </div>
                    </div>
                    <div className="col-md-12 baseline-pic">
                        <div className="picc">
                            <img src="	https://baselineitdevelopment.com/assets/images/CoverImage.png" alt="Baseline" />
                        </div>
                        <div className="img-button">
                            <a  className="read-btn" href="https://baselineitdevelopment.com/services" role="button">Read more <span><i class="fa-solid fa-arrow-right-long aos-init" ></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section6