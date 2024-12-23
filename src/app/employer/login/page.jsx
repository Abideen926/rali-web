'use client'
import React from "react";
import { Box } from "@mui/material";
import Login from "@/components/login/Login";
import { LOGIN_DATA } from "@/constant/login";

const page = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/assets/images/login_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       <Login data={LOGIN_DATA} loginType='Employer Login'/>
    </Box>
  );
};

export default page;
