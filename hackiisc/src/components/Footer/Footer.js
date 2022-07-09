import React from "react";
import { Grid } from "@material-ui/core";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
// stylesheets
import styles from "./Footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <h2 style ={{color: "white", fontSize: "40px"}}>Made with Love</h2>
            <p style={{ color: "white", paddingLeft: "40%" }}>
              - ManchurianHotdogs
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            style={{ padding: "10px", alignItems: "center" }}
          >
            <InstagramIcon
              style={{ fontSize: 80, color: "white", padding: "10px" }}
            />
            <FacebookIcon
              style={{ fontSize: 80, color: "white", padding: "10px" }}
            />
            <EmailIcon
              style={{ fontSize: 80, color: "white", padding: "10px" }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Footer;
