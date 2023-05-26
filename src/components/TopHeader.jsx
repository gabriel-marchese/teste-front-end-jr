import React from "react";
import "./TopHeader.css"
import Shield from "../image/ShieldCheck.png"
import Truck from "../image/Truck.png"
import Card from "../image/CreditCard.png"

class TopHeader extends React.Component {
  render() {
    return(
     <section className="top-header">
        <div className="top-header-content">
            <div className="top-header-element">
                <img src={ Shield } alt="Imagem de um escudo" />
                <p className="text">Compra <span>100% Segura</span></p>
            </div>
            <div className="top-header-element">
                <img src={ Truck } alt="Imagem de um caminhão" />
                <p className="text"><span>Frete grátis</span> acima de R$ 200</p>
            </div>
            <div className="top-header-element">
                <img src={ Card } alt="Imagem de um cartão" />
                <p className="text"><span>Parcele</span> suas compras</p>
            </div>
        </div>
     </section>
    );
  }
}

export default TopHeader;