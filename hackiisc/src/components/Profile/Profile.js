import * as React from "react";
import { Grid, Avatar, Typography, Divider, TextField } from "@mui/material";

// stylesheets
import styles from "./Profile.module.css";

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

function stringAvatar(name) {
    return {
        sx: {
        bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
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
                        <Avatar {...stringAvatar(props.userdata?props.userdata.username:"Test User")}
                            sx={{ width: 200, height: 200 }}
                        />
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
                <Grid container maxWidth sx={{display: "flex"}} justifyContent="center" alignContent="center">
                    {
                    Object.keys(props.userdata?props.userdata:sampledata).map((key, index) =>{
                        return(
                            <Grid item sx={12} md={6} lg={4} padding={1}>
                                <TextField name={key} sx={{width: "100%"}} id="outlined-basic" label={key} variant="outlined" />
                            </Grid>
                        );
                    })
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}
