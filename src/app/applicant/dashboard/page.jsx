// app/page.js
"use client";
import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import DashboardTabs from "@/components/applicant/dashboard/DashboardTabs";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import Container from "@/components/common/Container";

const page = () => {
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Dashboard" />
        <DashboardTabs />
      </Container>
    </Box>
  );
};

export default page;
