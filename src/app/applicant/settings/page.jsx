'use client'
import React from "react";
import { Box } from "@mui/material";
import { PROFILE_SETTINGS } from "@/constant/applicant/profile";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import ProfileSettings from "@/components/applicant/settings/ProfileSettings";
import Container from "@/components/common/Container";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import Navbar from "@/components/applicant/dashboard/Navbar";

const page = () => {
  return (
    <Box>
      <Navbar data={NAVBAR_DATA}/>
      <Container>
        <BackButtonWithTitle label='Settings' />
        <ProfileSettings data={PROFILE_SETTINGS}/>
      </Container>
    </Box>
  );
};
export default page;
