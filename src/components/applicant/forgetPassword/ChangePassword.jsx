"use client";
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CustomButton from "@/components/button/CustomButton";
import { useRouter } from "next/navigation";

const ChangePassword = ({ data, handleClose }) => {
  const [showPassword, setShowPassword] = useState({});
  const [newPassword, setNewPassword] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleModal = () => {
    handleCloseModal();
  };
  const handleTogglePasswordVisibility = (name) => {
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleChange = (name, value) => {
    setNewPassword((prev) => ({ ...prev, [name]: value }));
  };
  const router = useRouter();
  const handleUpdate = () => {
    handleClose()
  };

  return (
    <Box
      sx={{
        px: { md: "80px" },
        py: { md: 4 },
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
        <Typography variant="h5" fontWeight="bold">
          Password Recovery
        </Typography>
        <Typography color="textSecondary" mb={3}>
          Set New Password
        </Typography>
      </Box>
      {data?.map((item, index) => (
        <Box key={item.name} sx={{ my: 2 }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "18px",
              color: "#222222",
              mb: "10px",
            }}
          >
            {item?.label}
          </Typography>
          <Box sx={{ position: "relative" }}>
            <Box
              component="input"
              type={showPassword[item.name] ? "text" : "password"}
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
              }}
              placeholder={item?.placeholder}
              onChange={(e) => handleChange(item.name, e.target.value)}
            />
            <IconButton
              onClick={() => handleTogglePasswordVisibility(item.name)}
              sx={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#222222",
              }}
            >
              {showPassword[item.name] ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </Box>
        </Box>
      ))}
      <CustomButton label="Update" onClick={handleUpdate} />
    </Box>
  );
};

export default ChangePassword;
