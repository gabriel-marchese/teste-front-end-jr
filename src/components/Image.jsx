import React from "react";
import "./Image.css"

class Image extends React.Component {

  render() {
    return(
      <section className="image">
        <div className="image-content">
            <div className="text-content">
              <div className="text-container">
                <h1 className="title-image">Venha conhecer nossas promoções</h1>
                <p className="text-imagem">50% Off nos produtos </p>
                <button className="btn-image">Ver produto</button>
              </div>
            </div>
        </div>
      </section>
    );
  } 
}

export default Image;