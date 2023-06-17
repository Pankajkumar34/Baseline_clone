import React from 'react'
// import '../Career/Career.css'
import NavBar from '../../Navbar/Nav'
import '../Career/Career.less';
function Career() {
  return (
    <>
     <NavBar/>
      <div className='section-Join'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-9 join-us'>
              <h2 style={{ fontWeight: "700",  fontSize: "50px"}}>
                Join
                <span style={{color: "#bb372a"}}>Us</span>
              </h2>
              <p>
                Baseline IT Development has a team of professionals with one mission of empowering lives through intense solutions of technology. We invite clients, partners, and employees to join us for business development as well as career development.
              </p>
              <a className="btn btn-primary ms-4" href=" " role="button" data-target="#loginmodal" data-toggle="modal">View Openings</a>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Career