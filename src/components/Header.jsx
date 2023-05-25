import React from "react";
import TopHeader from "../components/TopHeader";
import BotHeader from "./BotHeader";
import Logo from "../image/logo.png"
import Glass from "../image/MagnifyingGlass.png"
import Group from "../image/Group.png"
import Heart from "../image/Heart.png"
import User from "../image/UserCircle.png"
import Cart from "../image/ShoppingCart.png"
import "./Header.css"

class Header extends React.Component {

  render() {
    return(
      <header>
        <TopHeader />
        <div className="header">
            <hr />
            <div className="header-content">
                <img src={ Logo } alt="Logo da VTEX" className="logo-image"/>
                <label htmlFor="">
                    <input type="text" placeholder="O que você está buscando?"/>
                    <a href="#"><img src={ Glass } alt="" /></a>
                </label>
                <div className="icons">
                    <a href="#"><img src={ Group } alt="" /></a>
                    <a href="#"><img src={ Heart } alt="" /></a>
                    <a href="#"><img src={ User } alt="" /></a>
                    <a href="#"><img src={ Cart } alt="" /></a>
                </div>
            </div>
        </div>
        <BotHeader />
      </header>
    );
  }
}

export default Header;