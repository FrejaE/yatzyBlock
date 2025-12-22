import { Box } from "@mui/material";
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
            width: {
              xs: "260px",
              sm: "320px",
              md: "420px",
            },
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
