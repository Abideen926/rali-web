import React from "react";
import { Box } from "@mui/material";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import { FOOTER_DATA } from "@/constant/applicant/footer";

import Navbar from "@/components/applicant/dashboard/Navbar";
import SearchBar from "@/components/applicant/dashboard/SearchBar";
import ApplicantTabs from "@/components/applicant/dashboard/ApplicantTabs";
import Footer from "@/components/applicant/dashboard/Footer";
import Container from "@/components/common/Container";

const page = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Navbar data={NAVBAR_DATA} />
      <Box sx={{ flex: 1 }}>
        <SearchBar />
        <Container>
          <ApplicantTabs />
        </Container>
      </Box>
      <Footer data={FOOTER_DATA} />
    </Box>
  );
};

export default page;
