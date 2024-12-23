"use client";
import React, { useRef, useState } from "react";
import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DescriptionIcon from "@mui/icons-material/Description";
import DownloadIcon from "@mui/icons-material/Download";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Image from "next/image";
import renderMenu from "@/helper/MenuHelpers";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import FollowesFollwingTabs from "../talentNetwork/FollowesFollwingTabs";
import { useRouter } from "next/navigation";

const ProfileView = ({ data }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log("Uploading file:", file);
    setSelectedFile({ file });
  };
  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  const handleEditButton = () => {
    router.push("/applicant/profile/editProfile");
  }

  const menuItems = [
    {
      label: "View",
      icon: <DescriptionIcon />,
      onClick: () => {
        console.log("Save Job clicked");
        handleMenuClose();
      },
    },
    {
      label: "Download",
      icon: <DownloadIcon />,
      onClick: () => {
        console.log("Not Interested clicked");
        handleMenuClose();
      },
    },
    {
      label: "Replace File",
      icon: <PublishedWithChangesIcon />,
      onClick: () => {
        console.log("Report Problem clicked");
        handleMenuClose();
      },
    },
    {
      label: "Delete",
      icon: <DeleteForeverIcon />,
      onClick: () => {
        console.log("Report Problem clicked");
        handleMenuClose();
      },
    },
  ];

  return (
    <Box
      sx={{
        px: "25px",
        maxWidth: "1260px",
        margin: "25px auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={data?.userProfile}
          sx={{
            width: {xs:120, sm:150, md:191},
            height: {xs:120, sm:150, md:191},
            alt: "sfs",
          }}
        />
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
            fontSize: { xs: "20px", sm: "20px", md: "22px" },
            fontWeight: 600,
            lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "18px" },
            color: "#FE4D82",
            textDecoration: "underline",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          onClick={handleEditButton}
        >
          Edit Profile
        </Button>
      </Box>
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
        Contact Details
      </Typography>
      {data?.contactDetails?.map((item) => (
        <Box key={item.name} sx={{ mb: "20px" }}>
          <Typography
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "16px" },
              fontWeight: 500,
              lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "18px" },
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
              boxShadow: "0px 0px 3px #00000040",
              border: "none",
              outline: "none",
            }}
          >
            {item?.name || "N/A"}
          </Typography>
        </Box>
      ))}
      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "16px", md: "18px" },
          fontWeight: 600,
          lineHeight: { xs: "25px", sm: "30px", md: "24px" },
          color: "#00305B",
          mb: "5px",
        }}
      >
        About
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
          boxShadow: "0px 0px 3px #00000040",
          border: "none",
          outline: "none",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "26px",
        }}
      >
        {data?.about}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "18px" },
            fontWeight: 600,
            lineHeight: { xs: "25px", sm: "30px", md: "24px" },
            color: "#00305B",
          }}
        >
          Resume
        </Typography>
        <Box sx={{ my: "10px" }}>
          {!selectedFile ? (
            <Box
              onClick={handleFileUploadClick}
              sx={{
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
                    Select File
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="text"
                sx={{
                  color: "#00305B",
                  fontSize: { xs: "9px", sm: "14", lg: "16px" },
                  lineHeight: "25px",
                  textDecoration: "underline",
                  fontWeight: 400,
                }}
              >
                Upload Cv
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Box>
          ) : (
            <Box
              sx={{
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
                    {selectedFile.file.name}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <IconButton
                  size="large"
                  edge="end"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <MoreVertRoundedIcon sx={{ cursor: "pointer" }} />
                </IconButton>
              </Box>
              {renderMenu({
                anchorEl,
                isMenuOpen,
                handleMenuClose,
                menuId,
                menuItems,
              })}
            </Box>
          )}
        </Box>
        <FollowesFollwingTabs />
      </Box>
    </Box>
  );
};

export default ProfileView;
