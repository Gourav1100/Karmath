import React from "react";
import styles from "./CardGrid.module.css";
import FrontCard from "../Cards/Cards";
import { Grid } from "@mui/material";
import image1 from "../../images/image1.jpg"
import image2 from "../../images/image2.jpg"


class CardGrid extends React.Component {
  render() {
    return (
      <div >
        <div className={styles.top}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FrontCard
                src={image1}
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <FrontCard
                src={image2}
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className={styles.fit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FrontCard
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <FrontCard
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
        <div className={styles.end}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FrontCard
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <FrontCard
                src="https://www.w3schools.com/css/img_lights.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default CardGrid;
