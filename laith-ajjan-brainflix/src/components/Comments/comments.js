// Import React library and some images
import React from "react";
import './comments.scss';
import Mohan from '../../assets/images/Mohan-muruge.jpg'
import CommentLogo from '../../assets/images/add_comment.svg'

// Create a function component called 'Comments'
const Comments = (props) => {
    // Declare a variable 'chosenVideo' to store the video chosen by the user
    const chosenVideo = props.chosenVideo;

    // Create a function to format the date of the comment
    const dateComment = (date) => {
        return new Date(date).toLocaleDateString();
    }

    // Return a div containing a form to submit a new comment, and a map of all the comments on the chosen video
    return (
        <div className="comments">
            <div className="comments__form">
                <img alt="Mohan Muruge avatar" src={Mohan} className="comments__form--logo"></img>
                <form className="comments__form--wrap">
                    <div className="comments__form--input-wrap-big">
                        <label className="comments__form--label" for="input">JOIN THE CONVERSATION</label>
                        <textarea placeholder="Add a new comment" className="comments__form--input" name="input"></textarea>
                    </div>
                    <button className="comments__form--button"><img alt="Add Comment Button" src={CommentLogo} className="comments__form--addcomment" />COMMENT<span className="comments__form--empty"></span></button>
                </form>
            </div>
            {chosenVideo.comments?.map(comments => (
                <div className="comments__wrap" key={comments.id}>
                    <div className="comments__wrap--circle"></div>
                    <div className="comments__wrap--right">
                        <div className="comments__wrap--top">
                            <p className="comments__wrap--name">{comments.name}</p>
                            <p className="comments__wrap--date">{dateComment(comments.timestamp)}</p>
                        </div>
                        <p className="comments__wrap--comment">{comments.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

// Export the 'Comments' function component
export default Comments
