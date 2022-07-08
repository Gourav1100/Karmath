import React from "react";
import styles from "./CardGrid.module.css";
import { Grid } from "@mui/material";
import image1 from "../../images/image1.jpg"
import image2 from "../../images/image2.jpg"
import MediaCard from "../Cards/Cards";


class CardGrid extends React.Component {
  render() {
    return (
      <div >
        <div className={styles.top}>
          <Grid container spacing={2} className= {styles.top}>
            <Grid item xs={12} md={6} >
              <MediaCard
                src={image1}
                alt=""
                text = "hello"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MediaCard
                src={image2}
                alt=""
                text = "Use AI to find efficiency of your employee"
              />
            </Grid>
          </Grid>
        </div>
        <div className={styles.fit}>
          <Grid container spacing={2} className={styles.fit}>
            <Grid item xs={12} md={6}>
              <MediaCard
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt=""
                text = "hello"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MediaCard
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt=""
                text = "hello"
              />
            </Grid>
          </Grid>
        </div>
        <div className={styles.end}>
          <Grid container spacing={2} className={styles.end}>
            <Grid item xs={12} md={6}>
              <MediaCard
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt=""
                text = "hello"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MediaCard
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt=""
                text = "hello"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CardGrid;
