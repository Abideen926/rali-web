"use client";
import React from "react";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import Navbar from "@/components/applicant/dashboard/Navbar";
import ApplicantJobDetails from "@/components/applicant/dashboard/ApplicantJobDetails";
import Container from "@/components/common/Container";

const page = () => {
  return (
    <>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <ApplicantJobDetails />
      </Container>
    </>
  );
};

export default page;
