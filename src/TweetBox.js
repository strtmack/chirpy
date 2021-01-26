import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

const TweetBox = () => {
  const [tweetText, setTweetText] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Guest User",
      userName: "guestuser3000",
      verified: false,
      text: tweetText,
      image: tweetImage,
      avatar:
        "https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png?quality=75&strip=all&w=900&h=900&crop=1",
    });

    setTweetText("");
    setTweetImage("");
  };

  return (
    <section className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://cms.qz.com/wp-content/uploads/2017/03/twitter_egg_blue.png?quality=75&strip=all&w=900&h=900&crop=1" />
          <input
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What's happening?"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => {
            setTweetImage(e.target.value);
          }}
          className="tweetBox-img-input"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button onClick={sendTweet} type="submit" className="tweetBox-btn">
          Chirp
        </Button>
      </form>
    </section>
  );
};

export default TweetBox;
