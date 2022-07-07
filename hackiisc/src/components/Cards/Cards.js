import { CardContent } from "@mui/material";
import React from "react";
import CardSchema from "../CardSchema/CardSchema";
import styles from "./Cards.module.css";

class FrontCard extends React.Component {
  render(props) {
    return (
      <CardSchema
        src={this.props.src}
        alt={this.props.alt}
        className={styles.sz}
      />
    );
  }
}

export default FrontCard;
