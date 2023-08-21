import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import category from "./data";
import "./Home.css";
import Storybyuser from "./Storybyuser";
import { Link } from "react-router-dom";
const Home = () => {
  const [categories, setCategories] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showMore, setShowMore] = useState({});
  const [slideByUser, setSlideByUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "https://swiptory-backend.onrender.com/api/categories"
        );

        setCategories(response.data.categories);
        setIsLoading(false);
      } catch (error) {
        alert("Error fetching categories:", error);
      }
    }

    fetchCategories();
    async function fetchStoriesByUser() {
      try {
        const jwtToken = localStorage.getItem("token");
        const response = await axios.get(
          "https://swiptory-backend.onrender.com/api/storiesbyuser",
          {
            headers: {
              Authorization: jwtToken,
            },
          }
        );
        const slideIdArray = await response.data.userStories
          .flatMap((story) => story.slides)
          .map((item) => item._id);
        setSlideByUser(slideIdArray);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    }

    fetchStoriesByUser();
  }, []);

  const handleSeeMore = (categoryName) => {
    setShowMore((prevState) => ({
      ...prevState,
      [categoryName]: !prevState[categoryName],
    }));
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
      <div className="home-container">
        <ToastContainer
          position="top-right"
          autoClose={5000}
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
          <div
            className="category-box"
            onClick={() => setSelectedCategory("All")}
            style={
              selectedCategory === "All" ? { border: "5px solid #00ACD2" } : {}
            }
          >
            <h1 className="category-name">All</h1>
          </div>
          {category.map((data, index) => (
            <div
              key={index}
              className="category-box"
              style={{
                backgroundImage: `url(${data.image})`,
                border:
                  selectedCategory === data.category ? "5px solid #00ACD2" : "",
              }}
              onClick={() => handleCategoryClick(data.category)}
            >
              <h1 className="category-name">{data.category}</h1>
            </div>
          ))}
        </div>
        {isLoading ? (
          <p
            style={{ fontSize: "2rem", fontWeight: "700", textAlign: "center" }}
          >
            Loading...
          </p>
        ) : (
          <div className="stories-container">
            {!isLoggedIn || selectedCategory !== "All" ? "" : <Storybyuser />}

            {selectedCategory === "All" ? (
              Object.keys(categories).map((categoryName, index) => (
                <>
                  <h2 className="category-title">
                    Top stories about {categoryName}
                  </h2>
                  <div className="story-box">
                    {categories[categoryName]
                      .flatMap((storiesArray) => storiesArray)
                      .slice(0, showMore[categoryName] ? undefined : 4)
                      .map((story, storyIndex) => (
                        <div key={storyIndex} className="story-card">
                          <img
                            src={story.slideImageUrl}
                            alt="storypic"
                            onClick={() => navigate(`/story/${story._id}`)}
                          />
                          <div
                            className="dark-shadow"
                            onClick={() => navigate(`/story/${story._id}`)}
                          >
                            <h3 className="story-title">
                              {story.slideHeading}
                            </h3>
                            <h4 className="story-description">
                              {story.slideDescription
                                .split(" ")
                                .slice(0, 16)
                                .join(" ") + "..."}
                            </h4>
                          </div>
                          {slideByUser.includes(story._id) ? (
                            <Link to={`/editstory/${story._id}`}>
                              <button className="edit-btn">&#x270E;Edit</button>
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                  </div>

                  {categories[categoryName].flatMap((item) => item).length >
                    4 && (
                    <button
                      className="see-more"
                      onClick={() => handleSeeMore(categoryName)}
                    >
                      {showMore[categoryName] ? "See less" : "See more"}
                    </button>
                  )}
                </>
              ))
            ) : (
              <>
                <h2 className="category-title">
                  Top stories about {selectedCategory}
                </h2>
                <div className="story-box">
                  {categories[selectedCategory]
                    .flatMap((storiesArray, index) => storiesArray)
                    .slice(0, showMore[selectedCategory] ? undefined : 4)
                    .map((story, storyIndex) => (
                      <div key={storyIndex} className="story-card">
                        <img
                          src={story.slideImageUrl}
                          alt="storypic"
                          onClick={() => navigate(`/story/${story._id}`)}
                        />
                        <div
                          className="dark-shadow"
                          onClick={() => navigate(`/story/${story._id}`)}
                        >
                          <h3 className="story-title">{story.slideHeading}</h3>
                          <h4 className="story-description">
                            {story.slideDescription
                              .split(" ")
                              .slice(0, 16)
                              .join(" ") + "..."}
                          </h4>
                        </div>
                        {slideByUser.includes(story._id) ? (
                          <Link to={`/editstory/${story._id}`}>
                            <button className="edit-btn">&#x270E;Edit</button>
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                    ))}
                </div>
                {Array.isArray(categories[selectedCategory]) &&
                  categories[selectedCategory].flatMap((item) => item).length >
                    4 && (
                    <button
                      className="see-more"
                      onClick={() => handleSeeMore(selectedCategory)}
                    >
                      {showMore[selectedCategory] ? "See less" : "See more"}
                    </button>
                  )}
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
