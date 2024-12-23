import React, { useState } from "react";
import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import CustomButton from "@/components/button/CustomButton";
import Image from "next/image";
import { useWizard } from "react-use-wizard";

const PasswordRecovery = ({ data }) => {
  const [formValues, setFormValues] = useState({});
  const [isHuman, setIsHuman] = useState(false);
  const { nextStep, previousStep } = useWizard();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setIsHuman(event.target.checked);
  };

  const handleNext = () => {
    // onNext(form);
    nextStep();
  };

  return (
    <Box
      sx={{
        px:{md:'80px'},
        py:{md:4}
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
        Please enter your email to reset your password.
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
        <Box
          sx={{
            borderRadius: "10px",
            boxShadow: "0px 0px 3px #00000040",
            width: "50%",
            border: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 1,
            mb: 2,
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={isHuman}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label="I am not a robot"
          />
          <Image
            src={"/assets/images/captcha.png"}
            width={30}
            height={30}
            alt="captcha"
          />
        </Box>
        <Box sx={{ py: 2 }}>
          <CustomButton label="Continue"  disabled={!isHuman} onClick={handleNext}/>
        </Box>
      </Box>
    </Box>
  );
};

export default PasswordRecovery;
