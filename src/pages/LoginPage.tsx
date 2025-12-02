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
} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { PrimaryButton, SecondaryButton } from '../components/Buttons';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const handleLogin = () => navigate('/home');

  return (
    <>
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
          <h1> Välkommen till YatzyBlock</h1>
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
                    aria-label={showPassword ? 'göm lösenord' : 'visa lösenord'}
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
            onClick={handleLogin}
          >
            Logga in
          </PrimaryButton>
          {/* TODO : Ska vara lika långt som det andra */}
          <Typography> eller </Typography>
          <SecondaryButton
            variant="outlined"
            fullWidth
            onClick={() => navigate('/')}
            aria-label="Fortsätt som gäst och gå till startsida"
          >
            Fortsätt som gäst{' '}
          </SecondaryButton>
          {/* TODO.. ska vara länkat rätt */}
          <Typography variant="body2">
            Har du inget konto?
            <Link
              onClick={() => navigate('/register')}
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
