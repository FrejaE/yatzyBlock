import { Box, IconButton, Typography } from "@mui/material";
import CasinoRoundedIcon from "@mui/icons-material/Casino";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const hideBAckButtonRoutes = ["/", "/login"];
  const showBackButton = !hideBAckButtonRoutes.includes(location.pathname);
  return (
    <>
      <Box
        sx={{
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            marginBottom: "8px",
          }}
        >
          {showBackButton && (
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
        </Box>
        <Typography variant="h1" gutterBottom>
          YatzyBlock
        </Typography>
      </Box>
    </>
  );
};
