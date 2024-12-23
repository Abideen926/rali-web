"use client";
import React from "react";
import AppliedJobsApplication from "@/components/applicant/dashboard/jobsApplied/AppliedJobsApplication";
import { SEARCHABLE_RALLIs } from "@/constant/applicant/talentNetwork";
import Container from "@/components/common/Container";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import { useRouter } from "next/navigation";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";

const Page = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Applications" onClick={handleBack} />
        <AppliedJobsApplication data={SEARCHABLE_RALLIs} />
      </Container>
    </div>
  );
};

export default Page;
