import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { UserProvider } from "./context/UserContext";
import { theme } from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
