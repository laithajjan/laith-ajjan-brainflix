// Import necessary libraries and components
import React, { Component } from "react";
import axios from "axios";
import Video from "../Video/video";
import Description from "../Description/description";
import Comments from "../Comments/comments";
import VideoGallery from "../Video-gallery/video-gallery";

// HomePage component
class HomePage extends Component {
  state = {
    videoSuggest: [],
    chosenVideo: {},
  };

  // Fetch video details by ID
  getVideoById = (id) => {
    axios
      .get(`http://localhost:8080/videos/${id}`)
      .then((response) => {
        this.setState({
          chosenVideo: response.data,
        });
      })
      .catch((err) => console.log(err));
  };

  // Fetch initial data when the component mounts
  componentDidMount() {
    document.title = "BrainFlix";
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        this.setState({
          videoSuggest: response.data,
        });
        const videoId = this.props.match.params.videoId || response.data[0].id;
        this.getVideoById(videoId);
      })
      .catch((err) => console.log(err));
  }

  // Update chosen video when the video ID changes
  componentDidUpdate(prevProps, prevState) {
    const videoId =
      this.props.match.params.videoId || this.state.videoSuggest[0].id;

    if (prevState.chosenVideo && prevState.chosenVideo.id !== videoId) {
      this.getVideoById(videoId);
    }
  }

  // Render the HomePage component
  render() {
    return (
      <>
        <Video chosenVideo={this.state.chosenVideo} />
        <section className="main">
          <section className="main__left">
            <Description chosenVideo={this.state.chosenVideo} />
            <Comments chosenVideo={this.state.chosenVideo} />
          </section>
          <section className="main__right">
            <VideoGallery
              VideoDetails={this.state.videoSuggest}
              getVideoById={this.getVideoById}
              chosenVideo={this.state.chosenVideo}
            />
          </section>
        </section>
      </>
    );
  }
}

export default HomePage;
