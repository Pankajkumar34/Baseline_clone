import React from 'react'
import NavBar from '../Navbar/Nav';
import Section1 from '../SectionMain/Section1'
// import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import Section6 from "../Section6/Section6";
import Footer from "../Footer/Footer";
import Srvices from '../Section2/services';
function Home() {
  return (
    <>
      <NavBar />
      <Section1 />
      <Srvices />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />

    </>
  )
}

export default Home