import { useNavigate } from "react-router-dom";
import { HeroButton } from "../components/Buttons";

export const AddPlayersPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroButton variant="contained" onClick={() => navigate("/game")}>
        {" "}
        Börja spela
      </HeroButton>
    </>
  );
};
