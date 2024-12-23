'use client'
import React, { useState } from "react";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import Navbar from "@/components/applicant/dashboard/Navbar";
import OfferLetter from "@/components/applicant/dashboard/OfferLetter";
import CounterLetter from "@/components/applicant/dashboard/CounterLetter";
import InterviewInvite from "@/components/applicant/dashboard/InterviewInvite";
import Container from "@/components/common/Container";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Page = ({ data }) => {
  const offerType = useSelector((state)=> state?.applicantLetterType?.stageType);

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
    <div>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle  onClick={handleBack}/>
        {renderLetter()}
      </Container>
    </div>
  );
};

export default Page;
