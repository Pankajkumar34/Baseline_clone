import React from 'react'
import '../Section3/Section3.less';
import OurProcess from './Ourprocess';
const Section3 = () => {
  return (
    <>
      <div className="container">
        <div className="baseline-our-process">
          <div className="baseline-our-process__heading-highlight" >
            <h2 style={{ fontSize: "60px", fontWeight: "700" }} className=" aos-animate">Our <span style={{ color: "#bb372a" }}>Process</span></h2>
          </div>
          <OurProcess
            icons={<i className="fa-solid fa-handshake" style={{ fontSize: "55px", marginTop: "10px" }}></i>}
            heading="IDEA"
            info="It all starts with a creative idea, and we discuss what you require, your goals, and how we can assist you early on."
            // -------------
            icons1={<i className="fa-solid fa-book-atlas" style={{ fontSize: "55px", marginTop: "10px" }}></i>}
            heading1="REASEARCH"
            info1=" We conduct extensive research on your project, competitors, current strategies, and what we can do differently to turn the tide."
          />
          <OurProcess
            icons={<i class="fa-solid fa-pen-to-square" style={{ fontSize: "55px", marginTop: "10px" }}></i>}
            heading="DESIGN"
            info=" Once we've covered the fundamentals, our creative developers and designers will present you with a new road map to follow."

            icons1={<i class="fa-solid fa-code" style={{ fontSize: "55px", marginTop: "10px" }}></i>}
            heading1="DEVELOPMENT"
            info1="After we have finalized the design, we gather various elements that will help make your website a place that people will want to return to."

          />
          <OurProcess
            icons={<i class="fa-brands fa-searchengin" style={{ fontSize: "55px", marginTop: "10px" }}></i>}
            heading="TESTING"
            info="We will perform all functionality tests after revamping or creating your website to ensure that our efforts have precisely matched your needs. At this point, we also welcome any suggestions or changes you may require."

            // ----------

            icons1={<i class="fa-sharp fa-solid fa-paper-plane" style={{ fontSize: "55px", marginTop: "10px" }}></i>}
            heading1="LAUNCH"
            info1="We would be delighted to proceed with the website launch process after completing the testing phase and reviewing every element and method."

          />
          <div className="row">

            <div className="col-md-5 our-process-steps">
              <div className="process-box process-left">
                <div className="row">
                  <div className="col-md-5 steps">
                    <div className="process-step">
                      <i class="fa-solid fa-gears" style={{ fontSize: "55px", marginTop: "10px" }}></i>
                    </div>
                  </div>
                  <div class="col-md-7">
                    <h5>MAINTENANCE</h5>
                    <p><small>During the maintenance phase, we keep clients informed of what we can do to keep their websites up-to-date with all trends.</small></p>
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

export default Section3