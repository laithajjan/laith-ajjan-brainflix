import Video from '../Video/video';
import Description from '../Description/description';
import Comments from '../Comments/comments';
import VideoGallery from '../Video-gallery/video-gallery';
import { Component } from "react";
import axios from 'axios';
import { apiKey, apiUrl } from '../Utilities/utils';

class HomePage extends Component {
    state = {
        videoSuggest: [],
        chosenVideo: {}
    };
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
    componentDidMount() {
      axios
      .get(`${apiUrl}/videos/?api_key=${apiKey}`)
        .then(response => {
          this.setState({
            videoSuggest: response.data
          })

          const videoId = this.props.match.params.videoId || response.data[0].id
          this.getVideoById(videoId);
        })
        .catch(err => console.log(err))
    }

      componentDidUpdate(prevProps, prevState) {
      const videoId = this.props.match.params.id || this.state.videoSuggest[0];

      if(prevState.chosenVideo && prevState.chosenVideo.id !== videoId) {
        this.getVideoById(videoId)
      }
    }
    render () {
    return (
        <>
        <Video chosenVideo={this.state.chosenVideo}/>
      <section className='main'>
        <section className='main__left'>
          <Description chosenVideo={this.state.chosenVideo}/>
          <Comments chosenVideo={this.state.chosenVideo}/>
        </section>
        <section className='main__right'>  
          <VideoGallery VideoDetails={this.state.videoSuggest} getVideoById={this.getVideoById} chosenVideo={this.state.chosenVideo}/>
        </section>
      </section>
      </>
    )
}
}

export default HomePage 