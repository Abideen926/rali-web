import React from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import ProfileView from "@/components/applicant/profile/ProfileView";
import { PROFILE_DETAILS } from "@/constant/applicant/profile";

const page = () => {
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <ProfileView data={PROFILE_DETAILS} />
    </Box>
  );
};

export default page;
