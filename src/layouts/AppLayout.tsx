import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const AppLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#A68F97",
      }}
    >
      <Header />

      <Box>
        <Outlet />
      </Box>

      <footer>Made by me, Freja Edberg</footer>
    </Box>
  );
};
