import * as React from "react";
import { Grid, Avatar, Typography, Divider, TextField, Button } from "@mui/material";
import EfficiencyHistory from "../Charts/EfficiencyHistory";
import CompanyComparision from "../Charts/CompanyComparision";
// stylesheets
import styles from "./Profile.module.css";
import axios from "axios";

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function capitalize( value){
    let str = `${value}`.toLowerCase();
    return str.slice(0,1).toUpperCase() + str.slice(1);
}

export default function Profile(props){
    const sampledata = {
        'Name' : "Ashutosh Gangwar",
        'Name1' : "Ashutosh Gangwar",
        'Name2' : "Ashutosh Gangwar",
        'Name3' : "Ashutosh Gangwar",
    }
    const formArray = {
        'Email' : "text",
        'Password' : "password",
        'Company' : "text",
        'Branch' : "text",
    }
    const HandleInput = (event) => {
        let elements = document.getElementsByClassName("ProfileInputs");
        for(let i = 0; i < elements.length; i++){
            const value = elements[i].children[1].children[0].value;
            if(value!="" && value!=null){
                setSubmit(true);
                return true;
            }
        }
        setSubmit(false);
        return false;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target);
    }
    const [isSet, setStatus] = React.useState(false);
    const [graphData, setGraph] = React.useState([])
    if(isSet === false){
        console.log(graphData)
        axios.post("http://localhost:5000/api/Database",{
            action: sessionStorage.getItem("src")==="user"?"getEfficiencyHistory":"getCompanyComparision",
            token: sessionStorage.getItem("authToken"),
            email: sessionStorage.getItem("email")
        }).then((res)=>{
            if(res.status === 200){
                console.log(res.data);
                setGraph(res.data);
                setStatus(true);
            }
        })
    }
    const [submitState, setSubmit] = React.useState(false);
    return(
        <Grid  container maxWidth padding={{
            xs: 2,
            md: 3,
            lg: 5,
        }} className = {styles.container}>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
            <Grid item xs={12} padding={{
                xs: 2,
                md: 3,
                lg: 5,
            }}>
                <Grid container maxWidth>
                    <Grid item xs={12} padding={1}>
                        <Typography variant="h5" padding={1}>
                            <b>Your Profile</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} padding={{
                        xs: 2,
                        md: 3,
                        lg: 5,
                    }} sx={{display: "flex"}} alignContent="center" justifyContent="center">
                        <Avatar sx={{ width: 200, height: 200, bgcolor: stringToColor(props.userdata?(props.userdata.Name?props.userdata.Name:props.userdata.Branch):"T") }}>{props.userdata?(props.userdata.Name?props.userdata.Name[0]:props.userdata.Branch[0]):"T"}</Avatar>
                    </Grid>
                    <Grid item xs={12} md={8} padding={{
                        xs: 2,
                        md: 3,
                        lg: 5,
                    }}>
                        {Object.keys(props.userdata?props.userdata:sampledata).map((key, index) =>{
                            return(
                                <Grid container maxWidth key={index} padding={1}>
                                    <Grid item xs={2} sx={{display: "flex"}} alignContent="left" justifyContent="left">
                                        <Typography variant="h6">
                                            <b>{capitalize(`${key}`)}</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} sx={{display: "flex"}} alignContent="center" justifyContent="center">
                                        <Typography variant="h6">
                                            <b>:</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8} sx={{display: "flex"}} alignContent="left" justifyContent="left">
                                        <Typography variant="h6">
                                            {props.userdata?props.userdata[key]:sampledata[key]}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
            <Grid item xs={12} padding={{
                xs: 2,
                md: 3,
                lg: 5,
            }}>
                <Typography variant="h5" padding={1}>
                    <b>Your Performance</b>
                    {
                        sessionStorage.getItem("src")==="user"?(
                            <EfficiencyHistory data={graphData} />
                        ):(
                            <CompanyComparision data={graphData} />
                        )
                    }
                </Typography>
                {/* Graph conponent here */}
            </Grid>
            <Grid item xs={12}>
                <Divider variant="middle" />
            </Grid>
            <Grid item xs={12} padding={{
                xs: 2,
                md: 3,
                lg: 5,
            }}>
                <Typography variant="h5" padding={1}>
                    <b>Update Profile</b>
                </Typography>
                <form style={{width: "100%"}}>
                    <Grid container maxWidth sx={{display: "flex"}} justifyContent="center" alignContent="center">
                        {
                        Object.keys(formArray).map((key, index) =>{
                            return(
                                <Grid item sx={12} md={6} lg={4} padding={1} key={key}>
                                    <TextField className="ProfileInputs" name={key} type={formArray[key]} sx={{width: "100%"}}  onKeyUp={HandleInput} label={key} variant="outlined" />
                                </Grid>
                            );
                        })
                        }
                    </Grid>
                    <Grid container maxWidth sx={{display: "flex"}} justifyContent="center" alignContent="center">
                        <Grid item xs={12} md={6} lg={4} padding={1}>
                            {
                                submitState?(<Button className={styles.submitButton} onClick={handleSubmit} variant="contained">Submit</Button>):(<Button className={styles.submitButton} disabled variant="outlined">Submit</Button>)
                            }
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
}
