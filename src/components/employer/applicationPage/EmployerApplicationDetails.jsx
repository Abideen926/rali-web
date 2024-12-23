'use client'
import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

const EmployerApplicationDetails = ({ data }) => {
      const [selectedFile, setSelectedFile] = useState(null);
  return (
    <Box>
      {data?.map((item) => (
        <Box key={item.name} sx={{ mb: "20px" }}>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 500,
              lineHeight: {
                xs: "25px",
                sm: "30px",
                md: "24px",
                lg: "18px",
              },
              color: "#222222",
              mb: "5px",
            }}
          >
            {item?.title}
          </Typography>
          <Typography
            sx={{
              width: "100%",
              display: "block",
              padding: "18px 20px",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "18px",
              color: "#222222",
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 1px 5px #00000040",
            }}
          >
            {item?.placeholder || "N/A"}
          </Typography>
        </Box>
      ))}
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "14px", md: "20px", lg: "24px" },
          lineHeight: { xs: "25px", sm: "20px", md: "17px" },
          fontWeight: 500,
        }}
      >
        Resume
      </Typography>
      <Box sx={{ px: "3px", my: "40px" }}>
          {!selectedFile ? (
            <Box
            //   onClick={handleFileUploadClick}
              sx={{
                // maxWidth: "570px",
                boxShadow: "0px 1px 5px #00000040",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                cursor: "pointer",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  src="/assets/images/pdf.png"
                  width={53.09}
                  height={65.23}
                  alt="img"
                />
                <Box sx={{ px: 2, pt: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "15px", md: "18px" },
                      fontWeight: 700,
                      color: "#111111",
                    }}
                  >
                    Lavoto.pdf
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="text"
                sx={{
                  backgroundColor: "#00305B",
                  color:'#FFF',
                  fontSize: { xs: "9px", sm: "14", lg: "16px" },
                  lineHeight: "25px",
                  fontWeight: 400,
                }}
              >
                Download
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                maxWidth: "570px",
                boxShadow: "0px 1px 5px #00000040",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                my: 1,
                border: "1px solid #ddd",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Image
                  src="/assets/images/pdf.png"
                  width={53.09}
                  height={65.23}
                  alt="img"
                />
                <Box sx={{ px: 2, pt: "10px" }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "15px", md: "18px" },
                      fontWeight: 700,
                      color: "#111111",
                    }}
                  >
                    {/* {selectedFile.file.name} */}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "15px", md: "16px" },
                      fontWeight: 300,
                      color: "#111111",
                    }}
                  >
                    {/* {getElapsedTime()} */}
                  </Typography>
                </Box>
              </Box>
    
            </Box>
          )}


        </Box>
    </Box>
  );
};

export default EmployerApplicationDetails;
