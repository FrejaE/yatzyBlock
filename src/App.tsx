import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import { UserProvider } from "./context/UserContext";
import { theme } from "./theme/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect } from "react";
function App() {
  // useeffect endast eftersom servern stängs ner när testarna kör
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        // const res = await fetch("http://localhost:1337/ping");
        const res = await fetch("https://yatzyblock.onrender.com/ping");
        if (!res.ok) throw new Error("Ping misslyckades");
        console.log("Servern lever!");
      } catch (error) {
        console.warn("Servern svarade inte", error);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

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
