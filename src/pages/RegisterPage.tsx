import { Box, Button, TextField, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
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
        <Typography> Skapa användare</Typography>
        {/* Rätt typo här, storlek */}
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Användarnamn"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Lösenord"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" fullWidth>
          Skapa användare
        </Button>
        <Typography variant="body2">
          Redan medlem
          <Link component={RouterLink} to="/login">
            Logga in
          </Link>
        </Typography>
      </Box>
    </>
  );
};
