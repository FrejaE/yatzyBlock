import { Box, Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { AppButton } from "../components/Buttons";
import { PasswordField } from "../components/PasswordField";

export const LoginPage = () => {
  const { loginAsGuest, login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (username: string, password: string) => {
    const res = await fetch("http://localhost:1337/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      alert("Fel användarnamn eller lösenord");
      return;
    }

    const user = await res.json();
    login(user);
    navigate("/");
  };

  const handleGuest = () => {
    const guest = loginAsGuest();
    console.log("loggade in som gäst", guest);
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
        <h1> Välkommen till YatzyBlock</h1>
        <TextField
          id="outlined-basic"
          label="Användarnamn"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />
        <PasswordField
          value={password}
          onChange={setPassword}
          autoComplete="current-password"
        />

        <AppButton
          variant="contained"
          color="primary"
          aria-label="Logga in och gå vidare till startsida"
          onClick={() => handleLogin(username, password)}
        >
          Logga in
        </AppButton>
        <Typography> eller </Typography>
        <AppButton
          variant="contained"
          color="secondary"
          onClick={handleGuest}
          aria-label="Fortsätt som gäst och gå till startsida"
        >
          Fortsätt som gäst{" "}
        </AppButton>
        <Typography variant="body2">
          Har du inget konto?
          <Link
            onClick={() => navigate("/register")}
            aria-label="Gå till sidan för att skapa en användare"
          >
            Skapa användare
          </Link>
        </Typography>
      </Box>
    </>
  );
};
