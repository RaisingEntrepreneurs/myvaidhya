import React from "react";
///import vaidhya_header_img from "..images/vaidhya_header_img.jpg"
import vaidhyalogo from "../images/vaidhya_header_img.jpg"

import "./Homepage.css"

function Header(){
    return(
        <nav className="nav">
              <img src={vaidhyalogo} width="100 px" />
                <ul className="navheader">
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>Services</li>
                    
                </ul>
            </nav>
    )
}
export default Header