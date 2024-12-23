"use client";
import React from "react";
import { Box } from "@mui/material";

import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";

import { useRouter } from "next/navigation";

import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import Container from "@/components/common/Container";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import ChangePassword from "@/components/applicant/profile/ChangePassword";

const Page = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
        <Box sx={{ pt: 3 }}>
          <BackButtonWithTitle
            label="Change Password"
            onClick={handleBack}
          />
        </Box>
        <ChangePassword />
      </Container>
    </Box>
  );
};

export default Page;
