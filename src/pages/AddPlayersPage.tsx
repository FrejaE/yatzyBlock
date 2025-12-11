import { useNavigate } from "react-router-dom";
import { HeroButton } from "../components/Buttons";
import { Box, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export const AddPlayersPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // width: "240px",
        alignItems: "center",
        gap: 2,
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "6px", color: "#4A4A4A" }}>
          Spelare 1
        </label>
        <input
          type="text"
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "white",
            fontSize: "1rem",
            height: "28px",
            width: "226px",
          }}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "6px", color: "#4A4A4A" }}>
          Spelare 2
        </label>
        <input
          type="text"
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "white",
            fontSize: "1rem",
            height: "28px",
            width: "226px",
          }}
        />
      </Box>
      <AddCircleIcon sx={{ color: "#E45343", width: "65px", height: "65px" }} />
      <Typography variant="h6" gutterBottom color="#4A4A4A">
        Lägg till fler spelare
      </Typography>

      <HeroButton
        variant="contained"
        onClick={() => navigate("/game")}
        fullWidth
        sx={{
          width: "240px",
        }}
      >
        {" "}
        Starta spelet
      </HeroButton>
    </Box>
  );
};
