import React from "react";
import "./description.scss";
import viewsLogo from '../../assets/images/views.svg'
import likesLogo from '../../assets/images/likes.svg'

const Description = (props) => {

      const { title, channel, timestamp, views, likes, description } =
      props.chosenVideo;
      let date = new Date(timestamp).toLocaleDateString();
    
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
                                <p className="description__info--views"><img alt="Views logo" src={viewsLogo} className="description__info--logo"/>{views}</p>
                                <p className="description__info--likes"><img alt="Likes logo" src={likesLogo} className="description__info--logo"/>{likes}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <p className="description__story">{description}</p>
                        
                        <div>


                        </div>
        </div>
    )
}

export default Description