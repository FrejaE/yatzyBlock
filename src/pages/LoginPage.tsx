import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate(); //Ta bort denna för enhetligt? navigera på samma sätt i alla pages

  return (
    <>
      <p> Välkommen till yatzy Scoreboard</p>
      <div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '240px',
            alignItems: 'center',
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Användarnamn"
            variant="outlined"
          />

          <FormControl sx={{ m: 1, width: 'auto' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Lösenord
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? 'hide the password'
                        : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    // onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          {/* <TextField
            id="outlined-password-input"
            label="Lösenord"
            type="password"
            autoComplete="current-password"
          /> */}
          <Button variant="contained" fullWidth>
            Logga in
          </Button>
          {/* Ska vara lika långt som det andra */}
          <Typography> eller </Typography>
          <Button variant="outlined" fullWidth onClick={() => navigate('/')}>
            Fortsätt som gäst{' '}
          </Button>
          {/* TODO.. ska vara länkat rätt */}
          <Typography variant="body2">
            Har du inget konto?
            <Link component={RouterLink} to="/register">
              Skapa användare
            </Link>
          </Typography>
        </Box>
      </div>
    </>
  );
};
