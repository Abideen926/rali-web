import Navbar from "@/components/applicant/dashboard/Navbar";
import Blogs from "@/components/common/blog/blogs";
import Container from "@/components/common/Container";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import { BLOGS_DATA } from "@/constant/common/blogs";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <Blogs data={BLOGS_DATA} />
      </Container>
    </Box>
  );
};

export default page;
