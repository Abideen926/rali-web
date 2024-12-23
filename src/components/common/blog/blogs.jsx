"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Blogs = ({ data }) => {
  const router = useRouter();
  const pathName = usePathname()
  const checkpath = pathName.includes('employer')
  console.log(checkpath, 'checkpath')

  const handleViewDetails = (id) => {
    if (pathName.includes("employer")) {
      router.push(`/employer/blog-details/${id}`);
    } else {
      router.push(`/blog-details/${id}`);
    }
  };

  return (
    <Box>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Typography
          sx={{
            fontSize: { xs: "22px", sm: "26px", md: "30px" },
            lineHeight: { xs: "20px", md: "18px" },
            fontWeight: 600,
            color: "#00305B",
            textTransform: "capitalize",
          }}
        >
          Blogs
        </Typography>
        <Box
          sx={{
            width: "60px",
            height: "2px",
            backgroundColor: "#FE4D82",
            margin: "12px auto 0",
          }}
        />
      </Box>
      {data?.map((item) => (
        <Box
          key={item?.blogId}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderTop: "1px solid #00000040",
            borderBottom: "1px solid #00000040",
            py: 2,
            my: 2,
          }}
        >
          <Image src={item?.blogImg} width={190} height={194} alt="blogs" />
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "19px", lg: "24px" },
                lineHeight: { xs: "22px", md: "18px" },
                fontWeight: 500,
                color: "#111111",
                textTransform: "capitalize",
              }}
            >
              {item?.blogTitle}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
                  lineHeight: { xs: "28px", md: "2px" },
                  fontWeight: 300,
                  color: "#222222",
                  textTransform: "capitalize",
                  py: 2,
                }}
              >
                {item?.blogName}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
                  lineHeight: { xs: "28px", md: "26px" },
                  fontWeight: 300,
                  color: "#222222",
                  textTransform: "capitalize",
                  py: 2,
                }}
              >
                18h
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "16px" },
                lineHeight: { xs: "28px", md: "26px" },
                fontWeight: 300,
                color: "#111111",
                textTransform: "capitalize",
              }}
            >
              {item?.blogDescription}
            </Typography>
            <Typography
              onClick={() => handleViewDetails(item?.id)}
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                lineHeight: { xs: "28px", md: "20px" },
                fontWeight: 700,
                color: "#00305B",
                textTransform: "capitalize",
                mt: 0.5,
                cursor: "pointer",
              }}
            >
              view details
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Blogs;
