import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <section className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgets-search-icon" />
        <input placeholder="Search Chirpy" type="text" />
      </div>

      <div className="widgets-container">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1352535221426597889"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="strtmack"
          options={{ height: 400 }}
        />
      </div>
    </section>
  );
};

export default Widgets;
