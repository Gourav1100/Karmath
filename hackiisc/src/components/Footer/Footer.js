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
            <p style={{ color: "white", padding: "30px" }}>
              We help companies in finding the efficiency of their employees
              which help them to increase their productivity and can also select
              easily which user has to be given performance improvement plan. An
              employee can also see where he or she stand in his or her company.
              They can check anytime in his branch or over all branches of the
              company globally, anytime through our evaluate performace tab
              given on the dashboard.
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
