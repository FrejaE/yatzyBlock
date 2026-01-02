import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const AuthLayout = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          //   justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Header />
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Paper sx={{ maxWidth: 328, width: "100%", p: 3 }}>
            <Outlet />
          </Paper>
        </Box>
      </Box>
    </>
  );
};
