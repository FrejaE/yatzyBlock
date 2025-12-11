import { Box, IconButton, Typography } from "@mui/material";
import CasinoRoundedIcon from "@mui/icons-material/Casino";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
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
        {location.pathname !== "/" && (
          <IconButton onClick={() => navigate(-1)} aria-label="Gå tillbaka">
            <ArrowBackIcon />
          </IconButton>
        )}
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
