import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type PasswordFieldProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  autoComplete?: string;
  fullWidth?: boolean;
};

export const PasswordField = ({
  label = "Lösenord",
  value,
  onChange,
  autoComplete,
  fullWidth = true,
}: PasswordFieldProps) => {
  const [show, setShow] = useState(false);

  return (
    <FormControl variant="outlined" fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShow((s) => !s)}
              edge="end"
              aria-label={show ? "Dölj lösenord" : "Visa lösenord"}
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
};
