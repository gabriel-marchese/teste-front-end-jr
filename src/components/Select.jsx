import React from "react";
import "./Select.css"

class Select extends React.Component {
  render() {
    return(
        <div className="select">
            <div className="select-content">
                <a href="#" className="select-link"><span>CELULAR</span></a>
                <a href="#" className="select-link">ACESSÓRIOS</a>
                <a href="#" className="select-link">TABLETS</a>
                <a href="#" className="select-link">NOTEBOOKS</a>
                <a href="#" className="select-link">TVS</a>
                <a href="#" className="select-link">VER TODOS</a>
            </div>
        </div>
    );
  }
}

export default Select;