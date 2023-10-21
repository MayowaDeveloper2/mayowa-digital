//import { useHistory } from "react-router";
import { useState } from 'react';
import "../index.css"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import mayowadigitallogo from "../images/Mayowa Digitall.png";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLiClick = () => {
    setShowNavbar(false);
  };
  

return ( <>
  <nav className="nav">
    <div className="my-col-10 off-1">
      <div className="my-col-2 xs-down-1">
        <div className="my-col-10 xs-5 off-1">
          <span className="xs-off-1 px13 bold"><img className="mayowadigitallogo" src={mayowadigitallogo} alt=""/></span>
        </div>
      </div>
      <div className="my-col-7 down-1 mg-11 xs-2 bold px13">
        <div className="menu-icon-x" onClick={handleShowNavbar}>
          {showNavbar ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />} {/* Toggle between FaBars and FaTimes based on showNavbar */}
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>

          <Link to='/' onClick={handleLiClick}>
           <li className="linkk">Home</li>
          </Link>
          <Link to='/about-us' onClick={handleLiClick}>
           <li className="linkk">About Us </li>
          </Link>
          <Link to='/contact-us' onClick={handleLiClick}>
           <li className="linkk">Contact Us </li>
          </Link>
          <li className="linkk">Services
            <div className="extension">
            <i className="fas fa-angle-down mg-3"></i> 
            <div className="nav-extentions">
              <div className="my-col-10 off-1 down-5">
               <Link to='/our-publications' onClick={handleLiClick}>
                 <div className="ex-links">Digital Marketing</div>
               </Link>
                <div className="ex-links">Web & App Development</div>
                <div className="ex-links">Branding & Packaging</div>
                <div className="ex-links">Search Engine Optimization</div>
                <div className="ex-links">Video Ads</div>
                <div className="ex-links">Social Media Management</div>
                <div className="ex-links">UI/UX Designing</div>
                <div className="ex-links">Photo and Video Coverage</div>

            </div>
            </div>
            </div>  
          </li>
        </div>
      </div>
          
    </div>
  </nav> 
 </> 
 );
}
 
export default Navbar;