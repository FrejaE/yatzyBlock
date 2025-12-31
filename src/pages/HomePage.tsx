import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { WinnersPodium } from "../components/WinnersPodium";
import { AppButton } from "../components/Buttons";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          margin: "auto",
          //   width: "200px",
          flex: 1,
        }}
      >
        <AppButton
          variant="contained"
          color="primary"
          onClick={() => navigate("/add-players")}
          sx={{ width: "200px", margin: "auto" }}
        >
          {" "}
          Börja nytt spel{" "}
        </AppButton>
        <AppButton
          variant="contained"
          color="secondary"
          onClick={() => navigate("/rules")}
          sx={{ width: "200px", margin: "auto" }}
        >
          Spelregler
        </AppButton>
        <AppButton
          variant="contained"
          color="error"
          sx={{ width: "200px", margin: "auto" }}
        >
          {" "}
          Logga ut{" "}
        </AppButton>
        <WinnersPodium />
      </Box>
    </>
  );
};
