import React from "react";
import Showcase from "../components/Showcase";
import Header from "../components/Header";
import Image from "../components/Image";
import Categories from "../components/Categories";
import Title from "../components/Title";

class Home extends React.Component {
  render() {
    return(
      <main>
        <Header />
        <Image />
        <Categories />
        <Title />
        <Showcase />  
      </main>
    );
  }
}

export default Home;