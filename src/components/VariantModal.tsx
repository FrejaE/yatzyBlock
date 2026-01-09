import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { AppButton } from "./Buttons";

type GameVariant = "yatzy" | "maxiYatzy";

type VariantModalProps = {
  open: boolean;
  onSelect: (variant: GameVariant) => void;
  onClose: () => void;
};

export const VariantModal = ({
  open,
  onSelect,
  onClose,
}: VariantModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: 3,
          padding: 2,
          minWidth: 320,
          backgroundColor: "#FAF7F2",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: "#E45343",
          mb: 1,
        }}
      >
        Välj spelvariant
      </DialogTitle>

      <DialogContent>
        <Typography
          sx={{
            textAlign: "center",
            mb: 2,
            color: "text.secondary",
            fontSize: "0.95rem",
          }}
        >
          Välj om du vill spela klassisk Yatzy eller Maxi Yatzy.
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <DialogActions sx={{ justifyContent: "center", gap: 2 }}>
            <AppButton
              variant="contained"
              onClick={() => onSelect("maxiYatzy")}
            >
              Maxi Yatzy
            </AppButton>
            <AppButton
              variant="contained"
              color="secondary"
              onClick={() => onSelect("yatzy")}
            >
              Klassisk Yatzy
            </AppButton>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
