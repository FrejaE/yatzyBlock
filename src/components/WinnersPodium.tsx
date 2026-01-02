import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";

type PodiumPlayer = {
  name: string;
  totalScore: number;
};

export const WinnersPodium = () => {
  const [podium, setPodium] = useState<PodiumPlayer[]>([]);
  const [loading, setLoading] = useState(false);
  const positions = [
    { rank: 2, height: 120, color: "#C0C0C0" },
    { rank: 1, height: 160, color: "#FFD700" },
    { rank: 3, height: 100, color: "#CD7F32" },
  ];
  useEffect(() => {
    const fetchPodium = async () => {
      setLoading(true);
      try {
        //   const res = await fetch("http://localhost:1337/highscore");
        const res = await fetch("https://yatzyblock.onrender.com/highscore");
        if (!res.ok) {
          throw new Error("Kunde inte hämta highscore");
        }
        const data = await res.json();

        const sorted = data
          .sort(
            (a: PodiumPlayer, b: PodiumPlayer) => b.totalScore - a.totalScore
          )
          .slice(0, 3);

        setPodium(sorted);
      } catch (error) {
        console.log("Fel vid hämtning av podium", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPodium();
  }, []);
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 200,
          width: "100%",
        }}
      >
        <Loader text="Hämtar topp tre scores.." />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        mt: 4,
        width: "100%",
        justifyContent: "center",
        position: "absolute",
        bottom: 40,
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
              borderRadius: 1,
              textAlign: "center",
              p: 1,
              boxShadow: 3,
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
