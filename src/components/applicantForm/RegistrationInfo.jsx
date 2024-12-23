"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useWizard } from "react-use-wizard";

import Image from "next/image";
import CustomButton from "../button/CustomButton";
import FormTitle from "../applicant/dashboard/FormTitle";

const RegistrationInfo = ({ data, onSubmit }) => {
  const { previousStep } = useWizard();
  const [form, setForm] = useState({});
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(form, "form");
    onSubmit(form);
  };

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#FFFFFF" }}>
      <Box
        sx={{
          width: { xs: "100%", sm: "50%" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: "15px",
          mb: "20px",
        }}
      >
        <Button onClick={() => previousStep()} sx={{ minWidth: 0, p: 0 }}>
          <ArrowCircleLeftRoundedIcon sx={{ color: "#00305B", fontSize: 32 }} />
        </Button>
        <Image src={data?.logo} width={70} height={40} alt="logo" />
      </Box>
      <FormTitle label="Registration" />

      {data?.form?.map((item) => (
        <Box key={item.name} sx={{ mb: "20px" }}>
          <Typography
            sx={{
              fontSize: { xs: "12px", md: "14px", lg: "16px" },
              fontWeight: 600,
              lineHeight: "18px",
              color: "#222222",
              mb: "10px",
            }}
          >
            {item?.name}
          </Typography>
          <TextField
            type={
              item.name.toLowerCase().includes("password") &&
              !showPassword[item.name.toLowerCase()]
                ? "password"
                : "text"
            }
            fullWidth
            variant="outlined"
            placeholder={item?.placeHolder}
            onChange={(e) => handleChange(item.name, e.target.value)}
            InputProps={{
              endAdornment: item.name.toLowerCase().includes("password") && (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        [item.name.toLowerCase()]:
                          !prev[item.name.toLowerCase()],
                      }))
                    }
                    edge="end"
                  >
                    {showPassword[item.name.toLowerCase()] ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      ))}

      <CustomButton label="Submit" onClick={handleSubmit} />
    </Box>
  );
};

export default RegistrationInfo;
