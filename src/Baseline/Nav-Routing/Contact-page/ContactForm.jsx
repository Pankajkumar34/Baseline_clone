import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
// import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import emailjs from 'emailjs-com'
import '../Contact-page/CForm.less';
import EmailPopup from "../../../popup/Emailpopup";

const CntactForm = () => {
    const [SelectCountry, setSelectCountry] = useState()

    const [thankupopup, setThankupopup] = useState()
    const [data, setData] = useState({
        name: "",
        email: "",
        service: "",
        message: ""
    })
    // const [loading, setLoading] = useState(false)



    const handlechane = (e) => {
        let { name, value } = e.target

        setData({ ...data, [name]: value })

    }

    const submitData = (e) => {
        e.preventDefault()
        if (!(data.name && data.email && data.service && data.message && SelectCountry)) {
            emailjs.send('service_5nor23t', 'template_7o2rbto', {
                from_name: data.name,
                from_service: data.service,
                form_phone:SelectCountry,
                to_name: "pankaj",
                from_email: data.email,
                to_email: "pankajman803@gmail.com",
                message: data.message
            },
                'W1RuZalxvb3VZYAZt').then(res => {
                    console.log(res)
                    setThankupopup(true)
                }).catch(err => {


                    alert("not found")
                })
            setData({
                name: "",
                email: "",
                service: "",
                message: ""
            })
        } else {
            alert()
        }




    }

    console.log("selct", data)

    console.log("selc000t", SelectCountry)


    return (
        <div className="row sub-contact-page">
            <div className="col-md-6 contact-page-main">
                <form className="form-set">
                    <div className="contactheading">
                        <h4>Contact Us</h4>
                    </div>
                    <div className="">
                        <input type="text" className="form-control" placeholder="Name" name="name"
                            onChange={handlechane}
                            value={data.name} />


                    </div>

                    <div className="">

                        <input type="email" className="form-control"
                            name="email"
                            onChange={handlechane}
                            value={data.email}
                            aria-describedby="emailHelp" placeholder="Email" />

                    </div>
                    <div className="">

                        <div className="numberinput">
                            <PhoneInput className="phonr-input"
                                placeholder="Phone"
                                value={SelectCountry}


                                onChange={SelectCountry => setSelectCountry(SelectCountry)}
                            />
                        </div>

                        <div className="">
                            <select name="service"
                                onChange={handlechane}
                                value={data.service} placeholder="select" className="form-control selectinput" >
                                <option name="service" tyle={{ width: "100%" }} value="">----please choose a service------ </option>
                                <option style={{ width: "100%" }} value="Webdevelopment">Web development</option>
                                <option style={{ width: "100%" }} value="Webdesign">Web design</option>
                                <option style={{ width: "100%" }} value="Digitalmarketing">Digital marketing</option>
                                <option style={{ width: "100%" }} value="SEO">SEO</option>

                            </select>

                        </div>

                    </div>
                    {/* <div className="">
                        <label htmlFor="meetingtime">Schedule A Meeting Time</label><br />
                        <input className="form-control" onChange={handlechane} name="date" style={{ width: "100%" }} type="date"  placeholder="Schedule A Meeting Time" required="" ></input>
                    </div> */}
                    <div className="message py-3">
                        <textarea id="" cols="30"
                            name="message" onChange={handlechane} value={data.message}
                            rows="10" style={{ width: "100%", height: "150px" }} className="form-control" placeholder="message"></textarea>
                    </div>


                    <div className="col-12">
                        <button onClick={submitData} className="btn btn-primary submit_btn" id="submit" type="button" name="submit">Send</button>
                    </div>
                </form>
            </div>
            <div className=" col-md-6 contact-svg">
                <div className="svg-box">
                    <img src="https://baselineitdevelopment.com/assets/images/Image%20(1).png" alt="" style={{ width: "100%" }} />
                </div>
            </div>
            <EmailPopup setThankupopup={setThankupopup} thankupopup={thankupopup} />
        </div>

    )
}
export default CntactForm