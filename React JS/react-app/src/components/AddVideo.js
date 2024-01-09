import React, { useEffect, useState } from "react";
import "./AddVideo.css";

function AddVideo({dispatch, editableVideo}) {

  const initialState = {
    title: "",
    views: "",
    time: "1 month",
    channel: "Vd bhai",
    varified: false,
  };
  const [video, setVideo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(editableVideo){
      dispatch({type:'UPDATE', payload:video});
    }else{
      dispatch({type:'ADD', payload:video});
    }
    setVideo(initialState);
  };

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo);
    }
  },[editableVideo]);

  return (
    <form>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={video.title}
      />
      <input
        type="text"
        placeholder="views"
        name="views"
        onChange={handleChange}
        value={video.views}
      />
      <button
        onClick={handleSubmit}
      >
        {editableVideo ? 'Edit' : 'Add'} Video
      </button>
    </form>
  );
}

export default AddVideo;
