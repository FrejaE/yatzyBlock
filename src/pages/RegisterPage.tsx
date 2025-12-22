import { Box, TextField, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import { useUser } from "../context/UserContext";
import { useState } from "react";

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
    const res = await fetch("http://localhost:1337/auth/register", {
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
    console.log("loggade in som user", user);
    navigate("/");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "240px",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography> Skapa användare</Typography>
        {/* TODO : Rätt typo här, storlek */}
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="username"
          label="Användarnamn"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Lösenord"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
        <PrimaryButton
          variant="contained"
          fullWidth
          onClick={() => handleRegister(email, username, password)}
        >
          Skapa användare
        </PrimaryButton>
        <Typography variant="body2">
          Redan medlem
          <Link onClick={() => navigate("/login")}>Logga in</Link>
        </Typography>
      </Box>
    </>
  );
};
