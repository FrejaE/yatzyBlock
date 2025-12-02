import { Box, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';

export const RegisterPage = () => {
  const navigate = useNavigate();
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
        {/* TODO : Rätt typo här, storlek */}
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
        <PrimaryButton variant="contained" fullWidth>
          Skapa användare
        </PrimaryButton>
        <Typography variant="body2">
          Redan medlem
          <Link onClick={() => navigate('/login')}>Logga in</Link>
        </Typography>
      </Box>
    </>
  );
};
