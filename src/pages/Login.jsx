import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login() {
  const auth = getAuth();
  //   const { user } = useContext(AuthContext);

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    console.log("register", { user });
  };

  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ marginBottom: "10px", color: "#d63384" }}
        >
          Login to see something cute
        </Typography>
        <Button
          variant="outlined"
          onClick={handleLoginWithGoogle}
          sx={{
            width: "50%",
            color: "#d63384",
            borderColor: "#d63384",
            "&:hover": { borderColor: "#d63384" },
          }}
        >
          Google
        </Button>
        <br />
        <Button
          variant="outlined"
          onClick={handleLoginWithGoogle}
          sx={{
            width: "50%",
            marginTop: "10px",
            color: "#d63384",
            borderColor: "#d63384",
            "&:hover": { borderColor: "#d63384" },
          }}
        >
          Facebook
        </Button>
      </Container>
    </>
  );
}
