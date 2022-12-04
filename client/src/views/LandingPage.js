/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import Footer from "components/Footers/Footer.js";
  
export default function LandingPage() {
  return (
    <>
    <div> Ini Landing Page</div>
    <Link to={'/admin'}> 
      <p> klik ini untuk menuju admin</p>
    </Link>
    </>
  );
    
}
