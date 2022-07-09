import React from "react";
import { Grid } from "@mui/material";
import MediaCard from "../components/Cards/Cards";
import image2 from "../images/image2.jpg";
import image1 from "../images/image1.jpg"  
import Button from '@mui/material/Button';
// stylesheets
import styles from "./Home.module.css"

class Home extends React.Component {
  render() {
    return (
      <div >
        <h1>Karmath</h1>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <div className={styles.main} id="place-main-center">
            <h2>AI Model to find the efficiency of your employee</h2>
          <h6>Meet Karmath, the cutting edge AI/ML software predicting your employees'
efficiency! Know who is slacking, who is improving, and who deserves
to be promoted! Data is presented in form of interactive graph, thus
providing the company and the registered employee deep insights into
their performance.</h6>
            </div>
          
          </Grid>
          <Grid item xs={12} md={6}>
              <MediaCard 
                src={image2}
                alt=""
                text = "Use AI to find efficiency of your employee"
              />
            </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
              <MediaCard 
                src={image1}
                alt=""
                text = "Use AI to find where you stand"
              />
            </Grid>
          <Grid container item xs={12} md={6} >
            <Grid item xs = {6}md={6} className={styles.put}>
              <h5>For Companies</h5>
              <p>We help companies in finding the efficiency of their employees which help them to increase their productivity and can also select easily which user has to be given performance improvement plan.</p>
              <br />
              <Button variant="outlined">Login as Company</Button>
            </Grid>
            <Grid item xs = {6} md={6} className={styles.put}>
              <h5>For Employees</h5>
              <p>We help employees to find out where they stand in their company both branch wise and globally over all branches of company so that they can improve their performance, anytime through our evaluate performace tab in the dashboard.</p>
              <br />
              <Button variant="outlined">Login as Employee</Button>
            </Grid>
          </Grid>
          
        </Grid>

      
      
      
      
      </div>
    );
  }
}

export default Home;
