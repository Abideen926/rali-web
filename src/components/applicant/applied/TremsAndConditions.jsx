"use client";
import React from "react";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";

import { Box, Button, Typography } from "@mui/material";
import CustomButton from "@/components/button/CustomButton";
import CloseIcon from "@mui/icons-material/Close";
import { useWizard } from "react-use-wizard";

const TremsAndConditions = ({ data }) => {
  const { nextStep, previousStep } = useWizard();
  const handleAccept = () => {
    nextStep();
  };
  const handleBack = () => {
    previousStep();
  };
  return (
    <Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "100%" },
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          py: "15px",
          mb: "20px",
        }}
      >
        <Button onClick={handleBack} sx={{ minWidth: 0, p: 0 }}>
          <ArrowCircleLeftRoundedIcon sx={{ color: "#00305B", fontSize: 32 }} />
        </Button>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "21px", md: "30px" },
          fontWeight: 700,
          lineHeight: { xs: "25px", sm: "30px", md: "18px", lg: "20px" },
          color: "#222222",
          pb: "25px",
        }}
      >
        {data?.mainTitle}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "16px", md: "16px" },
          fontWeight: 500,
          lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "34px" },
          color: "#00305B",
        }}
      >
        Last updated: {data?.time}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
          fontWeight: 300,
          lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "34px" },
          color: "#111111",

          pb: 3,
        }}
      >
        {data?.para}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "18px", sm: "21px", md: "22px" },
          fontWeight: 600,
          lineHeight: { xs: "25px", sm: "30px", md: "25px", lg: "18px" },
          color: "#222222",
        }}
      >
        {data?.title}
      </Typography>
      {data?.items?.map((item, index) => (
        <Box key={index}>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "21px", md: "19px" },
              fontWeight: 700,
              lineHeight: { xs: "25px", sm: "30px", md: "25px", lg: "28.5px" },
              color: "#00305B",
              pt: 1,
            }}
          >
            {item?.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 300,
              lineHeight: { xs: "25px", sm: "30px", md: "25px", lg: "34px" },
              color: "#111111",
              pb: 2,
            }}
          >
            {item?.description}
          </Typography>
        </Box>
      ))}
      <CustomButton label={"Accept"} onClick={handleAccept} />
    </Box>
  );
};

export default TremsAndConditions;
