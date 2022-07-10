import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./PerformanceForm.module.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import UploadFile from "@mui/icons-material/UploadFile";
import axios from "axios";

const params = [
  "EmployeeID",
  "Experience(yrs)",
  "Task Assigned",
  "Task Completed",
  "Deadlines Met",
  "Deadlines Missed",
  "Number of EOM",
  "EOM points(agg)",
  "EOY(points)",
  "Manager Score",
  "Holidays Taken",
  "Number of Time Overtimed",
];

export default function PerformanceForm(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    var data = [];
    for(var i=0;i<params.length;i++){
      data.push(event.target[params[i]].value)
    }
    console.log(data)
    axios.post("http://localhost:5000/api/predict",{
      email: sessionStorage.getItem("email"),
      data: data,
    })
  };
  const handleFile = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append(
      "csv",
      file,
      file.name
    );
    axios.post("http://localhost:5000/api/uploadFile", formData).then((res)=>{
      console.log(res);
      window.location.reload();
    });
  }
  return (

    <>
    <h2>Need help in improvement.<a style= {{color: "grey"}} href="/resources" >Click here</a></h2>
      {(props.type === "Employee")?(
        <div className={styles.container}>
        <Grid item xs={12} >
        <Typography variant="h5" padding={1}>
          <b>Check Your Performance</b>
        </Typography>
          <form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Grid
              container
              style ={{justifyContent: "center", placeItems:"center", marginLeft: 20, marginTop: 20}}
            >
              {params.map((param, index) => {
                  return(
                      <Grid item xs={12} md={6} lg={4} key={index}>
                          <TextField
                              name={param}
                              na5e={param}
                              style ={{width: "80%", marginBottom: "10px"}}
                              label={param}
                              variant="outlined"
                          />
                      </Grid>
                  )
              })}
            </Grid>
            <Grid
              container
              maxWidth
              sx={{ display: "flex" }}
              justifyContent="center"
              alignContent="center"
            >
              <Grid item xs={12} md={6} lg={4} padding={1} style={{marginLeft: 30, marginTop: 20, marginBottom: 20}}>
                  <Button
                    type="submit"
                    className={styles.submitButton}
                    variant="contained"
                  >
                    Submit
                  </Button>

              </Grid>
            </Grid>
            </form>
            </Grid>
            </div>
      ):(
        <div className={styles.container}>
        <Typography variant="h5" padding={1} style={{textAlign: "center", padding:"5px"}}>
          <b>Check Performance of your Employees</b>
        </Typography>
        <br/>
        <br />
        <Button
        component="label"
        variant="outlined"
        startIcon={<UploadFileIcon />}
        sx={{ marginRight: "1rem" }}
        style = {{margin: "1% 0% 1% 45%"}}
      >
        Upload CSV
        <input type="file" accept=".csv" hidden onChange={handleFile} />
      </Button>
      <Typography variant="h5" padding={1} style={{textAlign: "center", padding:"20px", paddingBottom: "31px"}}>
          <b>Upload file of your employees with the values of parameters</b>
        </Typography>
        </div>
      )}
      </>
  );
}
