import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type PodiumPlayer = {
  name: string;
  totalScore: number;
};

export const WinnersPodium = () => {
  const [podium, setPodium] = useState<PodiumPlayer[]>([]);
  const positions = [
    { rank: 2, height: 120, color: "#C0C0C0" },
    { rank: 1, height: 160, color: "#FFD700" },
    { rank: 3, height: 100, color: "#CD7F32" },
  ];
  useEffect(() => {
    const fetchPodium = async () => {
      const res = await fetch("http://localhost:1337/highscore");
      const data = await res.json();

      const sorted = data
        .sort((a: PodiumPlayer, b: PodiumPlayer) => b.totalScore - a.totalScore)
        .slice(0, 3);

      setPodium(sorted);
    };
    fetchPodium();
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        mt: 4,
      }}
    >
      {positions.map(({ rank, height, color }) => {
        const player = podium[rank - 1];
        if (!player) return null;
        return (
          <Box
            key={rank}
            sx={{
              width: rank === 1 ? 100 : 90,
              height,
              backgroundColor: color,
              borderRadius: 2,
              textAlign: "center",
              p: 1,
              boxShadow: 3,
              //   mx: 1,
            }}
          >
            <Typography variant="h6">{player.totalScore} p</Typography>
            <Typography variant="body2"> {player.name} </Typography>
          </Box>
        );
      })}
    </Box>
  );
};
