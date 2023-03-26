// Import necessary libraries and styles
import React from "react";
import { Link } from "react-router-dom";
import "../../App.scss";
import "./video-gallery.scss"

// VideoGallery component to display the list of next videos
const VideoGallery = (props) => {
  // Destructure props for better readability
  const videos = props.VideoDetails;
  const getVideoById = props.getVideoById;
  const chosenVideo = props.chosenVideo;
  
  // Handle click event to fetch the video details by ID
  const handleClick = (id) => {
    getVideoById(id);
  }

  // Render the video gallery
  return (
    <div className="video-next">
      {/* Display the header for the next videos section */}
      <h5 className="video-next__header">NEXT VIDEOS</h5>
      {/* Iterate through the video list, excluding the current video */}
      {videos?.filter(item => item.id !== chosenVideo.id)
        .map(item => {
          return (
            // Use the Link component to navigate to the video page
            <Link key={item.id} to={`/home/${item.id}`}>
              {/* Display the video thumbnail and details */}
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

// Export the VideoGallery component
export default VideoGallery
