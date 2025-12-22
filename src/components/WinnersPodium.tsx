import { Box, Typography } from "@mui/material";

export const WinnersPodium = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        mt: 4,
      }}
    >
      {/* andra plats */}
      <Box
        sx={{
          width: 90,
          height: 120,
          backgroundColor: "#C0C0C0",
          borderRadius: 2,
          textAlign: "center",
          p: 1,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6"> xxx p </Typography>
        <Typography variant="body2"> Anna </Typography>
      </Box>
      {/* första plats  */}
      <Box
        sx={{
          width: 100,
          height: 160,
          backgroundColor: "#FFD700",
          borderRadius: 2,
          textAlign: "center",
          p: 1,
          boxShadow: 3,
        }}
      >
        <Typography> xxx p </Typography>
        <Typography> Freja </Typography>
      </Box>
      {/* tredje plats */}
      <Box
        sx={{
          width: 90,
          height: 100,
          backgroundColor: "#CD7F32",
          borderRadius: 2,
          textAlign: "center",
          p: 1,
          boxShadow: 3,
        }}
      >
        <Typography> xxx p </Typography>
        <Typography> Emil </Typography>
      </Box>
    </Box>
  );
};
