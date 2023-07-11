import React from "react";
import "./AddStory.css";
import cancel from "./../../assets/cancel.svg";
const AddStory = () => {
  return (
    <>
      <div className="addstory-container">
        <div className="addstory-box">
          <img src={cancel} alt="cancel-icon" />
          <div className="heading2">Add upto 6 slides</div>
          <div className="slide-btn-container">
            <div className="slide-btn">Slide 1</div>
            <div className="slide-btn">Slide 2</div>
            <div className="slide-btn">Slide 3</div>
            <div className="slide-btn">Slide 4</div>
            <div className="slide-btn">Add +</div>
          </div>
          <div className="addstory-contentbox">
            <div>
              <label>Heading:</label>
              <input
                type="text"
                placeholder="Your heading"
                className="addstory-input"
              />
            </div>
            <div>
              <label>Description:</label>
              <input
                type="text"
                placeholder="Story description"
                className="addstory-input"
                style={{ height: "80px" }}
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="text"
                placeholder="Add image url"
                className="addstory-input"
              />
            </div>
            <div>
              <label>Category:</label>
              <select name="" id="">
                <option value="" defaultChecked>
                  Select Category
                </option>
                <option value="">Food</option>
                <option value="">Food</option>
                <option value="">Food</option>
              </select>
            </div>
          </div>
          <div className="addstory-buttons-box">
            <div>
              <button className="previous-btn ">Previous</button>
              <button className="next-btn">Next</button>
            </div>
            <button className="post-btn">Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStory;
