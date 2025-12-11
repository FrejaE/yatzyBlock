import { useNavigate } from "react-router-dom";
import { HeroButton } from "../components/Buttons";
import { Box, IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

export const AddPlayersPage = () => {
  const [players, setPlayers] = useState(["Spelare 1", "Spelare 2"]);
  const navigate = useNavigate();

  const addPlayer = () => {
    setPlayers([...players, `Spelare ${players.length + 1}`]);
  };
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
      {players.map((label, index) => (
        <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "6px", color: "#4A4A4A" }}>
            {label}
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
      ))}

      <IconButton
        onClick={addPlayer}
        sx={{ padding: 0 }}
        aria-label="plus icon"
      >
        <AddCircleIcon
          sx={{ color: "#E45343", width: "65px", height: "65px" }}
        />
      </IconButton>
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
