import Navbar from "@/components/applicant/dashboard/Navbar";
import Blogs from "@/components/common/blog/blogs";
import Container from "@/components/common/Container";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import { BLOGS_DATA } from "@/constant/common/blogs";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA}/>
      <Container>
        <Blogs data={BLOGS_DATA} />
      </Container>
    </Box>
  );
};

export default page;
