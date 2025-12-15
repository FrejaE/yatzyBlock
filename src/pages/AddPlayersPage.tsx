import { useNavigate } from "react-router-dom";
import { HeroButton } from "../components/Buttons";
import { Box, IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

export const AddPlayersPage = () => {
  const [players, setPlayers] = useState(["Spelare 1", "Spelare 2"]);
  const { user } = useUser();
  const [names, setNames] = useState([user?.username ?? "", ""]);

  const navigate = useNavigate();

  const addPlayer = () => {
    setPlayers([...players, `Spelare ${players.length + 1}`]);
    setNames([...names, ""]);
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
            value={names[index]}
            readOnly={index === 0 && !!user}
            // TODO : fundera på om user ska ha readonly eller inte?? man kanske vill ändra
            onChange={(e) => {
              const clone = [...names];
              clone[index] = e.target.value;
              setNames(clone);
            }}
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
        aria-label="Tryck för att starta spel"
      >
        {" "}
        Starta spelet
      </HeroButton>
    </Box>
  );
};
