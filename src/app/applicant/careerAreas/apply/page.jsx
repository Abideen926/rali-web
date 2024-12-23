"use client";
import React from "react";
import { Box } from "@mui/material";

import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import { FOOTER_DATA } from "@/constant/applicant/footer";

import Navbar from "@/components/applicant/dashboard/Navbar";
import Footer from "@/components/applicant/dashboard/Footer";
import AppliedJobContainer from "@/components/applicant/applied/AppliedJobContainer";
import Container from "@/components/common/Container";

const page = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar data={NAVBAR_DATA} />
      <Container sx={{ flex: 1 }}>
        <AppliedJobContainer />
      </Container>
      <Footer data={FOOTER_DATA} />
    </Box>
  );
};

export default page;
