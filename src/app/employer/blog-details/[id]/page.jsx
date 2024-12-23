"use client";
import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import { BLOGS_DATA } from "@/constant/common/blogs";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";

import { useRouter } from "next/navigation";

import Container from "@/components/common/Container";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";

const BlogDetails = ({ params }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  useEffect(() => {
    const blogId = params.id;
    if (blogId) {
      const selectedBlog = BLOGS_DATA.find(
        (item) => item.id === parseInt(blogId)
      );

      if (selectedBlog) {
        setBlog(selectedBlog);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  }, [params.id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (!blog) {
    return <Typography>Blog not found.</Typography>;
  }

  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Blogs" onClick={handleBack} />
    
        <Box
        component={'img'}
          sx={{
            width: "100%",
            height: { xs: "200px", sm: "300px", md: "400px" }, 
            backgroundImage: `url(${blog.blogImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "8px", 
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "19px", lg: "24px" },
            lineHeight: { xs: "22px", md: "18px" },
            fontWeight: 600,
            color: "#00305B",
            pt: 4,
            pb: 2,
          }}
        >
          {blog?.blogTitle}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "19px", lg: "24px" },
            lineHeight: { xs: "22px", md: "18px" },
            fontWeight: 600,
            color: "#FE4D82",
          }}
        >
          15-19-2024
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
            lineHeight: { xs: "28px", md: "26px" },
            color: "#111111",
            py: 2,
          }}
        >
          {blog?.blogDescription}
        </Typography>
      </Container>
    </Box>
  );
};

export default BlogDetails;
