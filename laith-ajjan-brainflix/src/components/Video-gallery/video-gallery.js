import React from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import "./video-gallery.scss"

const VideoGallery = (props) => {
  const videos = props.VideoDetails;
  const getVideoById = props.getVideoById;
  const chosenVideo = props.chosenVideo;
  
  const handleClick = (id) => {
    getVideoById(id);
  }

  return (
    <div className="video-next">
      <h5 className="video-next__header">NEXT VIDEOS</h5>
      {videos?.filter(item => item.id !== chosenVideo.id)
        .map(item => {
          return (
            <Link key={item.id} to={`/home/${item.id}`}>
              <div className="video-next__list" onClick={() => handleClick(item.id)}>
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

export default VideoGallery
