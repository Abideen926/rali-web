import React, { useState } from "react";
import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import CustomButton from "@/components/button/CustomButton";
import Image from "next/image";
import { useWizard } from "react-use-wizard";


const VerficationCode = ({ data }) => {
      const [form, setForm] = useState({});
  const [formValues, setFormValues] = useState({});
  const [isHuman, setIsHuman] = useState(false);
  const { nextStep, previousStep } = useWizard();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleNext = () => {
    // onNext(form);
    nextStep();
  };

  const handleCheckboxChange = (event) => {
    setIsHuman(event.target.checked);
  };

  return (
    <Box
      sx={{
        px: { md: "80px" },
        py: { md: 4 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Password Recovery
        </Typography>
        <Typography color="textSecondary" mb={3}>
          Enter verification code
        </Typography>
      </Box>
      <Box>
        {data?.map((item) => (
          <Box key={item.name} sx={{ position: "relative", mb: 2 }}>
            <Box
              component="input"
              type="email"
              name={item.name}
              value={formValues[item.name] || ""}
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
          </Box>
        ))}
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "18px",
            textDecoration: "underline",
            color: "#00305B",
            cursor: "pointer",
          }}
          // onClick={handleResendCode}
        >
          Resend Code
        </Typography>
        <Box sx={{ py: 2 }}>
          <CustomButton label="Continue" disabled={!isHuman} onClick={handleNext}/>
        </Box>
      </Box>
    </Box>
  );
};

export default VerficationCode;
