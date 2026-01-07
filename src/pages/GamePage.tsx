import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { ScoreTable } from "../components/ScoreTable/ScoreTable";
import { useState } from "react";
import { RulesVariantInfo } from "../components/rules/rulesVariantInfo";
import { useLocation } from "react-router-dom";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export const GamePage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const location = useLocation();

  const variant = location.state?.variant ?? "maxiYatzy";

  const title = variant === "maxiYatzy" ? "Maxi Yatzy" : "Yatzy";
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Typography variant="h6"> {title} </Typography>
        <IconButton
          aria-label="Visa spelregler"
          onClick={() => setShowInfo(true)}
        >
          <HelpCenterIcon color="error" />
        </IconButton>
      </Box>

      <Dialog open={showInfo} onClose={() => setShowInfo(false)}>
        <DialogTitle sx={{ color: "error.main" }}>Spelregler</DialogTitle>
        <DialogContent>
          <RulesVariantInfo variant={variant} />
        </DialogContent>
      </Dialog>

      <ScoreTable />
    </>
  );
};
