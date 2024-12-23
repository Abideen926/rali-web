"use client";
import React from "react";
import { Box } from "@mui/material";

import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";
import { USERS } from "@/constant/applicant/talentNetwork";

import Container from "@/components/common/Container";
import PopularCompanies from "@/components/applicant/dashboard/PopularCompanies";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";

const page = () => {
  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
        <PopularCompanies data={USERS}/>
      </Container>
    </Box>
  );
};

export default page;
