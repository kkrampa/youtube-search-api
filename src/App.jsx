import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';

import './style/style.scss';

const API_KEY = 'AIzaSyBug8KnNqGsA5_mJ7docFN4-fzAe6xRKKA';


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0],
            });
        });
    }

    render() {
        const onSearchTermChange = _.debounce((term) => { this.videoSearch(term); }, 300);

        return (
          <div>
            <SearchBar onSearchTermChange={onSearchTermChange} />
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList
              onVideoSelect={(selectedVideo) => { this.setState({ selectedVideo }); }}
              videos={this.state.videos}
            />
          </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
