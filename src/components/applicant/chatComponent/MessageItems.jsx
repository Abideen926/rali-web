import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const MessageItems = ({ data, selectedId, onSelect }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "22px" },
          lineHeight: "18px",
          fontWeight: 600,
          color: "#00305B",
          pb: 2,
        }}
      >
        Messages
      </Typography>
      {data?.map((item) => {
        const lastMessage = item.messages[item.messages.length - 1];
        return (
          <Box
            key={item.userId}
            onClick={() => onSelect(item.userId)}
            sx={{
              display: "flex",
              alignItems: "center",
              my: 2,
              cursor: "pointer",
              backgroundColor: selectedId === item.userId ? "#F6E8E8" : "transparent",
              borderRadius: "8px",
              padding: {lg:"8px"},
              transition: "background-color 0.1s",
            }}
          >
            <Avatar
              alt="Profile Picture"
              src={item?.userProfile}
              sx={{
                width: { xs: 50, lg: 62 },
                height: { xs: 50, lg: 62 },
              }}
            />
            <Box sx={{ px: { xs: 1, lg: 1 }, width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px", lg:'20px'},
                    lineHeight: "18px",
                    fontWeight: 500,
                    color: "#000306",
                  }}
                >
                  {item?.userName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "9px", sm: "12px", lg: "14px" },
                    lineHeight: "18px",
                    fontWeight: 300,
                    color: "#FE4D82",
                    textDecoration: "underline",
                  }}
                >
                  {lastMessage?.time}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: "9px", sm: "12px", md: "14px" },
                  lineHeight: "18px",
                  fontWeight: 300,
                  color: "#000306",
                  py: 0.2,
                }}
              >
                {lastMessage?.text}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default MessageItems;
