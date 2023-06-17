import React from 'react';
// import '../Section2/section2.less';
import '../../Section2/section2.less';

const ServiceRoutes = (props) => {

    return (
    <>
      <div className="servicesType">
                <div className="row services-groups">
                    <div className="col-md-4  services">
                        <div className="service-group ">
                            <div className="service-png ">
                              {props. icons}
                            </div>
                            <div className="severice-info ">
                                <h3>{props.heading}</h3>
                                <p style={{ fontSize: "16px", padding: "0 17px" }}>{props.info}</p>
                            </div>



                        </div>
                        <div className="service-group hover-content" style={{ margin: "-30px 0" }}>
                            <div className="service-png" >
                                {props. icons1}
                            </div>
                            <div className="severice-info px-3">
                                <h3 style={{ color: "white", textAlign: "start", fontSize: "23px", fontWeight: "600" }}><span>{props.heading1}</span><br></br>{props.heading2}</h3>
                                <ul style={{ textAlign: "start" }}>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.list1}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.list2}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.list3}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.list4}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.list5}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.list6}</li>

                                </ul>
                            </div>
                        </div>


                    </div>


                    <div className="col-md-4 services mid-down-severcie " >


                        <div className="service-group  ">
                            <div className="service-png " >
                               {props.iconsmiddle}
                            </div>
                            <div className="severice-info">
                                <h3>{props.headingmiddle}</h3>
                                <p style={{ fontSize: "16px", padding: "0 17px" }}>{props.infomiddle}</p>
                            </div>
                        </div>

                        <div className="service-group  hover-content " style={{ background: "#bb372a", margin: "-24px 0" }} >
                            <div className="service-png " >
                            {props.iconsmiddle1}
                            </div>
                            <div className="severice-info px-3">
                                <h3 style={{ color: "white", textAlign: "start", fontSize: "23px", fontWeight: "600" }}>{props.headingmiddle1}</h3>
                                <ul style={{ textAlign: "start", lineHeight: " 22px" }}>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listmiddle1}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listmiddle2} </li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listmiddle3}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listmiddle4} </li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listmiddle5} </li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listmiddle6} </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 services ">

                        <div className="service-group ">
                            <div className="service-png " >
                               {props.iconsright}
                            </div>
                            <div className="severice-info">
                                <h3>{props.headingright}</h3>
                                <p style={{ fontSize: "16px", padding: "0 17px" }}>{props.inforight}</p>
                            </div>
                        </div>
                        <div className="service-group hover-content" style={{ background: "#bb372a", margin: "-30px 0" }}>
                            <div className="service-png " >
                              {props.iconsright1}
                            </div>
                            <div className="severice-info px-3">
                                <h3 style={{ color: "white", textAlign: "start", fontSize: "23px", fontWeight: "600" }}>{props.headingright1}</h3>
                                <ul style={{ textAlign: "start" }}>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listright1}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}> {props.listright2}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}> {props.listright3}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listright4}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}> {props.listright5}</li>
                                    <li style={{ listStyleType: "disclosure-closed", color: "white" }}>{props.listright6}</li>
                                </ul>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
    </>

    )
}

export default ServiceRoutes
