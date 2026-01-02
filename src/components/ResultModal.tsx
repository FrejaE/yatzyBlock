import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

export type ResultPlayer = {
  name: string;
  totalScore: number;
};

type ResultModalProps = {
  open: boolean;
  results: ResultPlayer[];
  onClose: () => void;
  onGoHome: () => void;
};

export const ResultModal = ({
  open,
  results,
  onClose,
  onGoHome,
}: ResultModalProps) => {
  const sorted = [...results].sort((a, b) => b.totalScore - a.totalScore);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          padding: 2,
          minWidth: 300,
          backgroundColor: "#FAF7F2",
        },
      }}
    >
      <DialogTitle
        sx={{ textAlign: "center", fontWeight: 700, color: "#E45343" }}
      >
        Resultat
      </DialogTitle>

      <DialogContent>
        {sorted.map((p, index) => (
          <Box
            key={p.name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
              p: 1,
              borderRadius: 1,
              backgroundColor: index === 0 ? "#FFD70033" : "#fff",
            }}
          >
            <Typography
              sx={{
                fontWeight: index === 0 ? 700 : 500,
                fontSize: index === 0 ? "1.1rem" : "1rem",
                color: "#4A4A4A",
              }}
            >
              {p.name}
            </Typography>
            <Typography
              sx={{
                fontWeight: index === 0 ? 700 : 500,
                fontSize: index === 0 ? "1.1rem" : "1rem",
                color: "#4A4A4A",
              }}
            >
              {p.totalScore} poäng
            </Typography>
          </Box>
        ))}
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", mt: 1 }}>
        <Button
          onClick={onGoHome}
          sx={{
            backgroundColor: "#F7C948",
            color: "#4A4A4A",
            padding: "8px 24px",
            borderRadius: 2,
          }}
        >
          Till startsidan
        </Button>
      </DialogActions>
    </Dialog>
  );
};
