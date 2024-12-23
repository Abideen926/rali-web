import React from "react";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import Navbar from "@/components/applicant/dashboard/Navbar";
import { Box, Grid } from "@mui/material";
import AboutSection from "@/components/applicant/dashboardProfile/AboutSection";
import { USER_PROFILE } from "@/constant/applicant/feed";
import UserCard from "@/components/applicant/talentNetwork/UserCard";
import { USERS } from "@/constant/applicant/talentNetwork";

const page = () => {
  return (
    <>
      <Navbar data={NAVBAR_DATA} />
      <Box sx={{ px: "25px", maxWidth: "1260px", margin: "25px auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <AboutSection data={USER_PROFILE} />
          </Grid>
          <Grid item xs={12} md={9}>
            <UserCard data={USERS}/>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default page;
