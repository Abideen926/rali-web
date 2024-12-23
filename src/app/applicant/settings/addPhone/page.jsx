"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import Container from "@/components/common/Container";
import {
  ADD_NUMBER,
  ADD_NUMBER_VERIFICATIONS,
} from "@/constant/applicant/profile";
import AddNumberWrapper from "@/components/applicant/settings/addNumber/AddNumberWrapper";

const Page = () => {
  const [formData, setFormData] = useState();
  const handleNextStepData = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <AddNumberWrapper
          handleNextStepData={handleNextStepData}
          ADD_NUMBER_VERIFICATIONS={ADD_NUMBER_VERIFICATIONS}
          ADD_NUMBER={ADD_NUMBER}
        />
      </Container>
    </Box>
  );
};

export default Page;
