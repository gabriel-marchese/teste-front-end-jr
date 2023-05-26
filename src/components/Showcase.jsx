import React, { useRef } from "react";
import "./Showcase.css"
import SetaL from "../image/Setal.png"
import SetaR from "../image/SetaR.png"

class Showcase extends React.Component {
  constructor() {
    super();

    this.state ={
      products: [],
    }
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    const query = await fetch("https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json");
    const data = await query.json();
    this.setState({
      products: data.products,
    })
  }

  render() {
    const { products } = this.state;

    return(
      <section className="show-case">
        <div className="show-case-content">
        <button className="teste1"><img src={ SetaL } alt="" /></button>
          <div className="carrousel" ref={this.carrousel}>
            {
              products.map((product, index) => {
                const desconto = (product.price * 0.95).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                const parcelado = (product.price / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                const newPrice = product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                return(
                  <div key={ index } className="product-card">
                    <div className="internal-card">
                      <img src={product.photo} alt="Foto de um Celular" />
                      <p className="description">{product.descriptionShort}</p>
                      <p className="old-price">{newPrice}</p>
                      <p className="new-price">{desconto}</p>
                      <p className="installment-price">ou 2x de R$ {parcelado} sem juros</p>
                      <span className="frete">Frete grátis</span>
                      <button className="button">Comprar</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <button className="teste1"><img src={ SetaR } alt="" /></button>
        </div>
      </section>
    );
  }
}

export default Showcase;