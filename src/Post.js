import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PublishIcon from "@material-ui/icons/Publish";
import RepeatIcon from "@material-ui/icons/Repeat";
import { ChatBubbleOutline, FavoriteBorder } from "@material-ui/icons";

const Post = forwardRef(
  ({ displayName, userName, verified, text, image, avatar }, ref) => {
    return (
      <section className="post" ref={ref}>
        <div className="post-avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post-body">
          <div className="post-header">
            <div className="header-text">
              <h3>
                {displayName}{" "}
                {/* <span className="header-special">
                  {verified && <CheckCircleIcon className="check-icon" />}@
                  {userName}
                </span> */}
              </h3>
              <h3 className="header-special">
                {verified && <CheckCircleIcon className="check-icon" />}@
                {userName}
              </h3>
            </div>
            <div className="post-body-text">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" width="400px" />
          <div className="post-footer">
            <ChatBubbleOutline fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </section>
    );
  }
);

export default Post;
