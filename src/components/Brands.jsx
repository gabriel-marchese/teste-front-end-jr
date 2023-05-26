import React from "react";
import "./Brands.css"
import Logo from "../image/logo.png"

class Brands extends React.Component {
  render() {
    return(
      <article className="brands">
        <div className="brands-content">
            <h4 className="brands-title">Navegue por marcas</h4>
            <div className="brands-card">
                <button className="brands-btn"><img src={ Logo } alt="" /></button>
                <button className="brands-btn"><img src={ Logo } alt="" /></button>
                <button className="brands-btn"><img src={ Logo } alt="" /></button>
                <button className="brands-btn"><img src={ Logo } alt="" /></button>
                <button className="brands-btn"><img src={ Logo } alt="" /></button>
            </div>
            
        </div>
      </article>
    );
  }
}

export default Brands;