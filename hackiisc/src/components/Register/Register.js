import React from "react";
import styles from "../../pages/Login.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";

function Register(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const settings = props.type==="Employee"?{
      action: 'createUser',
      name: event.target.name.value,
      company: event.target.company.value,
      branch: event.target.branch.value,
      domain: event.target.domain.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      password: event.target.password.value,
    }:{
      action: 'createBranch',
      name: event.target.branch.value,
      company: event.target.company.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(settings)
    axios.post("http://localhost:5000/api/Database",settings).then((res)=>{
      if(res.status === 200){
        window.location.replace("/login");
      }
      else{
        alert(res.data);
        window.location.reload();
      }
    });
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
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
            name="company"
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
            name="branch"
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
               name="phone"
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
