import { Box, TextField, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useState } from "react";
import { AppButton } from "../components/Buttons";
import { PasswordField } from "../components/PasswordField";

export const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleRegister = async (
    email: string,
    username: string,
    password: string
  ) => {
    // const res = await fetch("http://localhost:1337/auth/register", {
    const res = await fetch("https://yatzyblock.onrender.com/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });
    if (!res.ok) {
      alert("Registrering misslyckades");
      return;
    }

    const user = await res.json();
    login(user);
    navigate("/home");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //   width: "100%",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h6"> Skapa användare</Typography>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          id="username"
          label="Användarnamn"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <PasswordField
          value={password}
          onChange={setPassword}
          autoComplete="new-password"
        />

        <AppButton
          variant="contained"
          color="primary"
          onClick={() => handleRegister(email, username, password)}
        >
          Skapa användare
        </AppButton>
        <Typography variant="body2">
          Redan medlem <Link onClick={() => navigate("/")}>Logga in </Link>
        </Typography>
      </Box>
    </>
  );
};
