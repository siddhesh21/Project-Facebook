import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post profilePic="" message="" timestamp="" username="" image="" />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
