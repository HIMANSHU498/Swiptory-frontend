import React from "react";
import "./Home.css";
import foodImg from "./../../assets/Food.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <div className="home-container">
        {/* <Link to={`/editstory/64b7adcd72945757281d4d74`}>Edit Story</Link> */}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
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
                </h4>{" "}
              </div>
              {/* <button className="edit-btn">&#x270E;Edit</button> */}
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
          <button className="see-more" onClick={() => toast("Wow so hhh")}>
            See more
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
