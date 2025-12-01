import styled from 'styled-components';
import Button from '@mui/material/Button';

export const PrimaryButton = styled(Button)`
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  text-transform: none;
  background-color: #2e7d32 !important;
  color: #fff;

  &:hover {
    background-color: #1b5e20 !important;
  }
`;

// TODO : Ändra färg på secondaryBtn
export const SecondaryButton = styled(Button)`
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 12px;
  text-transform: none;
  background-color: #66bb6a !important;
  color: #fff;

  &:hover {
    background-color: #43a047 !important;
  }
`;

export const HeroButton = styled(Button)`
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 12px;
  text-transform: none;
  background-color: #43a047 !important;
  color: #fff;

  &:hover {
    background-color: #2e7d32 !important;
  }
`;

export const NeutralButton = styled(Button)`
  padding: 10px 18px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 12px;
  text-transform: none;
  background-color: #e0e0e0 !important;
  color: #1a1a1a;

  &:hover {
    background-color: #bdbdbd !important;
  }
`;
// // textfärg på neutral #9E9E9E (Grey 600 – text/outlined)
// #FFFFFF (vit text på grönt)
// #1A1A1A (mörk text på neutral)
