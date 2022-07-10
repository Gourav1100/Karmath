import React from "react";
import styles from "./AboutUs.module.css";
import { Grid } from "@mui/material";

class AboutUs extends React.Component{
    render(){
        return(
            <>
            <h1     >By ManchurianHotdog</h1>
            <div className = {styles.center}>
            <h2>Our Team</h2>   
            <Grid container maxWidth sx={{dispay: "flex"}} justifyContent="center" alignItems="center">
            <Grid item xs ={12} md = {4}>
            <h3>Aditya Singh </h3>
            <h3>Ashutosh Gangwar</h3>
            <h3>Gourav Bidhuri</h3>
            <h3>Tejaswi</h3>
            <h3>Dev Jain</h3>
          </Grid>
          </Grid>
            </div>
            
            </>
        );
    }
};

export default AboutUs;