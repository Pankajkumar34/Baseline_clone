

// import './App.css'
// import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./Baseline/Nav-Routing/About/About";
import { Route, Routes } from "react-router-dom";
import Home from "./Baseline/Home/Home";
import SeverciesRoute from "./Baseline/Nav-Routing/Service/SeverciesRoute";
import ContactPage from "./Baseline/Nav-Routing/Contact-page/ContactPage";
import Career from "./Baseline/Nav-Routing/Career/Career";
import Blog from "./Baseline/Nav-Routing/Blog/Blog";
import Webdevelopment from "./Baseline/Nav-Routing/ServiceHoverListRoute/Webdevelopment/Webdevelopment";
import WebdesignPage from "./Baseline/Nav-Routing/ServiceHoverListRoute/Webdesign/Webdesign";
import DigitalMarketing from "./Baseline/Nav-Routing/ServiceHoverListRoute/DigitalMarketing/DigitalMarketing";
import SEOPage from "./Baseline/Nav-Routing/ServiceHoverListRoute/SEOPage/SEOPage";

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={ <Home/>}></Route>
      <Route path="/about" element={ <About/>}></Route>
      <Route path="/services" element={ <SeverciesRoute/>}></Route>
      <Route path="/contactpage" element={ <ContactPage/>}></Route>
      <Route path="/Career" element={ <Career/>}></Route>
      <Route path="/blog" element={ <Blog/>}></Route>
      <Route path="/Webdevelopment" element={ <Webdevelopment/>}></Route>
      <Route path="/WebdesignPage" element={ <WebdesignPage/>}></Route>
      <Route path="/DigitalMarketing" element={ <DigitalMarketing/>}></Route>
      <Route path="/SEOPage" element={ <SEOPage/>}></Route>
    </Routes>
 
    </>
  )
}

export default App
