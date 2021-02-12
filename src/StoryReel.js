import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://wallsdesk.com/wp-content/uploads/2017/01/Dublin-Computer-Wallpaper.jpg"
        profileSrc="https://scontent.fdub4-1.fna.fbcdn.net/v/t1.0-9/135461166_858933254946649_8912077254214778819_o.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=Kd0MRQo_8kUAX_tbiuH&_nc_ht=scontent.fdub4-1.fna&oh=f78afee581fd45c9a5be47ecf694d880&oe=6048C720"
        title="Siddhesh"
      />
      <Story
        image="https://9to5mac.com/wp-content/uploads/sites/6/2020/09/Screen-Shot-2020-09-08-at-10.11.21-AM.jpeg?quality=82&strip=all"
        profileSrc="https://cdn.mos.cms.futurecdn.net/sbLX2p8dEnbD8jehwdaSuj.png"
        title="Apple Watch SE/6"
      />
      <Story
        image="https://preview.redd.it/eysnq08urk261.png?auto=webp&s=9ba21ba129eacc406494c9f32e3c9933d13abcf8"
        profileSrc="https://i.pinimg.com/originals/69/8e/90/698e90f46604fd2c9c9ff3b52a886ddb.png"
        title="MKBHD"
      />
      <Story
        image="https://specials-images.forbesimg.com/imageserve/5f7caca62d233f382cb4d5ca/960x0.jpg?fit=scale"
        profileSrc="https://www.pricedekho.com/news/wp-content/uploads/2020/10/iPhone-12-pro-1280-min.jpg"
        title="Apple iPhone 12 series"
      />
      <Story
        image="https://pbs.twimg.com/media/El24LSqXgAAWo7L.jpg"
        profileSrc="https://cdn.mos.cms.futurecdn.net/shxGKvH5PTd7QKf8MUFp7j.png"
        title="Apple M1 chip"
      />
    </div>
  );
}

export default StoryReel;
