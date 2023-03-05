// Importing necessary components and modules
import Video from '../Video/video';
import Description from '../Description/description';
import Comments from '../Comments/comments';
import VideoGallery from '../Video-gallery/video-gallery';
import { Component } from "react";
import axios from 'axios';
import { apiKey, apiUrl } from '../Utilities/utils';

// Defining HomePage component as a class component
class HomePage extends Component {

  // Initializing the state with empty videoSuggest array and chosenVideo object
  state = {
    videoSuggest: [],
    chosenVideo: {}
  };

  // Function to get a video by id using the API
  getVideoById = (id) => {
    axios
      .get(`${apiUrl}/videos/${id}?api_key=${apiKey}`)
      .then(response => {
        this.setState({
          chosenVideo: response.data
        })
      })
      .catch(err => console.log(err))
  }

  // Function to get the video suggestions on component mount
  componentDidMount() {
    axios
      .get(`${apiUrl}/videos/?api_key=${apiKey}`)
      .then(response => {
        // Updating the state with video suggestions
        this.setState({
          videoSuggest: response.data
        })

        // Getting the video id from the URL parameter or setting it to the first video id from the response
        const videoId = this.props.match.params.videoId || response.data[0].id
        // Fetching the chosen video by its id
        this.getVideoById(videoId);
      })
      .catch(err => console.log(err))
  }

  // Function to fetch the chosen video when a new video is selected
  componentDidUpdate(prevProps, prevState) {
    const videoId = this.props.match.params.id || this.state.videoSuggest[0];

    if (prevState.chosenVideo && prevState.chosenVideo.id !== videoId) {
      this.getVideoById(videoId)
    }
  }

  // Rendering the component with Video, Description, Comments and VideoGallery components
  render() {
    return (
      <>
        <Video chosenVideo={this.state.chosenVideo} />
        <section className='main'>
          <section className='main__left'>
            <Description chosenVideo={this.state.chosenVideo} />
            <Comments chosenVideo={this.state.chosenVideo} />
          </section>
          <section className='main__right'>
            <VideoGallery VideoDetails={this.state.videoSuggest} getVideoById={this.getVideoById} chosenVideo={this.state.chosenVideo} />
          </section>
        </section>
      </>
    )
  }
}

// Exporting HomePage component
export default HomePage
