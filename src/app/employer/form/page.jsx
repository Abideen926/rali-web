"use client";
import React from "react";

import { Box } from "@mui/material";

import RegistrationContainer from "@/components/employer/registrationForm/RegistrationContainer";
import Container from "@/components/common/Container";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";

const page = () => {
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <RegistrationContainer />
      </Container>
    </Box>
  );
};

export default page;
