import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StoryCard.css";
import previousStoryBtn from "./../../assets/ooui_next-ltr.svg";
import nextStoryBtn from "./../../assets/ooui_next-ltr (1).svg";
import bookmarkStory from "./../../assets/Group 21.svg";
import likedIcon from "./../../assets/likes.svg";
import shareIcon from "./../../assets/shareicon.svg";
import cancelIcon from "./../../assets/storycross.svg";
import { useNavigate, useParams } from "react-router";

const StoryCard = () => {
  const [story, setStory] = useState(null);
  const { id } = useParams();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate();

  // State for the link sharebar popup
  const [showLinkShareBar, setShowLinkShareBar] = useState(false);

  useEffect(() => {
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

  const handleShare = () => {
    const currentSlideId = story[currentSlideIndex]._id;

    const baseLink = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
    const linkToCopy = `${baseLink}/story/${currentSlideId}`;

    navigator.clipboard.writeText(linkToCopy).then(() => {
      setShowLinkShareBar(true);
    });
  };

  useEffect(() => {
    if (showLinkShareBar) {
      const timeout = setTimeout(() => {
        setShowLinkShareBar(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showLinkShareBar]);

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
                <img
                  src={cancelIcon}
                  alt="cancelbutton"
                  onClick={() => navigate("/")}
                />

                <img
                  src={shareIcon}
                  alt="sharebutton"
                  className="sharebtn"
                  onClick={handleShare}
                />
              </div>
            </div>
            <img
              src={currentSlide.slideImageUrl}
              alt=""
              className="story-img"
            />

            {showLinkShareBar && (
              <div className="link-sharebar">Link copied to clipboard</div>
            )}
            <div className="lower-darkshade">
              <div className="story-title">{currentSlide.slideHeading}</div>
              <div className="story-description">
                {currentSlide.slideDescription}
              </div>
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
