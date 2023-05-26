import React from "react";
import Monitor from "../image/Monitor.png"
import Market from "../image/supermercados.png"
import Drinks from "../image/whiskey.png"
import Tools from "../image/Tools.png"
import Health from "../image/Health.png"
import Sport from "../image/Sport.png"
import Fashion from "../image/Fashion.png"
import "./Categories.css"

class Categories extends React.Component {
  render() {
    return(
      <section className="categories">
        <div className="categories-content">
            <div className="categories-card">
                <div className="categories-img">
                    <img src={ Monitor } alt="" />
                </div>
                <p className="categories-text"><span>Tecnologia</span></p>
            </div>
            <div className="categories-card">
                <div className="categories-img">
                    <img src={ Market } alt="" />
                </div>
                <p className="categories-text">Supermercado</p>
            </div>
            <div className="categories-card">
                <div className="categories-img">
                    <img src={ Drinks } alt="" />
                </div>
                <p className="categories-text">Bebidas</p>
            </div>
            <div className="categories-card">
                <div className="categories-img">
                    <img src={ Tools } alt="" />
                </div>
                <p className="categories-text">Ferramentas</p>
            </div>
            <div className="categories-card">
                <div className="categories-img">
                    <img src={ Health } alt="" />
                </div>
                <p className="categories-text">Saúde</p>
            </div>
            <div className="categories-card">
                <div className="categories-img">
                    <img src={ Sport } alt="" />
                </div>
                <p className="categories-text">Esportes e Fitness</p>
            </div>
            <div className="categories-card">
                <div className="categories-img">
                    <img src={ Fashion } alt="" />
                </div>
                <p className="categories-text">Moda</p>
            </div>
        </div>
      </section>
    );
  }
}

export default Categories;