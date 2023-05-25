import React from "react";
import "./BotHeader.css"

class BotHeader extends React.Component {
  render() {
    return(
      <section className="bot-header">
        <div className="bot-header-content">
            <a href="#" className="link-bot-header">TODAS CATEGORIAS</a>
            <a href="#" className="link-bot-header">SUPERMERCADO</a>
            <a href="#" className="link-bot-header">LIVROS</a>
            <a href="#" className="link-bot-header">MODA</a>
            <a href="#" className="link-bot-header">LANÇAMENTO</a>
            <a href="#" className="link-bot-header">OFERTAS DO DIA</a>
            <a href="#" className="link-bot-header">ASSINATURA</a>
        </div>
      </section>
    );
  }
}

export default BotHeader;