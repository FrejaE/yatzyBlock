import { TableCell, TextField } from "@mui/material";

type ScoreCellProps = {
  category: string;
  value: string | number;
  onChange: (value: string) => void;
  error?: boolean;
  playerName: string;
};

export const ScoreCell = ({
  value,
  onChange,
  error,
  category,
  playerName,
}: ScoreCellProps) => {
  return (
    <TableCell sx={{ padding: "4px " }}>
      <TextField
        aria-label={`Poäng för ${category}, spelare ${playerName}`}
        type="text"
        size="small"
        variant="standard"
        error={error}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        helperText={error ? "För högt värde" : undefined}
        InputProps={{
          disableUnderline: true,
          sx: {
            width: "40px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            background: "#fff",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            inputMode: "numeric",
            pattern: "[0-9]*",

            "& input": {
              padding: 0,
              height: "100%",
              textAlign: "center",
              fontSize: "0.9rem",
            },
          },
        }}
      />
    </TableCell>
  );
};
