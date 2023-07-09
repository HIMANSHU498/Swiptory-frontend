import React from "react";
import "./Home.css";
import foodImg from "./../../assets/Food.png";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="category-container">
          <div className="category-box">
            <h1 className="category-name">All</h1>
          </div>
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>{" "}
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>
          <div className="category-box">
            <h1 className="category-name">Food</h1>
          </div>
        </div>
        <div className="stories-container">
          <h2 className="category-title">Top Stories About food</h2>
          <div className="story-box">
            <div className="story-card">
              <img src={foodImg} alt="foodpic" />
              <div className="dark-shadow">
                <h3 className="story-title">Heading comes here</h3>
                <h4 className="story-description">
                  Inspirational designs, illustrations, and graphic elements
                  from the world’s best designers.
                </h4>
              </div>
            </div>
            <div className="story-card">
              <img src={foodImg} alt="foodpic" />
              <h3 className="story-title">Heading comes here</h3>
              <h4 className="story-description">
                Inspirational designs, illustrations, and graphic elements from
                the world’s best designers.
              </h4>
            </div>
            <div className="story-card">
              <img src={foodImg} alt="foodpic" />
              <h3 className="story-title">Heading comes here</h3>
              <h4 className="story-description">
                Inspirational designs, illustrations, and graphic elements from
                the world’s best designers.
              </h4>
            </div>
            <div className="story-card">
              <img src={foodImg} alt="foodpic" />
              <h3 className="story-title">Heading comes here</h3>
              <h4 className="story-description">
                Inspirational designs, illustrations, and graphic elements from
                the world’s best designers.
              </h4>
            </div>
          </div>
          <button className="see-more">See more</button>
        </div>
      </div>
    </>
  );
};

export default Home;
