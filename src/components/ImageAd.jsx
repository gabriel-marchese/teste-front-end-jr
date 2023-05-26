import React from "react";
import "./ImageAd.css"

class ImageAd extends React.Component {
  render() {
    return(
      <div className="Image-ad">
        <div className="Image-ad-content">
            <div className="Image-ad-card">
                <h3 className="Image-ad-title">Parceiros</h3>
                <p className="Image-ad-text">Lorem ipsum dolor sit amet, consectetur</p>
                <button className="Image-ad-btn">Confira</button>
            </div>
        </div>
      </div>
    );
  }
}

export default ImageAd;