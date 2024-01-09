import "./App.css";
import VideoList from "./components/VideoList";
import videosDB from "./data/data";
import { useReducer, useState } from "react";
import AddVideo from "./components/AddVideo";

function App() {
  console.log("App");

  const [editableVideo, setEditableVideo] = useState(null);

  function videoReducer(videos, action){
    switch (action.type) {
      case 'ADD':
        return [...videos,
          {...action.payload, id : videos.length + 1}
          ];

      case 'DELETE' : 
        return videos.filter(video => video.id !== action.payload);

      case 'UPDATE': 
          const index = videos.findIndex(v => v.id === action.payload.id);
          const newVideos = [...videos];
          newVideos.splice(index, 1, action.payload);
          setEditableVideo(null);
          return newVideos;

      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videosDB);

  function editVideo(id){
    setEditableVideo(videos.find(video => video.id === id));
  }

  return (
    
    <div className="App">
      <AddVideo dispatch = {dispatch} editableVideo = {editableVideo}></AddVideo>
      <div style={{ color: "white", fontWeight: "bold" }}>Videos</div>
      <VideoList dispatch = {dispatch} editVideo ={editVideo} videos = {videos}></VideoList>
      {/* <PlayButton message = 'log - pause' onClick={()=>alert("Custom onClick event created")}>Pause</PlayButton> */}
    </div>
  );
}

export default App;
