'use client'
import React from "react";
import AppliedJobsApplication from "@/components/applicant/dashboard/jobsApplied/AppliedJobsApplication";
import { SEARCHABLE_RALLIs } from "@/constant/applicant/talentNetwork";
import Container from "@/components/common/Container";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Applications" onClick={handleBack} />
        <AppliedJobsApplication data={SEARCHABLE_RALLIs} />
      </Container>
    </div>
  );
};

export default Page;
