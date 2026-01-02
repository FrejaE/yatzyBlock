import { Box, CircularProgress, Typography } from "@mui/material";
import CasinoRoundedIcon from "@mui/icons-material/Casino";

type LoaderProps = {
  text?: string;
};

export const Loader = ({ text = "Laddar..." }: LoaderProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: 64,
          height: 64,
        }}
      >
        <CircularProgress size={64} thickness={4} color="primary" />
        <CasinoRoundedIcon
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(25deg)",
            fontSize: 32,
            color: "primary.main",
          }}
        />
      </Box>

      <Typography variant="body2" color="text.secondary">
        {text}
      </Typography>
    </Box>
  );
};
