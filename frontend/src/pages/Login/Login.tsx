import { Avatar, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.scss";

function Login() {
  let navigate = useNavigate();

  const [login, setLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    try {
      let name = e.target.name;
      let value = e.target.value;

      setFormData({
        ...formData,
        [name]: value,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginSignup = () => {
    try {
      navigate("/notes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.box}>
        <h2>{login ? "Login" : "Signup"}</h2>
        <div style={{ marginTop: 5 }}>
          <Avatar src="/broken-image.jpg" sx={{ width: 75, height: 75 }} />
        </div>
        <div
          style={{
            width: "90%",
            padding: "10px",
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label={"Email"}
            name={"email"}
            value={formData.email}
            variant="outlined"
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "15px" }}
          />
          <TextField
            label={"Password"}
            name={"password"}
            value={formData.password}
            variant="outlined"
            onChange={handleChange}
            style={{ width: "100%", marginBottom: "15px" }}
          />
          <Button variant="contained" onClick={loginSignup}>
            {login ? "Login" : "Signup"}
          </Button>
          <p>
            {login ? `Can't` : "Already"} have account ?{" "}
            <span
              style={{ color: "#307091", cursor: "pointer" }}
              onClick={() => {
                setLogin(!login);
              }}
            >
              {login ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
