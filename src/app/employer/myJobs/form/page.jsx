import React from "react";
import { Box } from "@mui/material";
import Container from "@/components/common/Container";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";
import CreateJobsForm from "@/components/employer/createJob/CreateJobsForm";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import { CREATE_JOB_FORM } from "@/constant/employer/createJob";

const page = () => {
  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
      <BackButtonWithTitle label='Create Job'/>
        <CreateJobsForm  data={CREATE_JOB_FORM}/>
      </Container>
    </Box>
  );
};

export default page;
