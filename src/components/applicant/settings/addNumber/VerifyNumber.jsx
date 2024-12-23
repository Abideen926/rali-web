"use client";
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import BackButtonWithTitle from "../../dashboard/BackButtonWithTitle";
import { useWizard } from "react-use-wizard";

const VerifyNumber = ({ data }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { previousStep } = useWizard();

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Form Submitted:", form);

    setLoading(false);
  };
  const handleBack = () => {
    previousStep();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <BackButtonWithTitle
        label="verify your phone number"
        onClick={handleBack}
      />
      <Typography
        sx={{
          fontSize: "16px",
          lineHeight: "18px",
          color: "#00305B",
          textTransform: "capitalize",
          textAlign: "center",
          py: 2,
        }}
      >
        verification code sent to (111-222-22-33): enter the code you received
        below
      </Typography>
      <form onSubmit={handleSubmit}>
        {data?.form?.map((item) => (
          <Box key={item.name} sx={{ mb: "20px" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "18px",
                color: "#222222",
                mb: "10px",
                textTransform: "capitalize",
              }}
            >
              {item?.name}
            </Typography>
            <Box
              component="input"
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0px 0px 3px #00000040",
                border: "none",
                padding: "18px 20px",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "18px",
                color: "#222222",
              }}
              placeholder={item?.placeHolder}
              onChange={(e) => handleChange(item.name, e.target.value)}
              type="number"
            />
          </Box>
        ))}

        {error && (
          <Typography sx={{ color: "red", fontSize: "14px", mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            pb: 4,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "18px",
                color: "#00305B",
                cursor: "pointer",
              }}
            >
              Dont Receive Your Code?
            </Typography>
            <Button
              sx={{
                fontSize: "16px",
                lineHeight: "18px",
                textDecoration: "underline",
                color: "#00305B",
                cursor: "pointer",
              }}
              onClick={() => console.log("Resend Verification Code")}
            >
              Resend Code
            </Button>
          </Box>
          <Typography>send to a different phone number</Typography>
        </Box>

        <Button
          type="submit"
          sx={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#FE4D82",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "10px",
            ":hover": {
              backgroundColor: "#FE4D90",
            },
          }}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Box>
  );
};

export default VerifyNumber;
