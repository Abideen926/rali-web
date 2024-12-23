"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  FormHelperText,
} from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
import CloseIcon from "@mui/icons-material/Close";
import { VisibilityOff } from "@mui/icons-material";
import CircleIcon from "@mui/icons-material/Circle";

import { useWizard } from "react-use-wizard";
import CustomButton from "@/components/button/CustomButton";
import { useRouter } from "next/navigation";
import FormTitle from "@/components/applicant/dashboard/FormTitle";

const SearchAbleOnRalli = ({ data }) => {
  const { previousStep } = useWizard();

  const router = useRouter();
  const handleNext = () => {
    router.push("/applicant/careerAreas/apply");
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
          justifyContent: "space-between",
          alignItems: "center",
          py: "15px",
          mb: "10px",
        }}
      >
        <Button onClick={handleBack} sx={{ minWidth: 0, p: 0 }}>
          <ArrowCircleLeftRoundedIcon sx={{ color: "#00305B", fontSize: 32 }} />
        </Button>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: "10px", sm: "15px", md: "16px" },
            fontWeight: 300,
            lineHeight: { xs: "12px", sm: "20px", md: "25px", lg: "33px" },
            color: "#111111",
            pb: 2,
          }}
        >
          {data.pages}
        </Typography>
        <FormTitle label={data?.title} />
      </Box>
      {data?.boxData?.map((item) => (
        <>
          <Box
            sx={{
              border: "0.6px solid #0000004D",
              borderRadius: "10px",
              p: 2,
              my: 2,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <VisibilityOff />
                <Typography sx={{ px: 3 }}>{item?.title}</Typography>
              </Box>
              <PanoramaFishEyeIcon />
            </Box>
            <Box>
              <Typography>{item?.para}</Typography>
            </Box>
          </Box>
        </>
      ))}
      <Box
        sx={{
          pb: 3,
        }}
      >
        <CustomButton label="Save and Continue" onClick={handleNext} />
      </Box>
    </Box>
  );
};

export default SearchAbleOnRalli;
