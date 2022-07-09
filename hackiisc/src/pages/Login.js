import React from "react";
import styles from "./Login.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Login() {

  const handleSubmit = (event) => {
    event.preventDefault();
    window.sessionStorage.setItem("loginStatus", true);
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
            <Link to="/registercompany" style={{ textDecoration: 'none', color: 'white' }}>Register as Company</Link>
          </Button>
          <Button 
          variant="contained"
          style ={{
            width: "70%",
            margin: 3
          }}
          >
            <Link to="/registeremployee" style={{ textDecoration: 'none', color: 'white' }}>Register as employee</Link>
          </Button>
          </Grid>
          </Grid>
      </div>
    </form>
  );
}

export default Login;
