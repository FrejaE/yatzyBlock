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
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Resultat</DialogTitle>

      <DialogContent>
        {sorted.map((p, index) => (
          <Box
            key={p.name}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
              fontWeight: index === 0 ? "bold" : "normal",
            }}
          >
            <Typography>{p.name}</Typography>
            <Typography>{p.totalScore} poäng</Typography>
          </Box>
        ))}
      </DialogContent>

      <DialogActions>
        <Button onClick={onGoHome}>Till startsidan</Button>
      </DialogActions>
    </Dialog>
  );
};
