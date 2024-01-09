import React from 'react';
import Video from './Video';
import PlayButton from './PlayButton';

function VideoList({videos, dispatch, editVideo}) {
    return (
        <>
            {videos.map( video => (
                <Video
                    let
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    varified={video.varified}
                    dispatch={dispatch}
                    editVideo = {editVideo}
                >
                    <PlayButton
                        onPlay={() => console.log("Play")}
                        onPause={() => console.log("Pause")}
                    >
                        {video.title}
                    </PlayButton>
                </Video>
            ))}
        </>
    )
}

export default VideoList