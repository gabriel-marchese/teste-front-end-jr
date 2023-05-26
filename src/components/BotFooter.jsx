import React from "react";
import "./BotFooter.css"
import Empresas from "../image/Empresas.png"

class BotFooter extends React.Component {
  render() {
    return(
      <div className="bot-footer">
        <div className="bot-footer-content">
            <div className="bot-footer-container">
              <p className="bot-footer-text">Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
              É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
              <img src={ Empresas } alt="" />
            </div>
        </div>
      </div>
    );
  }
}

export default BotFooter;