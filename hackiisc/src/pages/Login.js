import React from "react";
import styles from "./Login.module.css";
import { TextField } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Login() {
  const [textValue, setTextValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
  };

  return (
    <form>
      <div className={styles.center}>
        <h3>Sign in to your Karmath Account</h3>
        <Grid container maxWidth sx={{dispay: "flex"}} justifyContent="center" alignItems="center">
            <Grid item xs ={12} md = {4}>
          <TextField
            name="email"
            label={"Email"}
            sx={{
              display: "flex",
              marginTop: 4,
              marginBottom: 1,
              marginLeft: "15%",
              width: "70%"
            }}
          />
          <TextField
            name="password"
            label={"Password"}
            sx={{
              display: "flex",
              marginBottom: 2,
              marginLeft: "15%",
              width: "70%"
            }}
          />

          <Button 
          type="submit"
          variant="contained"
          style ={{
            width: "70%",
            margin: 3
          }}
          onClick={handleSubmit}
          >
            Sign IN
          </Button>
          <Button 
          variant="contained"
          style ={{
            width: "70%",
            margin: 3
          }}
          >
            Register as Company
          </Button>
          <Button 
          variant="contained"
          style ={{
            width: "70%",
            margin: 3
          }}
          >
            Register as employee
          </Button>
          </Grid>
          </Grid>
      </div>
    </form>
  );
}

export default Login;
