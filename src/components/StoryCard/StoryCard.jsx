import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StoryCard.css";
import previousStoryBtn from "./../../assets/ooui_next-ltr.svg";
import nextStoryBtn from "./../../assets/ooui_next-ltr (1).svg";
import bookmarkStory from "./../../assets/Group 21.svg";
import likedIcon from "./../../assets/likes.svg";
import shareIcon from "./../../assets/shareicon.svg";
import cancelIcon from "./../../assets/cross.svg";
import { useParams } from "react-router";

const StoryCard = () => {
  const [story, setStory] = useState(null);
  const { id } = useParams();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    // Fetch the story data from the backend API using Axios
    axios
      .get(`https://swiptory-backend.onrender.com/api/story/${id}`)
      .then((response) => {
        setStory(response.data.story.slides);
      })
      .catch((error) => {
        console.error("Error fetching story:", error);
      });
  }, [id]);

  useEffect(() => {
    // Auto-change slide every 10 seconds
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % story.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [story]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % story.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? story.length - 1 : prevIndex - 1
    );
  };

  if (!story || story.length === 0) {
    return <div>Loading...</div>;
  }

  const currentSlide = story[currentSlideIndex];

  return (
    <>
      <div className="story-container">
        <div className="storycard-box">
          <img
            src={previousStoryBtn}
            alt="backbutton"
            onClick={handlePreviousSlide}
          />
          <div className="storycard">
            <div className="upper-darkshade">
              <div className="progressbar-container"></div>
              <div>
                <img src={cancelIcon} alt="cancelbutton" />
                <img src={shareIcon} alt="sharebutton" />
              </div>
            </div>
            <img
              src={currentSlide.slideImageUrl}
              alt=""
              className="story-img"
            />
            <div className="lower-darkshade">
              <h2 className="story-title">{currentSlide.slideHeading}</h2>
              <h4 className="story-description">
                {currentSlide.slideDescription}
              </h4>
              <div className="bookmarks-likes-container">
                <img src={bookmarkStory} alt="bookmarkicon" />
                <div>
                  <img src={likedIcon} alt="like icon" />
                  <span>{currentSlide.likes}</span>
                </div>
              </div>
            </div>
          </div>
          <img src={nextStoryBtn} alt="nextbutton" onClick={handleNextSlide} />
        </div>
      </div>
    </>
  );
};

export default StoryCard;
