import React from "react";
import { Box, Typography } from "@mui/material";

const MarkAsNotifications = ({ data }) => {
  return (
    <Box>
      {data?.map((item, index) => (
        <Box
        key={index}
          sx={{
            //   backgroundColor: item?.id === ids ? "#00305B" : "",
            border: "0.6px solid #0000004D",
            borderRadius: "10px",
            p: 2,
            my: 2,
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "18px", md: "22px", lg: "26px" },
                lineHeight: { xs: "20px", md: "18px" },
                color: "#00305B",
                fontWeight: 700,
                py: 1,
              }}
            >
              {item?.title}
            </Typography>
            <Typography
              sx={{
                color: "#FE4D82",
                fontSize: { xs: "9px", sm: "10px", md: "14px", lg: "16px" },
                lineHeight: { xs: "18px", md: "18px" },
                fontWeight: 700,
                textDecoration: "underline",
              }}
              // onClick={handleFurtherDetails}
            >
              {item?.buttonLable}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "9px", sm: "12px", md: "14px", lg: "16px" },
              lineHeight: { xs: "20px", md: "25px" },
              fontWeight: 400,
              py: 1,
            }}
          >
            {item?.para}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 4,
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "9px", sm: "12px", md: "14px", lg: "16px" },
                  lineHeight: { xs: "20px", md: "25px" },
                }}
              >
                Date:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "9px", sm: "12px", md: "14px", lg: "16px" },
                  lineHeight: { xs: "20px", md: "25px" },
                }}
              >
                {item?.date}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "9px", sm: "12px", md: "14px", lg: "16px" },
                  lineHeight: { xs: "20px", md: "25px" },
                }}
              >
                Time:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "9px", sm: "12px", md: "14px", lg: "16px" },
                  lineHeight: { xs: "20px", md: "25px" },
                }}
              >
                {item?.time}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MarkAsNotifications;
