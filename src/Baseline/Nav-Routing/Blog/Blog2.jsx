import React from "react";

const Blog2 = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-10">
                    <div className="blog-content">
                        <div className="row your-business-blog">
                            <div className="col-md-7 seo-content">
                                <div class="hedingseo">
                                    <h1 style={{ fontSize: "30px" }} ><a style={{ textDecoration: "none", color: "#343a40" }} href="seo-vs-ppc">{props.heading}</a></h1>
                                    <div class="inrp">
                                        <p>{props.dscp}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 seo-content">
                                <div className="svg-blog-seo">
                                    <div className="svg-set">
                                        {props.image}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------- */}
            <div className="row">
                <div className="col-md-10">
                    <div className="blog-content">
                        <div className="row your-business-blog your-business-blog2">
                            <div className="col-md-5 seo-content">
                                <div className="svg-set">
                                {props.image1}
                                    {/* <img style={{ width: "100%",padding:"10px",height:"300px" }} src={image} alt="" /> */}
                                </div>
                            </div>
                            <div className="col-md-7 seo-content ">
                                <div className="svg-blog-seo">

                                    <div class="hedingseo">
                                        <h1 style={{ fontSize: "30px" }} ><a style={{ textDecoration: "none", color: "#343a40" }} href="seo-vs-ppc">{props.heading1}</a></h1>
                                        <div class="inrp">
                                            <p>{props.dscp1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog2