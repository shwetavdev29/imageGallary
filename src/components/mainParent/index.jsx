import React from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import AllImages from "../AllImages";
import BookmarkImages from "../BookmarkImages";
import "./styles.scss.css";

const MainParent = () => {
  const [bookmarkImage, setBookMarkImage] = useState([]);
  const [hideTop, setHideTop] = useState(false);
  const sticky = useStickyHeader(107);
  const headerClasses = ` ${
    sticky && hideTop ? "after-header" : "initial-header border border-dark"
  }`;

  function useStickyHeader(offset = 0) {
    const [stick, setStick] = useState(false);
    const handleScroll = () => {
      if (window.scrollY > offset) {
        setStick(window.scrollY > offset);
        setHideTop(true);
      } else {
        setHideTop(false);
      }
    };
    useLayoutEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });
    return stick;
  }
  return (
    <div id="xyz">
      <Tabs
        defaultActiveKey="allImages"
        transition={false}
        id="noanim-tab-example"
        className={`${headerClasses}`}
      >
        <Tab eventKey="allImages" title="all-images">
          <AllImages
            bookmarkImage={bookmarkImage}
            setBookMarkImage={setBookMarkImage}
          />
        </Tab>
        <Tab eventKey="bookmarkImages" title="bookmark-image">
          <BookmarkImages bookmarkImage={bookmarkImage} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default MainParent;
