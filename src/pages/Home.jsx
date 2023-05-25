import React from "react";
import Showcase from "../components/Showcase";
import Header from "../components/Header";

class Home extends React.Component {

  componentDidMount() {

  }

  render() {
    return(
      <main>
        <Header />
        <Showcase />
      </main>
    );
  }
}

export default Home;