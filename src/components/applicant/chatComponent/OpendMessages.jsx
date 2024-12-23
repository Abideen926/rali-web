import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  IconButton,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";

const OpendMessages = ({ selectedId, data, onSendMessage, toggleDrawer }) => {
  const selectedUser = data.find((item) => item.userId === selectedId);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedUser?.messages]);

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(selectedUser.userId, newMessage);
      setNewMessage("");
    }
  };

  if (!selectedUser) {
    return (
      <>
        {isSmallScreen && (
          <Tooltip title="Open the messages item" arrow>
            <IconButton onClick={() => toggleDrawer(true)}>
              <ViewSidebarIcon />
            </IconButton>
          </Tooltip>
        )}
        <Box
          sx={{
            minHeight: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={"/assets/images/unselectChat.png"}
              width={50}
              height={50}
              alt="not selected"
            />
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "26px", md: "30px" },
                lineHeight: "18px",
                fontWeight: 600,
                color: "#00305B",
                py: 2,
              }}
            >
              You Have Messages
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "26px", md: "30px" },
                lineHeight: "18px",
                fontWeight: 300,
                color: "#000000",
                pb: 2,
              }}
            >
              Select a conversation to read
            </Typography>
          </Box>
        </Box>
      </>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "780px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          pb: 1,
          borderBottom: "1px solid #ccc",
        }}
      >
        {isSmallScreen && (
          <IconButton onClick={() => toggleDrawer(true)}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Avatar
          alt="Profile Picture"
          src={selectedUser.userProfile}
          sx={{
            width: { xs: 40, sm: 45, md: 52, lg: 62 },
            height: { xs: 40, sm: 45, md: 52, lg: 62 },
            mr: 2,
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "15px", sm: "15px", md: "17px", lg: "20px" },
            lineHeight: "18px",
            fontWeight: 600,
            color: "#000306",
          }}
        >
          {selectedUser.userName}
        </Typography>
      </Box>
      <Box
        sx={{
          maxHeight: "600px",
          minHeight: "600px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "1px",
          },
        }}
      >
        <Box
          sx={{
            borderRadius: "8px",
            p: 2,
            backgroundColor: "#f9f9f9",
          }}
        >
          {selectedUser.messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                mb: 2,
                textAlign: msg.sender === "You" ? "right" : "left",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  fontSize: { xs: "14px", sm: "17px", md: "20px", lg:"22px" },
                  lineHeight: "18px",
                  fontWeight: 400,
                  backgroundColor: msg.sender === "You" ? "#DCF8C6" : "#FFF",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  maxWidth: "70%",
                }}
              >
                {msg.text}
              </Typography>
              <Typography
                // variant="caption"
                color="textSecondary"
                sx={{ display: "block", 
                  fontSize: { xs: "10px", sm: "10px", md: "12px", lg:"14px" },
                  lineHeight: "18px",
                  fontWeight: 400,
                  py:1,
                  px:2
                 }}
              >
                {msg.time}
              </Typography>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 2,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ ml: 1, height: "100%" }}
          onClick={handleSend}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default OpendMessages;
