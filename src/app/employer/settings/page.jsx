"use client";
import React from "react";
import { Box } from "@mui/material";
import { EMPLOYER_PROFILE_SETTINGS } from "@/constant/employer/profile";
import ProfileSettings from "@/components/applicant/settings/ProfileSettings";
import Container from "@/components/common/Container";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";

const page = () => {
  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Settings" />
        <ProfileSettings data={EMPLOYER_PROFILE_SETTINGS} />
      </Container>
    </Box>
  );
};
export default page;
