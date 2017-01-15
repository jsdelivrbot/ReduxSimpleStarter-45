import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
const API_KEY = 'AIzaSyCOHo828UORoloucs6B7Ac6gsW0EBdbmZ0';

// Create a new component. This component should produce some HTML
class App extends Component {

    constructor(props) {
        console.log('[App] -> constructor');

        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('tirana');
    }

    videoSearch(term) {
        console.log('[App] -> videoSearch');

        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        console.log('[App] -> render');

        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generate HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));