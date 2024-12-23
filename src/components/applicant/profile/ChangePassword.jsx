import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { CHANGE_PASSWORD } from "@/constant/applicant/profile";
import CustomButton from "@/components/button/CustomButton";
import { usePathname } from "next/navigation";

const ChangePassword = ({ handleClose }) => {
  const [showPassword, setShowPassword] = useState({});
  const [newPassword, setNewPassword] = useState({});
  console.log(newPassword, "newPassword");

  const handleTogglePasswordVisibility = (name) => {
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleChange = (name, value) => {
    setNewPassword((prev) => ({ ...prev, [name]: value }));
  };
  const pathName = usePathname()

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "20px", sm: "22px", md: "30px" },
            lineHeight: "18px",
            color: "#00305B",
            py: 2,
            pb: 3,
          }}
        >
          Change Password
        </Typography>
        {pathName.includes("/applicant") && (
          <Box
            sx={{
              width: { xs: "33px", md: "43px" },
              height: { xs: "33px", md: "43px" },
              borderRadius: "50%",
              boxShadow: "0px 1px 5px #00000040",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Box>
        )}
      </Box>
      {CHANGE_PASSWORD?.map((item, index) => (
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
      <CustomButton label="Update" />
    </Box>
  );
};

export default ChangePassword;
