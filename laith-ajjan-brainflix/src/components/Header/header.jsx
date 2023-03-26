import React from "react";
import BrainFlixLogo from "../../assets/images/BrainFlix-logo.svg"
import Avatar from "../../assets/images/Mohan-muruge.jpg"
import UploadButton from "../../assets/images/upload.svg"
import Magnifier from "../../assets/images/search.svg"
import "./header.scss"
import "../../App.scss"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Define a functional component named Header which receives match as a parameter
const Header = ({ match }) => {
    return (
        // Return the header element with class name 'header'
        <header className="header">
            {/* Create a Link component to the homepage with class name 'header__logo--link' */}
            <Link to='/' className="header__logo--link"><img src={BrainFlixLogo} className="header__logo" /></Link>
            <div className="header__search">
                <div className="header__search--input-container">
                    {/* Add a magnifier icon with class name 'header__search--magnifier' */}
                    <img alt="Write something to search" src={Magnifier} className="header__search--magnifier" />
                    {/* Add an input element with type search and placeholder text 'Search' and class name 'header__search--input' */}
                    <input type="search" className="header__search--input" placeholder='Search'></input>
                </div>
                {/* Add an avatar image with class name 'header__search--avatar' */}
                <img alt="Mohan Muruge avatar" src={Avatar} className="header__search--avatar" />
            </div>
            <div className="header__avatar-button-big">
                {/* Create a Link component to the upload page with class name 'header__button--link' */}
                <Link to='/upload' className="header__button--link">
                    {/* Add a button element with class name 'header__button' */}
                    <button className="header__button">
                        {/* Add an upload icon with class name 'header__button--arrow' */}
                        <img className="header__button--arrow" src={UploadButton} />
                        {/* Add text 'UPLOAD' and a blank div with class name 'header__button--blank-div' */}
                        UPLOAD<div className="header__button--blank-div"></div>
                    </button>
                </Link>
                {/* Add an avatar image with class name 'header__search--avatar-big' */}
                <img alt="Mohan Muruge avatar" src={Avatar} className="header__search--avatar-big" />
            </div>
        </header>
    )
}

// Export the Header component
export default Header
