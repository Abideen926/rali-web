"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import {
    ADD_NUMBER,
    ADD_NUMBER_VERIFICATIONS,
} from "@/constant/applicant/profile";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";

import Container from "@/components/common/Container";
import AddNumberWrapper from "@/components/applicant/settings/addNumber/AddNumberWrapper";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";

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
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
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
