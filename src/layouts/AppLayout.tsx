import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <p>Frejas coola icon bland annat</p>
      </header>

      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Outlet />
      </Box>

      <footer>Made by me, Freja Edberg</footer>
    </Box>
  );
};
