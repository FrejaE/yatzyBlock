import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import "../styles/styles.css";
import { AppButton } from "../components/Buttons";
import { FeedbackDialog } from "../components/FeedBackDialog";

type PlayerInput = {
  id: string;
  name: string;
};
type DialogState = {
  open: boolean;
  title: string;
  message: string;
  type?: "error" | "warning" | "info";
};

export const AddPlayersPage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [players, setPlayers] = useState<PlayerInput[]>([
    {
      id: crypto.randomUUID(),
      name: user?.username ?? "",
    },
    {
      id: crypto.randomUUID(),
      name: "",
    },
  ]);
  const [dialog, setDialog] = useState<DialogState>({
    open: false,
    title: "",
    message: "",
    type: "info",
  });

  const addPlayer = () => {
    if (players.length >= 6) return;

    setPlayers([...players, { id: crypto.randomUUID(), name: "" }]);
  };

  const handleStart = () => {
    // TODO : Bättre variabelnamn????
    const emptyFields = players.filter((p) => p.name.trim() !== "");
    if (emptyFields.length < 2) {
      setDialog({
        open: true,
        title: "Fler spelare",
        message: "Minst två spelare för att starta spelet",
        type: "warning",
      });
      return;
    }
    navigate("/game", { state: { players: emptyFields } });
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
      {players.map((player, index) => (
        <Box key={index} sx={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "6px", color: "#4A4A4A" }}>
            Spelare {index + 1}
          </label>

          <input
            className="playerInput"
            type="text"
            value={player.name}
            readOnly={index === 0 && !!user}
            // TODO : fundera på om user ska ha readonly eller inte?? man kanske vill ändra
            onChange={(e) => {
              const clone = [...players];
              clone[index] = { ...clone[index], name: e.target.value };
              setPlayers(clone);
            }}
          />
        </Box>
      ))}

      <IconButton
        onClick={addPlayer}
        sx={{ padding: 0 }}
        aria-label="plus icon"
      >
        <AddCircleIcon sx={{ color: "#E45343", width: 72, height: 72 }} />
      </IconButton>
      <Typography variant="h6" gutterBottom color="#4A4A4A">
        Lägg till fler spelare
      </Typography>

      <AppButton
        variant="contained"
        color="error"
        onClick={handleStart}
        // fullWidth
        sx={{
          width: "240px",
        }}
        aria-label="Tryck för att starta spel"
      >
        Starta spelet
      </AppButton>
      <FeedbackDialog
        open={dialog.open}
        title={dialog.title}
        message={dialog.message}
        type={dialog.type}
        onClose={() => setDialog((prev) => ({ ...prev, open: false }))}
      />
    </Box>
  );
};
