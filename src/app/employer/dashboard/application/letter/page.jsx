'use client'
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import CounterLetter from "@/components/applicant/dashboard/CounterLetter";
import InterviewInvite from "@/components/applicant/dashboard/InterviewInvite";
import OfferLetter from "@/components/applicant/dashboard/OfferLetter";
import Container from "@/components/common/Container";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
    const offerType = useSelector((state)=> state?.applicantLetterType?.stageType);
    console.log(offerType,'HELLO TYPW')

    const renderLetter = () => {
      if (offerType === "OfferLetter") return <OfferLetter />;
      if (offerType === "CounterOfferLetter") return <CounterLetter />;
      if (offerType === "Interview") return <InterviewInvite />;
      return null;
    };
    const router = useRouter();
  
    const handleBack = () => {
      router.back(); 
    };
  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
      <BackButtonWithTitle  onClick={handleBack}/>
      {renderLetter()}
      </Container>
    </Box>
  );
};

export default Page;
