import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HeroButton } from "../components/Buttons";
import { WinnersPodium } from "../components/WinnersPodium";

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
        <HeroButton
          variant="contained"
          onClick={() => navigate("/add-players")}
          sx={{ width: "200px", margin: "auto" }}
        >
          {" "}
          Börja nytt spel{" "}
        </HeroButton>
        <HeroButton
          variant="contained"
          onClick={() => navigate("/rules")}
          sx={{ width: "200px", margin: "auto" }}
        >
          Spelregler
        </HeroButton>
        <HeroButton variant="contained" sx={{ width: "200px", margin: "auto" }}>
          {" "}
          Logga ut{" "}
        </HeroButton>
        <WinnersPodium />
      </Box>
    </>
  );
};
