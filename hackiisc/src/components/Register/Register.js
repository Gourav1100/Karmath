import React from "react";
import styles from "../../pages/Login.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Register(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
    <form>
      <div className={styles.center}>
        <h3>Register as {props.type}</h3>
        <Grid container maxWidth sx={{dispay: "flex"}} justifyContent="center" alignItems="center">
            <Grid item xs ={12} md = {4}>
            {(props.type === "Employee")? (
                <TextField
                name="name"
                label={"Name"}
                sx={{
                  display: "flex",
                  marginTop: 2,
                  marginBottom: 1,
                  marginLeft: "15%",
                  width: "70%"
                }}
              />
            ) : (<></>)}

          <TextField
            name="companyName"
            label={"Company Name"}
            sx={{
              display: "flex",
              marginTop: 2,
              marginBottom: 1,
              marginLeft: "15%",
              width: "70%"
            }}
          />
          <TextField
            name="Branch"
            label={"Company Branch"}
            sx={{
              display: "flex",
              marginTop: 2,
              marginBottom: 1,
              marginLeft: "15%",
              width: "70%"
            }}
          />
          {(props.type === "Employee") ? (
            <TextField
            name="domain"
            label={"Domain"}
            sx={{
              display: "flex",
              marginTop: 2,
              marginBottom: 1,
              marginLeft: "15%",
              width: "70%"
            }}
          />
          ) : (<></>)}

          {(props.type === "Employee") ? (
               <TextField
               name="phoneNumber"
               label={"Phone Number"}
               sx={{
                 display: "flex",
                 marginTop: 2,
                 marginBottom: 1,
                 marginLeft: "15%",
                 width: "70%"
               }}
             />
          ) : (<></>)}

          <TextField
            name="email"
            label={"Email"}
            type="email"
            sx={{
              display: "flex",
              marginTop: 2,
              marginBottom: 1,
              marginLeft: "15%",
              width: "70%"
            }}
          />
          <TextField
            name="password"
            label={"Password"}
            type="password"
            sx={{
              display: "flex",
              marginTop: 2,
              marginBottom: 4,
              marginLeft: "15%",
              width: "70%"
            }}
          />

          <Button
          type="submit"
          variant="contained"
          style ={{
            width: "70%",
            margin: 2
          }}
          onClick={handleSubmit}
          >
            Register as {props.type}
          </Button>
          </Grid>
          </Grid>
      </div>
    </form>
    </div>
  );
}

export default Register;
