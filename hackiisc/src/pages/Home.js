import React from "react";
import { Grid } from "@mui/material";
import MediaCard from "../components/Cards/Cards";
import image2 from "../images/image2.jpg";  
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
          <h6>We help companies in finding the efficiency of their employees which help them to increase their productivity and can also select easily which user has to be given performance improvement plan.</h6>
          <h6>An employee can also see where he or she stand in his or her company. They can check anytime in his branch or over all branches of the company globally, anytime through our evaluate performace tab given on the dashboard.</h6>
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
                src={image2}
                alt=""
                text = "Use AI to find efficiency of your employee"
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
