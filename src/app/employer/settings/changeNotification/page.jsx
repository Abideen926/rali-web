"use client";
import React from "react";
import { Box } from "@mui/material";

import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";
import { useRouter } from "next/navigation";

import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import Container from "@/components/common/Container";
import AllowJobSearchNotificationSwitch from "@/components/applicant/settings/changeNotficationType/AllowJobSearchNotificationSwitch";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";

const Page = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Notification" onClick={handleBack} />
        <AllowJobSearchNotificationSwitch />
      </Container>
    </Box>
  );
};
export default Page;
