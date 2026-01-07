import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { AppButton } from "./Buttons";

export type FeedbackDialogProps = {
  open: boolean;
  title: string;
  message: string;
  type?: "error" | "warning" | "info";
  onClose: () => void;
};

export const FeedbackDialog = ({
  open,
  title,
  message,
  type = "info",
  onClose,
}: FeedbackDialogProps) => {
  const theme = useTheme();
  const colors = {
    error: theme.palette.error.main,
    warning: theme.palette.secondary.main,
    info: theme.palette.primary.main,
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{ textAlign: "center", fontWeight: 700, color: colors[type] }}
      >
        {title}
      </DialogTitle>

      <DialogContent>
        <Typography sx={{ textAlign: "center", color: "text.primary" }}>
          {message}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center" }}>
        <AppButton variant="contained" onClick={onClose}>
          OK
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};
