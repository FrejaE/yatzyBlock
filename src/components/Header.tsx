import { Box } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";

export const Header = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#79717A",
          padding: "12px",
          display: "flex",
          alignItems: "center",
          color: "white",
          fontSize: "1.25rem",
          margin: "0px",
          justifyContent: "center",
        }}
      >
        <CasinoIcon sx={{ paddingRight: "8px" }} />
        YatzyBlock
      </Box>
    </>
  );
};
