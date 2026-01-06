import { TableCell, TextField } from "@mui/material";

type ScoreCellProps = {
  playerId: string;
  category: string;
  value: string | number;
  onChange: (value: string) => void;
  error?: boolean;
};

export const ScoreCell = ({ value, onChange, error }: ScoreCellProps) => {
  return (
    <TableCell sx={{ padding: "4px " }}>
      <TextField
        type="text"
        size="small"
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
        variant="standard"
        error={error}
        helperText={error ? "För högt värde" : undefined}
        InputProps={{
          disableUnderline: true,
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </TableCell>
  );
};
