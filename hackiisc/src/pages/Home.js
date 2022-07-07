import React from "react";
import Header from "../components/Header/Header";
// stylesheets
import styles from "./Home.module.css"
import CardGrid from "../components/CardGrid/CardGrid";

class Home extends React.Component {
  render() {
    return (
      <div >
        <Header />
        <div className= {styles.set}>
            <CardGrid  />
        
        </div>
      
      </div>
    );
  }
}

export default Home;
