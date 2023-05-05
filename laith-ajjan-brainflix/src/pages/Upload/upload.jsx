import "../../App.scss";
import "./upload.scss";
import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import PublishLogo from "../../assets/images/publish.svg";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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

    isFormValid = () => {
        const { title, description } = this.state;
        return title.trim() !== "" && description.trim() !== "";
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.isFormValid()) {
            axios
                .post("http://localhost:8080/videos", {
                    title: this.state.title,
                    description: this.state.description,
                })
                .then(() => {
                    alert("Upload Successful!");
                    this.props.history.push("/");
                })
                .catch((error) => {
                    console.error("Error during video upload:", error);
                    alert("Upload failed. Please try again.");
                });
        } else {
            alert("Upload must have a Title and Description");
        }
    };

    render() {
        return (
            <>
                <hr className="top-border" />
                <article className="upload">
                    <h1 className="upload__title">Upload Video</h1>
                    <hr className="upload__border" />
                    <div className="upload__hero">
                        <p className="upload__hero--title">VIDEO THUMBNAIL</p>
                        <img className="upload__hero--img" src={Thumbnail} alt="Video Thumbnail" />
                    </div>
                    <form className="upload__form" onSubmit={this.handleSubmit}>
                        <div className="upload__form--wrap-desktop">
                            <div className="upload__form--hero-desktop">
                                <p className="upload__hero--title">VIDEO THUMBNAIL</p>
                                <img className="upload__hero--img" src={Thumbnail} alt="Video Thumbnail" />
                            </div>
                            <div className="upload__form--input-desktop">
                                <label className="upload__form--label" htmlFor="title">
                                    TITLE YOUR VIDEO
                                </label>
                                <input
                                    type="text"
                                    className="upload__form--input"
                                    name="title"
                                    placeholder="Add a title to your video"
                                    onChange={this.handleChange}
                                    value={this.state.title}
                                />
                                <label className="upload__form--label" htmlFor="description">
                                    ADD A VIDEO DESCRIPTION
                                </label>
                                <textarea
                                    type="text"
                                    className="upload__form--textarea"
                                    name="description"
                                    placeholder="Add a description to your video"
                                    onChange={this.handleChange}
                                    value={this.state.description}
                                />
                            </div>
                        </div>
                        <hr className="upload__border" />
                        <div className="upload__form--button">
                            <button type="submit" className="upload__form--button--publish">
                                <img src={PublishLogo} alt="Publish" />
                                PUBLISH
                                <div />
                            </button>
                            <Link className="upload__form--button--link" to="/">
                                <button className="upload__form--button--cancel" type="reset">
                                    <img src={PublishLogo} alt="Cancel" />
                                    CANCEL
                                    <div />
                                </button>
                            </Link>
                        </div>
                    </form>
                </article>
            </>
        );
    }
}
export default withRouter(UploadPage);
