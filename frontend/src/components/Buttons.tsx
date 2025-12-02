import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: '10px 18px',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '12px',
  textTransform: 'none',
  backgroundColor: '#2e7d32',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1b5e20',
  },
}));

// TODO : ändra färg på secondarybutton
export const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: '10px 18px',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '12px',
  textTransform: 'none',
  backgroundColor: '#66bb6a',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#43a047',
  },
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  padding: '10px 18px',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '12px',
  textTransform: 'none',
  backgroundColor: '#43a047',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2e7d32',
  },
}));

export const NeutralButton = styled(Button)(({ theme }) => ({
  padding: '10px 18px',
  fontSize: '1rem',
  fontWeight: 500,
  borderRadius: '12px',
  textTransform: 'none',
  backgroundColor: '#e0e0e0',
  color: '#1a1a1a',
  '&:hover': {
    backgroundColor: '#bdbdbd',
  },
}));
