import React from "react";
import Showcase from "../components/Showcase";
import Header from "../components/Header";
import Image from "../components/Image";
import Categories from "../components/Categories";
import Title from "../components/Title";
import Select from "../components/Select";
import ContentAd from "../components/ContentAd";
import VerTodos from "../components/VerTodos";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

class Home extends React.Component {
  render() {
    return(
      <main>
        <Header />
        <Image />
        <Categories />
        <Title />
        <Select />
        <Showcase />
        <ContentAd />
        <Title />
        <VerTodos />
        <Showcase />
        <ContentAd />
        <Brands />
        <Title />
        <VerTodos />
        <Showcase />
        <Footer />
      </main>
    );
  }
}

export default Home;