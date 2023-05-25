import React from "react";
import "./Footer.css"
import BotFooter from "./BotFooter";
import Socials from "../image/Socials.png"
import Payment from "../image/pagamento.png"

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className="footer-content">
            <div className="footer-container">
                <div className="card-content">
                    <div className="footer-card">
                        <h5 className="footer-title">SOBRE NÓS</h5>
                        <div className="footer-card-content">
                            <a href="" className="footer-card-links">CONHEÇA</a>
                            <a href="" className="footer-card-links">COMO COMPRAR</a>
                            <a href="" className="footer-card-links">INDICAÇÃO E DESCONTO</a>
                        </div>
                        <div>
                            <img src={ Socials } alt="" />
                        </div>
                    </div>
                    <div className="footer-card">
                        <h5 className="footer-title">INFORMAÇÕES ÚTEIS</h5>
                        <div className="footer-card-content">
                            <a href="#" className="footer-card-links">FALE CONOSCO</a>
                            <a href="#" className="footer-card-links">DÚVIDAS</a>
                            <a href="#" className="footer-card-links">PRAZOS E ENTREGAS</a>
                            <a href="#" className="footer-card-links">FORMAS DE PAGAMENTO</a>
                            <a href="#" className="footer-card-links">POLÍTICA DE PRIVACIDADE</a>
                            <a href="#" className="footer-card-links">TROCAS E DEVOLUÇÕES</a>
                        </div>
                    </div>
                    <div className="footer-card">
                        <h5 className="footer-title">FORMAS DE PAGAMENTO</h5>
                        <div className="footer-card-content">
                            <img src={ Payment } alt="" />
                        </div>
                    </div>
                </div>
                <aside>
                    <div>
                        <h5>CADASTRE-SE E RECEBA NOSSAS <span>NOVIDADES E PROMOÇÕES</span></h5>
                        <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <form>
                            <input type="text" placeholder="SEU E-MAIL"/>
                            <button>OK</button>
                        </form>
                    </div>
                </aside>
            </div>
            <BotFooter />
        </div>
      </footer>
    );
  }
}

export default Footer;