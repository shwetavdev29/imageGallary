import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import "./styles.scss.css";
const BookmarkImages = ({ bookmarkImage }) => {
  return (
    <div className="cards">
      {bookmarkImage.map((item, index) => (
        <div key={index} className="card-col">
          <img className="image-card shadow" src={item.url} alt="Placekitten" />
          <div className="card-overlay bookmarked">
            {<IoIosArrowDropleftCircle />}
            <div>
              <h5>{item.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookmarkImages;
