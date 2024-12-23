"use client";
import React, { useState } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CustomButton from "@/components/button/CustomButton";
import ModalRalli from "../dashboardProfile/ModalRalli";

const EditProfile = ({ data }) => {
  const [form, setForm] = useState({});
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);
  const [profilePic, setProfilePic] = useState(data?.userProfile);

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePassword = () => {
    setIsChangePasswordModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsChangePasswordModalOpen(false);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <Box sx={{ px: "25px", maxWidth: "1260px", margin: "25px auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="label"
            sx={{
              position: "absolute",
              zIndex: 1,
              top: 10,
              width: { xs: "30px", md: "40px" },
              height: { xs: "30px", md: "40px" },
              backgroundColor: "#FE4D82",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ml: { md: 2 },
              cursor: "pointer",
            }}
          >
            <EditIcon sx={{ color: "#FFF" }} />
            {/* Hidden file input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              style={{ display: "none" }}
            />
          </Box>
          <Avatar
            alt="User Profile"
            src={profilePic}
            sx={{
              width: { xs: 120, sm: 150, md: 191 },
              height: { xs: 120, sm: 150, md: 191 },
            }}
          />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "22px", md: "26px" },
            fontWeight: 600,
            lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "33px" },
            color: "#111111",
            mt: "10px",
            mb: "-5px",
          }}
        >
          {data?.userName}
        </Typography>
        <Button
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "19px" },
            fontWeight: 500,
            lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "17px" },
            color: "#00305B",
            textDecoration: "underline",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={handleChangePassword}
        >
          Change Password
        </Button>
      </Box>

      <ModalRalli
        open={isChangePasswordModalOpen}
        onClose={handleCloseModal}
        isChangePasswordModalOpen={isChangePasswordModalOpen}
      />

      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "30px",
          lineHeight: "18px",
          color: "#00305B",
          py: 2,
          pb: 4,
        }}
      >
        Edit Profile
      </Typography>

      {data?.contactDetails?.map((item) => (
        <Box key={item.name} sx={{ mb: "20px" }}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "18px",
              color: "#222222",
              mb: "10px",
            }}
          >
            {item?.title}
          </Typography>
          {item.name === "about" ? (
            <Box
              component="textarea"
              rows={5}
              sx={{
                width: "100%",
                boxShadow: "0px 0px 3px #00000040",
                border: "none",
                outline: "none",
                padding: "18px 20px",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "24px",
                color: "#222222",
                resize: "vertical",
              }}
              placeholder={item?.placeholder}
              onChange={(e) => handleChange(item.name, e.target.value)}
            />
          ) : (
            <Box
              component="input"
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
          )}
        </Box>
      ))}

      <Box sx={{ my: 2 }}>
        <CustomButton label="Update" />
      </Box>
    </Box>
  );
};

export default EditProfile;
