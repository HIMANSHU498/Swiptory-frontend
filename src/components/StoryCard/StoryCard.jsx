import React, { useState } from "react";
import "./StoryCard.css";
import previousStoryBtn from "./../../assets/ooui_next-ltr.svg";
import nextStoryBtn from "./../../assets/ooui_next-ltr (1).svg";
import foodpic from "./../../assets/Food.png";
import bookmarkStory from "./../../assets/Group 21.svg";
import likedIcon from "./../../assets/likes.svg";
import shareIcon from "./../../assets/shareicon.svg";
import cancelIcon from "./../../assets/cross.svg";

const StoryCard = () => {
  return (
    <>
      <div className="story-container">
        <div className="storycard-box">
          <img src={previousStoryBtn} alt="backbutton" />
          <div className="storycard">
            <div className="upper-darkshade">
              <div className="progressbar-container"></div>
              <div>
                <img src={cancelIcon} alt="cancelbutton" />
                <img src={shareIcon} alt="sharebutton" />
              </div>
            </div>
            <img src={foodpic} alt="" className="story-img" />
            {/* <div className="link-sharebar">Link copied to clipboard</div> */}
            <div className="lower-darkshade">
              <h2 className="story-title">Heading comes here</h2>
              <h4 className="story-description">
                Inspirational designs, illustrations, and graphic elements from
                the world’s best designers.
              </h4>
              <div className="bookmarks-likes-container">
                <img src={bookmarkStory} alt="bookmarkicon" />

                <div>
                  <img src={likedIcon} alt="like icon" />
                  <span>1280</span>
                </div>
              </div>
            </div>
          </div>
          <img src={nextStoryBtn} alt="nextbutton" />
        </div>
      </div>
    </>
  );
};

export default StoryCard;
