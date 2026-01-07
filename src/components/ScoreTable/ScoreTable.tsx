import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import type { Player, Score } from "../../models/Player";
import { calcBonus, calculation } from "../../utils/calculation-logic";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { ResultModal, type ResultPlayer } from "../ResultModal";
import { validateScore } from "../../utils/socreRules";
import { ScoreCell } from "./ScoreCell";
import { AppButton } from "../Buttons";

const upperCategories = ["Ettor", "Tvåor", "Treor", "Fyror", "Femmor", "Sexor"];

export const ScoreTable = () => {
  const [scores, setScores] = useState<Score[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [results, setResults] = useState<ResultPlayer[]>([]);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const players = location.state?.players as Player[];
  const { user } = useUser();

  const variant = location.state?.variant ?? "maxiYatzy";

  const lowerCategories =
    variant === "maxiYatzy"
      ? [
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
        ]
      : [
          "Ett par",
          "Två par",
          "Triss",
          "Fyrtal",
          "Liten stege",
          "Stor stege",
          "Kåk",
          "Chans",
          "Yatzy",
        ];

  // om något går fel och man hamnar på scoretable som är tom
  useEffect(() => {
    if (!location.state?.players || !location.state?.variant) {
      navigate("/add-players");
    }
  }, [location.state, navigate]);

  if (!players) {
    return <Typography variant="h6">Omdirigerar...</Typography>;
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
    setLoading(true);
    try {
      const results = players.map((p) => ({
        name: p.name,
        totalScore: handleTotal(p.id),
      }));

      // await fetch("http://localhost:1337/games", {
      await fetch("https://yatzyblock.onrender.com/games", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          createdBy: user?.id,
          players: results,
        }),
      });
      setResults(results);
      setShowResult(true);
    } catch (error) {
      console.error("Fel vid sparande av spel", error);
    } finally {
      setLoading(false);
    }
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
            <TableCell sx={{ paddingLeft: "8px" }} component="th" scope="col">
              {" "}
              Spelare{" "}
            </TableCell>
            {players.map((p) => (
              <TableCell key={p.id} component="th" scope="col">
                {p.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        {/* övre sektionen */}
        <TableBody>
          {upperCategories.map((upperCat) => (
            <TableRow key={upperCat}>
              <TableCell
                sx={{
                  padding: "4px 8px",
                  verticalAlign: "middle",
                  lineHeight: 1.2,
                }}
                component="th"
                scope="row"
              >
                {upperCat}
              </TableCell>

              {players.map((p) => {
                const errorKey = `${p.id}-${upperCat}`;
                return (
                  <ScoreCell
                    key={p.id}
                    playerName={p.name}
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
              sx={{ padding: "4px 8px", borderTop: "2px solid #454545ff" }}
            >
              Total
            </TableCell>
            {players.map((p) => (
              <TableCell
                key={p.id}
                sx={{ padding: "2px", borderTop: "2px solid #454545ff" }}
              >
                <TextField
                  type="number"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                    sx: {
                      width: "40px",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      background: "#fff",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      "& input": {
                        padding: 0,
                        height: "100%",
                        textAlign: "center",
                        fontSize: "0.9rem",
                      },
                    },
                  }}
                  value={calculation(p.id, scores, upperCategories)}
                ></TextField>
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ padding: "4px 8px", borderBottom: "2px solid #454545ff" }}
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
                  variant="standard"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  InputProps={{
                    disableUnderline: true,
                    readOnly: true,
                    sx: {
                      width: "40px",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      background: "#fff",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      "& input": {
                        padding: 0,
                        height: "100%",
                        textAlign: "center",
                        fontSize: "0.9rem",
                      },
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
              <TableCell
                sx={{
                  padding: "4px 8px",
                  verticalAlign: "middle",
                  lineHeight: 1.2,
                }}
                component="th"
                scope="row"
              >
                {" "}
                {lowCat}{" "}
              </TableCell>

              {players.map((p) => {
                const errorKey = `${p.id}-${lowCat}`;
                return (
                  <ScoreCell
                    key={p.id}
                    playerName={p.name}
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
      <AppButton
        variant="contained"
        color="primary"
        onClick={handleFinishGame}
        sx={{
          display: "block",
          mx: "auto",
          mt: 2,
          width: "240px",
          mb: "40px",
        }}
      >
        {loading ? "Beräknar resultat..." : "Se resultat"}
      </AppButton>
      <ResultModal
        open={showResult}
        results={results}
        onClose={() => setShowResult(false)}
        onGoHome={() => navigate("/home")}
      />
    </>
  );
};
