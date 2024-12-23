import React from "react";

import { Box } from "@mui/material";

import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import Navbar from "@/components/applicant/dashboard/Navbar";
import Container from "@/components/common/Container";
import ApplicantRegistrationContainer from "@/components/applicantForm/ApplicantRegistrationContainer";

const ApplicantForm = () => {
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <ApplicantRegistrationContainer />
      </Container>
    </Box>
  );
};

export default ApplicantForm;
