import React from "react";
import "./ContentAd.css";
import ImageAd from "./ImageAd";

class ContentAd extends React.Component {
  render() {
    return(
      <section className="content-ad">
        <div className="content-ad-content">
            <ImageAd />
            <ImageAd />
        </div>
      </section>
    );
  }
}

export default ContentAd;