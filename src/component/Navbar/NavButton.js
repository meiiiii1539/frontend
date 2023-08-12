import React from "react";
import arrow_img from "../../images/arrow.png";
import "./NavButton.css"
const NavButton = (props) => {
    return (
            <li>
                <a href={props.link}>{props.tag}</a>
                <img className="arrow" src={arrow_img} alt="img"></img>
            </li>
    )
}

export default NavButton