import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: {
              xs: '260px',
              sm: '320px',
              md: '420px',
            },
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
