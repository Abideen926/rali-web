"use client";
import { useState } from "react";
import RalliResumeContainer from "@/components/applicantForm/ralliResume/RalliResumeContainer";
import { Box } from "@mui/material";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import Container from "@/components/common/Container";
import Footer from "@/components/applicant/dashboard/Footer";
import { FOOTER_DATA } from "@/constant/applicant/footer";

const Page = () => {
  const [formData, setFormData] = useState();
  const handleNextStepData = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        // minHeight: "100vh",
      }}
    >
      <Navbar data={NAVBAR_DATA} />
      <Container sx={{ flex: 1 }}>
          <RalliResumeContainer handleNextStepData={handleNextStepData} />
      </Container>
      <Footer data={FOOTER_DATA} />
    </Box>
  );
};

export default Page;
