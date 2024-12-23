import React from "react";
import EmailVerification from "@/components/applicantForm/EmailVerification";
import { EMPLOYER_EMAIL_VERIFICATIONS } from "@/constant/employer/registrationForm";
import Container from "@/components/common/Container";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";

const page = () => {
  return (
    <>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <EmailVerification data={EMPLOYER_EMAIL_VERIFICATIONS} />
      </Container>
    </>
  );
};

export default page;
