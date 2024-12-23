'use client'
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const handleBack = () => {
      router.back();
    };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        width: "100%",
        maxWidth: "1260px",
        height: "auto",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        flexDirection:'column',
        alignItems:'center'
      }}
    >
      <Typography variant="h2">Upcomming Page</Typography>
      <Box sx={{my:2}}>
        <Button
        onClick={handleBack}
         sx={{
            background:'#FE4D82',
            color:'#fff'
        }}>Back to previous Page</Button>
      </Box>
    </Box>
  );
};

export default Page;
