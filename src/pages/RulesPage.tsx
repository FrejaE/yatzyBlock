import { Box, Typography } from "@mui/material";
import { rules } from "../components/rules/rulesContent";

export const RulesPage = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Välkommen till YatzyBlock!
      </Typography>

      <Typography sx={{ fontStyle: "italic", mb: 3 }}>
        {rules.common.slogan}
      </Typography>

      <Typography variant="h6">Starta spel</Typography>
      <Typography mb={2}>{rules.common.startGame}</Typography>

      <Typography variant="h6">Fylla i poäng</Typography>
      <Typography mb={3}>{rules.common.scoring}</Typography>

      <Typography variant="h6">{rules.maxiYatzy.title}</Typography>
      <Typography mb={2}>
        Spelas med {rules.maxiYatzy.dice} tärningar. Bonus ges vid{" "}
        {rules.maxiYatzy.bonusLimit} poäng ({rules.maxiYatzy.bonusPoints}{" "}
        poäng). Yatzy ger {rules.maxiYatzy.yatzyPoints} poäng.
      </Typography>

      <Typography variant="h6">{rules.yatzy.title}</Typography>
      <Typography>
        Spelas med {rules.yatzy.dice} tärningar. Bonus ges vid{" "}
        {rules.yatzy.bonusLimit} poäng ({rules.yatzy.bonusPoints} poäng). Yatzy
        ger {rules.yatzy.yatzyPoints} poäng.
      </Typography>
    </Box>
  );
};
