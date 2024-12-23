"use client";
import React from "react";
import Container from "@/components/common/Container";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import EmployerApplicationDetails from "@/components/employer/applicationPage/EmployerApplicationDetails";
import { useRouter } from "next/navigation";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";
import { EMPLOYER_APPLICATION_DETAILS } from "@/constant/employer/applicationpage";

const Page = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Applications Details" onClick={handleBack} />
        <EmployerApplicationDetails data={EMPLOYER_APPLICATION_DETAILS}/>
      </Container>
    </div>
  );
};

export default Page;
