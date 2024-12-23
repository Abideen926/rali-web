'use client'
import React from "react";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import { CHANGE_EMAIL } from "@/constant/applicant/profile";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import Navbar from "@/components/applicant/dashboard/Navbar";
import ChangeEmail from "@/components/applicant/settings/changeEmail/changeEmail";
import Container from "@/components/common/Container";

const Page = () => {
  const router = useRouter();
    const handleBack = () => {
      router.back();
    };
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <Box sx={{pt:3}}>
          <BackButtonWithTitle label="changing email address" onClick={handleBack}/>
        </Box>
        <ChangeEmail data={CHANGE_EMAIL} />
      </Container>
    </Box>
  );
};

export default Page;
