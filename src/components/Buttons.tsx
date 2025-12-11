import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const PrimaryButton = styled(Button)(({ theme }) => ({
  padding: "10px 18px",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "12px",
  textTransform: "none",
  backgroundColor: "#004F4D",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#004F4D",
  },
}));

// TODO : ändra färg på secondarybutton
export const SecondaryButton = styled(Button)(({ theme }) => ({
  padding: "10px 18px",
  fontSize: "1rem",
  fontWeight: 500,
  borderRadius: "12px",
  textTransform: "none",
  backgroundColor: "#66bb6a",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#43a047",
  },
}));

export const HeroButton = styled(Button)(({ theme }) => ({
  padding: "10px 18px",
  fontSize: "1rem",
  fontWeight: 500,
  borderRadius: "12px",
  textTransform: "none",
  backgroundColor: "#F7C948",
  color: "#4A4A4A",
}));

export const NeutralButton = styled(Button)(({ theme }) => ({
  padding: "10px 18px",
  fontSize: "1rem",
  fontWeight: 500,
  borderRadius: "12px",
  textTransform: "none",
  backgroundColor: "#e0e0e0",
  color: "#1a1a1a",
  "&:hover": {
    backgroundColor: "#bdbdbd",
  },
}));

// primär färg knapp och yatzyblock text -- E45343 -- samma färg på plus knapp (add-players-page)
// gul knapp, funkar bra som call to action -- F7C948
// mörk textfärg -- 4A4A4A
// backgrund på inputs -- FFFFFF -- plus iconens färg
// bakgrundsfärg hela sidan FAF7F2
