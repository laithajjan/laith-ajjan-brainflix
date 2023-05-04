import React, { Component } from 'react';
import axios from 'axios';
import Video from '../Video/video';
import Description from '../Description/description';
import Comments from '../Comments/comments';
import VideoGallery from '../Video-gallery/video-gallery';

const API_BASE_URL = 'http://localhost:8080';

class HomePage extends Component {
  state = {
    videoSuggest: [],
    chosenVideo: {},
  };

  getVideoById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/videos/${id}`);
      this.setState({ chosenVideo: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  async componentDidMount() {
    document.title = 'BrainFlix';
    try {
      const response = await axios.get(`${API_BASE_URL}/videos`);
      this.setState({ videoSuggest: response.data });
      const videoId = this.props.match.params.videoId || response.data[0].id;
      this.getVideoById(videoId);
    } catch (error) {
      console.error(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const videoId = this.props.match.params.videoId || this.state.videoSuggest[0].id;

    if (prevState.chosenVideo?.id !== videoId) {
      this.getVideoById(videoId);
    }
  }

  render() {
    const { chosenVideo, videoSuggest } = this.state;

    return (
      <>
        <Video chosenVideo={chosenVideo} />
        <section className="main">
          <section className="main__left">
            <Description chosenVideo={chosenVideo} />
            <Comments chosenVideo={chosenVideo} />
          </section>
          <section className="main__right">
            <VideoGallery
              VideoDetails={videoSuggest}
              getVideoById={this.getVideoById}
              chosenVideo={chosenVideo}
            />
          </section>
        </section>
      </>
    );
  }
}

export default HomePage;
