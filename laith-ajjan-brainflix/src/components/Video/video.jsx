// Import React and some style files
import React from "react";
import './video.scss';

// Create a function component called 'Video'
const Video = (props) => {
    // Declare a variable 'chosenVideo' to store the currently selected video
    const chosenVideo = props.chosenVideo;
    
    // Render a div containing the video element with controls and a poster image
    return (
        <div className="video">
            <div >
                <video poster={chosenVideo.image} controls className="video__hero"></video>
            </div>
        </div>
    )
}

// Export the 'Video' function component
export default Video
