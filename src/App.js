import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetails';

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
    this.onTermSubmit('https://www.youtube.com/watch?v=HFX6AZ5bDDo');
  }
  onTermSubmit = async term => {
  const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

onVideoSelect = (video) =>{
  this.setState({selectedVideo: video});
};

  render(){
    return(
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui grid">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
