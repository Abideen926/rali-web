import React from "react";
import { EMAIL_VERIFICATIONS } from "@/constant/applicantForm/formData";
import EmailVerification from "@/components/applicantForm/EmailVerification";
import Container from "@/components/common/Container";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";

const page = () => {
  return (
    <>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <EmailVerification data={EMAIL_VERIFICATIONS} />
      </Container>
    </>
  );
};

export default page;
