import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./PerformanceForm.module.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const params = [
  "EmployeeID",
  "Experience(yrs)",
  "TaskAssigned",
  "TaskCompleted",
  "DeadlinesMet",
  "DeadlinesMissed",
  "Number of EOM",
  "EOM points(agg)",
  "EOY(points)",
  "Manager Score",
  "Holidays Taken",
  "Number of Time Overtimed",
];

export default function PerformanceForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
//   const [submitState, setSubmit] = React.useState(false);
  return (
    <div className={styles.container}>
        <Grid item xs={12} >
      <Typography variant="h5" padding={1}>
        <b>Check Your Performance</b>
      </Typography>
        <form style={{ width: "100%" }}>
          <Grid
            container
            style ={{justifyContent: "center", placeItems:"center", marginLeft: 40, marginTop: 20}}
          >
            {params.map((param, index) => {
                return(
                    <Grid item xs={12} md={6} lg={4} style ={{marginLeft: 0}} key={index}>
                        <TextField
                            na5e={param}
                            id="outlined-basic"
                            style ={{width: "80%", marginBottom: "10px"}}
                            label={param}
                            variant="outlined"
                        />
                    </Grid>
                )
            })}
          </Grid>
          </form>
          </Grid>
          {/* <Grid
            container
            maxWidth
            sx={{ display: "flex" }}
            justifyContent="center"
            alignContent="center"
          > */}
            {/* <Grid item xs={12} md={6} lg={4} padding={1}>
              {submitState ? (
                <Button
                  className={styles.submitButton}
                  onClick={handleSubmit}
                  variant="contained"
                >
                  Submit
                </Button>
              ) : (
                <Button
                  className={styles.submitButton}
                  disabled
                  variant="outlined"
                >
                  Submit
                </Button>
              )}
            </Grid> */}
          {/* </Grid> */}
        {/* </form> */}
    </div>
  );
}
