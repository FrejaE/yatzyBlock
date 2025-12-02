import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          justifyContent: 'center',
        }}
      >
        <Button variant="contained" component={RouterLink} to="/game">
          {' '}
          Börja nytt spel{' '}
        </Button>
        <Button variant="contained" component={RouterLink} to="/rules">
          Spelregler
        </Button>
      </Box>
      {/* <WinnersPodium /> komponent vara här  */}
    </>
  );
};
