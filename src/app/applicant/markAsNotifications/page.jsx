'use client'
import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import MarkAsNotifications from "@/components/applicant/markNotification/MarkAsNotifications";
import Container from "@/components/common/Container";
import { MARK_AS_NOTIFICATIONS } from "@/constant/applicant/markAsNotifications";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const handleBack = () => {
      router.back();
    };
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label='Notifications' onClick={handleBack} />
        <MarkAsNotifications data={MARK_AS_NOTIFICATIONS}/>
      </Container>
    </Box>
  );
};

export default Page;
