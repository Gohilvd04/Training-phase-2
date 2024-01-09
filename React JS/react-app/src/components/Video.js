import React from "react";
import "./Video.css";

function Video({ title = "Default", views = "0k", channel = "Channel name", time = "Just now", id = 0, varified = false, children , dispatch, editVideo}) {
  return (
    <>
      <div className="container">
        <button className="close" onClick={()=>dispatch({type:'DELETE', payload:id})}>x</button>
        <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Thumbnail" />
        </div>
        <div className="title">{title}</div>
        <div className="views">
          {views} Views<span>. </span> {time} ago
        </div>
        <div className="channel">
          {channel} {varified && "✅"}
        </div>
        <div className="button-child">
            {children}
        </div>
      </div>
    </>
  );
}

export default Video;
