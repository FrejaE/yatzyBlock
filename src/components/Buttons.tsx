import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

// export const PrimaryButton = styled(Button)(({ theme }) => ({
//   padding: "12px 24px",
//   fontWeight: 600,
//   borderRadius: theme.shape.borderRadius,
//   width: "100%",

//   backgroundColor: theme.palette.primary.main,
//   color: "#fff",
// }));

// export const SecondaryButton = styled(Button)(({ theme }) => ({
//   padding: "12px 24px",
//   fontWeight: 600,
//   borderRadius: theme.shape.borderRadius,
//   width: "100%",

//   backgroundColor: theme.palette.secondary.main,
//   color: "#2D2D2D",
// }));

// export const DangerButton = styled(Button)(({ theme }) => ({
//   padding: "12px 24px",
//   fontWeight: 600,
//   borderRadius: theme.shape.borderRadius,
//   width: "100%",

//   backgroundColor: theme.palette.error.main,
//   color: "#fff",
// }));

export const AppButton = styled(Button)(({ theme }) => ({
  padding: "12px 24px",
  fontWeight: 600,
  borderRadius: theme.shape.borderRadius,
  minHeight: 48,
  width: "100%",

  "&:active": {
    transform: "translateY(1px)",
  },
}));
