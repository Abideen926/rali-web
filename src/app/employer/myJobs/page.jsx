import React from "react";
import { Box } from "@mui/material";
import SearchBar from "@/components/applicant/dashboard/SearchBar";
import ApplicantTabs from "@/components/applicant/dashboard/ApplicantTabs";
import Container from "@/components/common/Container";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";

const page = () => {
  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <SearchBar />
      <Container>
        <ApplicantTabs />
      </Container>
    </Box>
  );
};

export default page;
