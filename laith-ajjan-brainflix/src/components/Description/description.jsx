// Import React and the styles for this component
import React from "react";
import "./description.scss";

// Import the images for the views and likes logos
import viewsLogo from '../../assets/images/views.svg'
import likesLogo from '../../assets/images/likes.svg'

// Define the Description component
const Description = (props) => {

    // Destructure the props and get the needed values
    const { title, channel, timestamp, views, likes, description } =
        props.chosenVideo;

    // Convert the timestamp to a date string
    let date = new Date(timestamp).toLocaleDateString();

    // Return the component with the video description information
    return (
        <div className="description">
            <h1 className="description__title">{title}</h1>
            <hr className="description__break-small"></hr>
            <div className="description__info">
                <div className="description__info--left">
                    <h3 className="description__info--channel">By {channel}</h3>
                    <p className="description__info--date">{date}</p>
                </div>
                <div className="description__info--right">
                    <p className="description__info--views"><img alt="Views logo" src={viewsLogo} className="description__info--logo" />{views}</p>
                    <p className="description__info--likes"><img alt="Likes logo" src={likesLogo} className="description__info--logo" />{likes}</p>
                </div>
            </div>
            <hr></hr>
            <p className="description__story">{description}</p>
            <div>
            </div>
        </div>
    )
}

// Export the Description component for use in other parts of the application
export default Description;
