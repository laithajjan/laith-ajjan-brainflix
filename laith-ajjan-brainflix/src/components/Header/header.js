import React from "react";
import BrainFlixLogo from "../../assets/images/BrainFlix-logo.svg"
import Avatar from "../../assets/images/Mohan-muruge.jpg"
import UploadButton from "../../assets/images/upload.svg"
import Magnifier from "../../assets/images/search.svg"
import "./header.scss"
import "../../App.scss"

const Header = () => {
    return (
        <header className="header">
            <img src={BrainFlixLogo} className="header__logo"/>
            <div className="header__search">
                <div className="header__search--input-container">
                    <img alt="Write something to search" src={Magnifier} className="header__search--magnifier"/>
                    <input type="search" className="header__search--input" placeholder='Search'></input>
                </div>
                <img alt="Mohan Muruge avatar" src={Avatar} className="header__search--avatar"/>
            </div>
            <div className="header__avatar-button-big">    
                <button className="header__button"><img className="header__button--arrow" src={UploadButton}/>UPLOAD<div className="header__button--blank-div"></div></button>
                <img alt="Mohan Muruge avatar" src={Avatar} className="header__search--avatar-big"/>
            </div>
        </header>
    )
}

export default Header