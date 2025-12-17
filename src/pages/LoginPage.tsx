import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { useUser } from "../context/UserContext";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginAsGuest, login } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "240px",
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <h1> Välkommen till YatzyBlock</h1>
          <TextField
            id="outlined-basic"
            label="Användarnamn"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <FormControl sx={{ m: 1, width: "auto" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Lösenord
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? "göm lösenord" : "visa lösenord"}
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <PrimaryButton
            variant="contained"
            fullWidth
            aria-label="Logga in och gå vidare till startsida"
            onClick={() => handleLogin(username, password)}
          >
            Logga in
          </PrimaryButton>
          {/* TODO : Ska vara lika långt som det andra */}
          <Typography> eller </Typography>
          <SecondaryButton
            variant="outlined"
            fullWidth
            onClick={handleGuest}
            aria-label="Fortsätt som gäst och gå till startsida"
          >
            Fortsätt som gäst{" "}
          </SecondaryButton>
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
      </div>
    </>
  );
};
