// Import React and Link libraries, and some style files
import React from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import "./video-gallery.scss"

// Create a function component called 'VideoGallery'
const VideoGallery = (props) => {
    // Declare variables 'videos', 'getVideoById', and 'chosenVideo' to store video data and video details
    const videos = props.VideoDetails;
    const getVideoById = props.getVideoById;
    const chosenVideo = props.chosenVideo;
    
    // Return a div containing a list of videos, excluding the currently selected video
    return (
        <div className="video-next">
            <h5 className="video-next__header">NEXT VIDEOS</h5>
            {videos?.filter(item => item.id !== chosenVideo.id)
                .map(item => {
                    return (
                        < Link to={
                            `/home/${item.id}`
                        } >
                            <div key={item.id} className="video-next__list">
                                <img src={item.image} className="video-next__list--thumbnail" />
                                <aside className="video-next__list--aside">
                                    <h3 className="video-next__list--aside-title">{item.title}</h3>
                                    <h4 className="video-next__list--aside-author">{item.channel}</h4>
                                </aside>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

// Export the 'VideoGallery' function component
export default VideoGallery
