import "../../App.scss"
import "./upload.scss"
import Thumbnail from "../../assets/images/Upload-video-preview.jpg"
import PublishLogo from "../../assets/images/publish.svg"
import { Component } from "react"
import { withRouter } from "react-router-dom";


class UploadPage extends Component {
    state = {
        title: "",
        description: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    isTitleValid = () => {
        if (this.state.title.length < 1) {
            return false;
        } else {
            return true;
        }
    };
    isDescriptionValid = () => {
        if (this.state.description.length < 1) {
            return false;
        } else {
            return true;
        }
    };
    isFormValid = () => {
        if (!this.state.title || !this.state.description) {
            return false;
        }
        if (!this.isTitleValid()) {
            return false;
        }
        if (!this.isDescriptionValid()) {
            return false;
        } else {
            return true;
        }
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            alert("Upload Successful!");
            this.redirect();
        } else {
            alert("Upload must have a Title and Description");
        }
    };

    redirect() {
        this.props.history.push("/");
    }

    render() {
        return (
            <>
                <hr className="top-border"></hr>
                <article className='upload'>
                    <h1 className='upload__title'>Upload Video</h1>
                    <hr className="upload__border"></hr>
                    <div className='upload__hero'>
                        <p className='upload__hero--title'>VIDEO THUMBNAIL</p>
                        <img className='upload__hero--img' src={Thumbnail} alt={Thumbnail} />
                    </div>
                    <form className='upload__form' onSubmit={this.handleSubmit}>
                        <div className="upload__form--wrap-desktop">
                            <div className="upload__form--hero-desktop">
                                <p className='upload__hero--title'>VIDEO THUMBNAIL</p>
                                <img className='upload__hero--img' src={Thumbnail} />
                            </div>
                            <div className="upload__form--input-desktop">
                                <label className='upload__form--label' for="title"  >TITLE YOUR VIDEO</label>
                                <input
                                    type="text"
                                    className='upload__form--input'
                                    name="title"
                                    placeholder="Add a title to your video"
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                ></input>
                                <label className='upload__form--label' for="description">ADD A VIDEO DESCRIPTION</label>
                                <textarea
                                    type="text"
                                    className='upload__form--textarea'
                                    name="description"
                                    placeholder="Add a description to your video"
                                    onChange={this.handleChange}
                                    value={this.state.description}
                                />
                            </div>
                        </div>
                        <hr className="upload__border"></hr>
                        <div className='upload__form--button'>
                            <button type="submit" className='upload__form--button--publish' ><img src={PublishLogo} />PUBLISH<div></div></button>
                            <button className='upload__form--button--cancel'><img src={PublishLogo} />CANCEL<div></div></button>
                        </div>
                    </form>

                </article>
            </>
        )
    }
}

export default withRouter(UploadPage);