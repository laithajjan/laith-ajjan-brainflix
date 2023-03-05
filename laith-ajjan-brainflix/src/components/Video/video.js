import React from "react";
import './video.scss';

const Video = (props) => {

    const chosenVideo = props.chosenVideo;

    return (
        <div className="video">
            <div >
                <video poster={chosenVideo.image} controls className="video__hero"></video>
            </div>
        </div>
    )
}

export default Video