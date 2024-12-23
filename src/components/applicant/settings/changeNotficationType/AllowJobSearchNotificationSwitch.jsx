import React from "react";
import { Box, Switch, Typography } from "@mui/material";

const AllowJobSearchNotificationSwitch = () => {
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "0px 0px 3px #00000040",
        border: "none",
        outline: "none",
        padding: "18px 20px",
        borderRadius: "10px",
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: "18px",
        color: "#222222",
        my: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "17px", md: "20px" },
              fontWeight: 600,
              lineHeight: "18px",
              color: "#00305B",
              textTransform: "capitalize",
            }}
          >
            allow job search notifications
          </Typography>
        </Box>
        <Switch
          {...label}
          defaultChecked
          sx={{
            color: "#FE4D82",
          }}
        />
      </Box>
    </Box>
  );
};

export default AllowJobSearchNotificationSwitch;
