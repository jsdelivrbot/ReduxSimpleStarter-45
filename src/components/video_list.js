import React, { Componet } from 'react';
import VideoListItem from './video_list_item';

/*class VideoList extends Component {

    constructor(props) {
        super(props);

        const videoItems = props.videos.map((video) => {
            return <VideoListItem key={video.etag} video={video} />;
        });
    }

    render() {
        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
    }

}*/

const VideoList = (props) => {

    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;