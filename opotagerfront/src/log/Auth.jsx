import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { sendAuthRequest } from "../LiensApi/Api";
import { useDispatch } from "react-redux";
import { authActions } from "../store";

const Auth = () => {
  const dispatch = useDispatch();

  const [isSignup, setIsSignup] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)

    if (isSignup) {
      sendAuthRequest(true, inputs)
      .then(data=> console.log(data))
      .then(()=>{dispatch(authActions.login)})
      .catch((err)=>console.log(err))
    }else {
      sendAuthRequest (false, inputs)
      .then((data) => localStorage.setItem("userId", data.id))
      .then(()=>{dispatch(authActions.login)})
      .catch((err)=> console.log(err))
    }
  };
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    //Permet de glisser la saisie semi auto dans les inputs
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <Box
      width="35%"
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="auto"
      marginTop={10}
    >
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          width="60%"
          padding={5}
          margin="auto"
        >
          <Typography padding={1} variant="h4" textAlign="center">
            {isSignup ? "S'inscrire" : "Se connecter"}
          </Typography>
          {isSignup && (
            <>
              <FormLabel>Nom</FormLabel>
              <TextField
                onChange={handleChange}
                value={inputs.name}
                name="name"
                required
                margin="normal"
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            type="email"
            required
            margin="normal"
          />
          <FormLabel>Password</FormLabel>
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            type="password"
            required
            margin="normal"
          />
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="contained"
          >
            {isSignup ? "S'inscrire" : "Se connecter"}
          </Button>
          <Button
            onClick={() => setIsSignup(!isSignup)}
            sx={{ mt: 2, borderRadius: 10 }}
            variant="outlined"
          >
          Changer pour {isSignup ? "Se connecter" : "S'inscrire"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;