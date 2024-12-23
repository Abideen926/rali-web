import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation"; 

const ProfileSettings = ({ data }) => {
  const router = useRouter();

  const handleButtonClick = (link) => {
    if (link) {
      router.push(link); 
    }
  };

  return (
    <Box>
      {data?.map((item) => (
        <Box
          key={item.name}
          sx={{
            width: "100%",
            boxShadow: "0px 0px 3px #00000040",
            border: "none",
            outline: "none",
            padding: "18px 20px",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "18px",
            color: "#222222",
            my: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              "@media (max-width: 520px)": {
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "17px", md: "20px" },
                  fontWeight: 600,
                  lineHeight: "18px",
                  color: "#00305B",
                  textAlign:{xs:'center', sm:'start'}
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  fontWeight: 400,
                  lineHeight: "18px",
                  color: "#222222",
                  pb: { xs: "10px", md: "3px" },
                  pt: { xs: "0px", md: "3px" },
                  textAlign:{xs:'center', sm:'start'}
                }}
              >
                {item?.placeHolder}
              </Typography>
            </Box>
            <Button
              sx={{
                minWidth: { xs: "100%", sm: "222px" },
                height: "46px",
                borderRadius: "6px",
                border: "1px solid #00305B",
                fontSize: { xs: "9px", sm: "12px", md: "14px" },
                fontWeight: 700,
                lineHeight: "21px",
                color: "#00305B",
              }}
              onClick={() => handleButtonClick(item?.link)}
            >
              {item?.buttonLable}
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProfileSettings;
