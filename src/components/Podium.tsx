import { Box, Typography } from "@mui/material";

export const Podium = () => {
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
      <Box>
        <Typography> xxx p </Typography>
        <Typography> Anna </Typography>
      </Box>
      {/* första plats  */}
      <Box>
        <Typography> xxx p </Typography>
        <Typography> Freja </Typography>
      </Box>
      {/* tredje plats */}
      <Box>
        <Typography> xxx p </Typography>
        <Typography> Emil </Typography>
      </Box>
    </Box>
  );
};
