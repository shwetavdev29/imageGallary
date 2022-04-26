import React, { useEffect, useState } from "react";
import imageArray from "../../utils/imageData";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./styles.scss.css";

const AllImages = ({ bookmarkImage, setBookMarkImage }) => {
  const [bookMarkedImageArray, setBookMarkImageArray] = useState([]);

  useEffect(() => {
    setBookMarkImageArray(bookmarkImage);
  }, [bookmarkImage]);

  const onClickHandler = (imageObj) => {
    const checkExistence = bookMarkedImageArray.find(
      (imageItem) => imageItem.image_id === imageObj.image_id
    );
    if (!checkExistence) {
      const array = [...bookMarkedImageArray];
      array.push(imageObj);
      setBookMarkImage([...array]);
    } else {
      const existenceImageIndex = bookMarkedImageArray.findIndex(
        (imageItem) => imageItem.image_id === imageObj.image_id
      );
      const array = [...bookMarkedImageArray];
      array.splice(existenceImageIndex, 1);
      setBookMarkImage([...array]);
    }
  };

  return (
    <>
      <div className="cards">
        {imageArray.map((item, index) => {
          const checkBookmarked = bookmarkImage.find(
            (value) => value.image_id === item.image_id
          );
          return (
            <div
              key={index}
              className="card-col"
              onClick={() => onClickHandler(item)}
            >
              <img
                className="image-card shadow"
                src={item.url}
                alt="Placekitten"
              />
              <div
                className={`card-overlay ${
                  checkBookmarked ? `bookmarked` : null
                }`}
              >
                {checkBookmarked ? (
                  <IoIosArrowDropleftCircle />
                ) : (
                  <MdKeyboardArrowLeft />
                )}

                <div>
                  <h5>{item.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllImages;
