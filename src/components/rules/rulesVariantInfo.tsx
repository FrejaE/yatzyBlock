import { Box, Typography } from "@mui/material";
import { rules } from "./rulesContent";

type GameVariant = "yatzy" | "maxiYatzy";

type RulesVariantInfoProps = {
  variant: GameVariant;
};

export const RulesVariantInfo = ({ variant }: RulesVariantInfoProps) => {
  const data = rules[variant];
  const commonRules = rules.common;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
      <Typography variant="h6" color="primary.main">
        {data.title}
      </Typography>

      <Typography variant="body2"> {commonRules.scoring} </Typography>

      <Typography variant="body2">
        Antal tärningar: <strong>{data.dice}</strong>
      </Typography>

      <Typography variant="body2">
        Bonusgräns: <strong>{data.bonusLimit} poäng</strong>
      </Typography>

      <Typography variant="body2">
        Bonus: <strong>{data.bonusPoints} poäng</strong>
      </Typography>

      <Typography variant="body2">
        Yatzy: <strong>{data.yatzyPoints} poäng</strong>
      </Typography>
    </Box>
  );
};
