import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import type { Player, Score } from "../../models/Player";
import { calcBonus, calculation } from "../../utils/calculation-logic";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { ResultModal, type ResultPlayer } from "../ResultModal";
import { validateScore } from "../../utils/socreRules";
import { ScoreCell } from "./ScoreCell";

const upperCategories = ["Ettor", "Tvåor", "Treor", "Fyror", "Femmor", "Sexor"];
const lowerCategories = [
  "Ett par",
  "Två par",
  "Tre par",
  "Triss",
  "Fyrtal",
  "Femtal",
  "Liten stege",
  "Stor stege",
  "Full stege",
  "Kåk",
  "Hus",
  "Torn",
  "Chans",
  "Yatzy",
];

export const ScoreTable = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<ResultPlayer[]>([]);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  const location = useLocation();
  const players = location.state?.players as Player[];
  const { user } = useUser();

  // om något går fel och man hamnar på scoretable som är tom
  useEffect(() => {
    if (!players || players.length === 0) {
      navigate("/add-players");
    }
  }, [players, navigate]);

  if (!players) {
    return <div>Omdirigerar...</div>;
  }
  useEffect(() => {
    console.log("SCORES", scores);
  }, [scores]);

  const handleChange = (
    rawValue: string,
    category: string,
    playerId: string
  ) => {
    const key = `${playerId}-${category}`;

    if (rawValue === "") {
      setScores((prev) =>
        prev.filter(
          (s) => !(s.playerId === playerId && s.category === category)
        )
      );
      setErrors((prev) => ({ ...prev, [key]: false }));
      return;
    }
    const points = Number(rawValue);
    if (Number.isNaN(points)) return;
    // validerar scorerules. fel värden sparas inte
    const isValid = validateScore(category, points);
    setErrors((prev) => ({ ...prev, [key]: !isValid }));
    if (!isValid) return;

    const scratched = points === 0;

    setScores((prev) => {
      const index = prev.findIndex(
        (s) => s.playerId === playerId && s.category === category
      );

      if (index !== -1) {
        const clone = [...prev];
        clone[index] = {
          ...clone[index],
          points,
          scratched,
        };
        return clone;
      }

      return [
        ...prev,
        {
          playerId,
          category,
          points,
          scratched,
        },
      ];
    });
  };

  const handleValue = (playerId: string, category: string) => {
    const score = scores.find(
      (score) => score.playerId === playerId && score.category === category
    );

    if (!score) return "";
    if (score.scratched) {
      return "/";
    }

    return score.points === 0 ? "" : score.points;
  };

  const handleBonus = (playerId: string, categories: string[]) => {
    const total = calculation(playerId, scores, categories);
    const bonus = calcBonus(total);
    return bonus;
  };

  const handleTotal = (playerId: string) => {
    const upperTotal = calculation(playerId, scores, upperCategories);
    const bonus = calcBonus(upperTotal);
    const lowerTotal = calculation(playerId, scores, lowerCategories);

    const totalSum = upperTotal + bonus + lowerTotal;
    return totalSum;
  };

  const handleFinishGame = async () => {
    const results = players.map((p) => ({
      name: p.name,
      totalScore: handleTotal(p.id),
    }));
    console.log("RESULTAT:", results);

    await fetch("http://localhost:1337/games", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        createdBy: user?.id,
        players: results,
      }),
    });
    setResults(results);
    setShowResult(true);
  };

  return (
    <>
      <Table
        stickyHeader
        aria-label="sticky table"
        sx={{ backgroundColor: "white" }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: "4px" }}> Spelare </TableCell>
            {players.map((p) => (
              <TableCell key={p.id}>{p.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* övre sektionen */}
        <TableBody>
          {upperCategories.map((upperCat) => (
            <TableRow key={upperCat}>
              <TableCell sx={{ padding: "4px" }}>{upperCat}</TableCell>

              {players.map((p) => {
                const errorKey = `${p.id}-${upperCat}`;
                return (
                  <ScoreCell
                    key={p.id}
                    playerId={p.id}
                    category={upperCat}
                    value={handleValue(p.id, upperCat)}
                    error={errors[errorKey]}
                    onChange={(value) => handleChange(value, upperCat, p.id)}
                  />
                );
              })}
            </TableRow>
          ))}
        </TableBody>

        {/* bonus och summa */}
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ padding: "4px", borderTop: "2px solid #454545ff" }}
            >
              Total
            </TableCell>
            {players.map((p) => (
              <TableCell
                key={p.id}
                sx={{ padding: "4px", borderTop: "2px solid #454545ff" }}
              >
                <TextField
                  type="number"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                    sx: {
                      padding: 0,
                      width: "40px",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      background: "#fff",
                      fontSize: "0.9rem",
                    },
                  }}
                  value={calculation(p.id, scores, upperCategories)}
                ></TextField>
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ padding: "4px", borderBottom: "2px solid #454545ff" }}
            >
              Bonus
            </TableCell>
            {players.map((p) => (
              <TableCell
                key={p.id}
                sx={{ padding: "4px", borderBottom: "2px solid #454545ff" }}
              >
                <TextField
                  type="text"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                    sx: {
                      padding: 0,
                      width: "40px",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      background: "#fff",
                      fontSize: "0.9rem",
                    },
                  }}
                  value={handleBonus(p.id, upperCategories)}
                ></TextField>
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
        {/* nedre sektionen */}
        <TableBody>
          {lowerCategories.map((lowCat) => (
            <TableRow key={lowCat}>
              <TableCell sx={{ padding: "4px" }}> {lowCat} </TableCell>

              {players.map((p) => {
                const errorKey = `${p.id}-${lowCat}`;
                return (
                  <ScoreCell
                    key={p.id}
                    playerId={p.id}
                    category={lowCat}
                    value={handleValue(p.id, lowCat)}
                    error={errors[errorKey]}
                    onChange={(value) => handleChange(value, lowCat, p.id)}
                  />
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFinishGame}
        sx={{ mt: 2 }}
      >
        {" "}
        Se resultat{" "}
      </Button>
      <ResultModal
        open={showResult}
        results={results}
        onClose={() => setShowResult(false)}
        onGoHome={() => navigate("/")}
      />
    </>
  );
};
