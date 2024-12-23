'use client'
import React from "react";
import { Box } from "@mui/material";

import { NAVBAR_DATA } from "@/constant/applicant/navbar";

import Navbar from "@/components/applicant/dashboard/Navbar";
import Container from "@/components/common/Container";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import AddReviews from "@/components/common/AddReview/AddReviews";
import { useRouter } from "next/navigation";
import { ADD_A_REVIEWS } from "@/constant/employer/profile";

const Page = () => {
    const router = useRouter();
    const handleBack = () => {
      router.back(); 
    };
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Add A Reviews" onClick={handleBack} />
        <AddReviews data={ADD_A_REVIEWS}/>
      </Container>
    </Box>
  );
};

export default Page;
