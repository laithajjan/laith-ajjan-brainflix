import React from "react";
import "../../App.scss";
import "./video-gallery.scss"


const VideoGallery = (props) => {
    const videos = props.VideoDetails;
    return (
        <div className="video-next">
            <h5 className="video-next__header">NEXT VIDEOS</h5>
        {videos.map(item => (
                <div key={item.id} className="video-next__list" onClick={() => props.showNextVideo(item.id)}>
                        <img src={item.image} className="video-next__list--thumbnail"/>
                    <aside className="video-next__list--aside">
                        <h3 className="video-next__list--aside-title">{item.title}</h3>
                        <h4 className="video-next__list--aside-author">{item.channel}</h4>
                    </aside>
                </div>    
    ))}
        </div>
    )
}

export default VideoGallery