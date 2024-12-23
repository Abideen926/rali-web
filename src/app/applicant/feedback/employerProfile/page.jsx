
'use client'
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import Navbar from "@/components/applicant/dashboard/Navbar";
import Container from "@/components/common/Container";
import EmployerProfile from "@/components/employer/profile/EmployerProfile";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import { EMPLOYER_PROFILE } from "@/constant/employer/profile";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Employer Profile" onClick={handleBack} />
        <EmployerProfile data={EMPLOYER_PROFILE} />
      </Container>
    </Box>
  );
};

export default Page;
