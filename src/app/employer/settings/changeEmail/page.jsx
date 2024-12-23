"use client";
import React from "react";
import { Box } from "@mui/material";

import { CHANGE_EMAIL } from "@/constant/applicant/profile";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";

import { useRouter } from "next/navigation";

import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import ChangeEmail from "@/components/applicant/settings/changeEmail/changeEmail";
import Container from "@/components/common/Container";
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
        <Box sx={{ pt: 3 }}>
          <BackButtonWithTitle
            label="changing email address"
            onClick={handleBack}
          />
        </Box>
        <ChangeEmail data={CHANGE_EMAIL} />
      </Container>
    </Box>
  );
};

export default Page;
