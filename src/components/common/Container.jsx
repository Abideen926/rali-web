import React from "react";
import { Box } from "@mui/material";

const Container = ({ children }) => {
  return (
    <Box
      sx={{
        px: "25px",
        maxWidth: "1260px",
        margin: "25px auto",
      }}
    >
      {children}
    </Box>
  );
};

export default Container;
