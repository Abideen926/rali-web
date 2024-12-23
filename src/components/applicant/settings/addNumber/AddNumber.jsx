"use client";
import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import CustomButton from "@/components/button/CustomButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BackButtonWithTitle from "../../dashboard/BackButtonWithTitle";
import { useWizard } from "react-use-wizard";
import { useRouter } from "next/navigation";
const AddNumber = ({ data, onNext }) => {
  const { nextStep, previousStep } = useWizard();
  const [showPassword, setShowPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    newEmail: "",
    currentPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleNext = () => {
    // onNext(form);
    nextStep();
  };
  const router = useRouter();
  const handleBack = () => {
    previousStep();
    router.back();

  };


  return (
    <Box>
      <BackButtonWithTitle
        label="add and verify your phone number"
        onClick={handleBack}
      />
      {data?.map((item) => (
        <Box key={item.name} sx={{ position: "relative", mb: 2 }}>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "18px",
              fontWeight: 500,
              pb: { xs: "10px", md: "15px" },
              textTransform: "capitalize",
            }}
          >
            {item?.label}
          </Typography>
          <Box
            component="input"
            type={
              item.name === "currentPassword" && !showPassword
                ? "password"
                : "text"
            }
            name={item.name}
            value={formValues[item.name]}
            onChange={handleChange}
            placeholder={item.placeholder}
            sx={{
              px: "18px",
              py: "22px",
              borderRadius: "10px",
              boxShadow: "0px 0px 3px #00000040",
              width: "100%",
              border: "none",
            }}
          />
          {item.name === "currentPassword" && (
            <IconButton
              onClick={handleTogglePasswordVisibility}
              sx={{
                position: "absolute",
                right: "10px",
                top: "67%",
                transform: "translateY(-50%)",
                color: "#222222",
              }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          )}
        </Box>
      ))}
      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "26px",
          fontWeight: 500,
          color: "#111111",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book.
      </Typography>
      <Box sx={{ py: 2 }}>
        <CustomButton label="Next" bg="#00305B" onClick={handleNext} />
      </Box>
      <CustomButton label="Cancel" color="" />
    </Box>
  );
};

export default AddNumber;
