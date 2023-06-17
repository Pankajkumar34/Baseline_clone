import React from 'react'
import '../popup/emailpopup.less';
import { useLottie } from 'lottie-react';
// import successicon from '../image/output-onlinegiftools.gif';
import animationData from '../Lottie/79952-successful.json'
function emailPopup(props) {
    const defaultOptions = {
        
        animationData: animationData,
       
    };
const {View}= useLottie(defaultOptions)
    return (
        <>
            <div className="email" onClick={()=>props.setThankupopup(false)} style={{display:!props.thankupopup?"none":"block"}} >
                <div className="container">
                    <div className="popup-set">
                        <div className="mainpopup">
                            <div className="icon">
                                
                                {/* <img style={{ width: "200px"  }} src= alt="" /> */}
                                {View}
                            </div>
                            <div className="text">
                                <h1>Thank You !</h1>
                                <p>Email Sent SuccessFully</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default emailPopup