import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HeroButton } from "../components/Buttons";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          justifyContent: "center",
          width: "200px",
        }}
      >
        <HeroButton
          variant="contained"
          onClick={() => navigate("/add-players")}
          fullWidth
        >
          {" "}
          Börja nytt spel{" "}
        </HeroButton>
        <HeroButton
          variant="contained"
          onClick={() => navigate("/rules")}
          fullWidth
        >
          Spelregler
        </HeroButton>
      </Box>
      {/* <WinnersPodium /> komponent vara här  */}
    </>
  );
};
