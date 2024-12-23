import React from "react";
import { Box } from "@mui/material";
import EditProfile from "@/components/applicant/profile/EditProfile";
import { EDIT_PROFILE_DETAILS } from "@/constant/applicant/profile";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";

const page = () => {
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <EditProfile data={EDIT_PROFILE_DETAILS} />
    </Box>
  );
};

export default page;
