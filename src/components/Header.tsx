import { Box, Typography } from "@mui/material";
import CasinoRoundedIcon from "@mui/icons-material/Casino";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          //   margin: "0px",
          justifyContent: "center",
        }}
      >
        <CasinoRoundedIcon
          sx={{
            paddingRight: "8px",
            color: "#E45343",
            transform: "rotate(60deg) ",
            width: "75px",
            height: "75px",
            marginBottom: "8px",
          }}
        />
        <Typography variant="h6" gutterBottom color="#E45343" fontSize="3rem">
          YatzyBlock
        </Typography>
      </Box>
    </>
  );
};
