"use client";
import React, { useState } from "react";
import { Avatar, Box, Button, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";

import { usePathname } from "next/navigation";
import CustomButton from "@/components/button/CustomButton";

const EditEmployerProfile = ({ data }) => {
  const [form, setForm] = useState({});
  const [profilePic, setProfilePic] = useState(data?.userProfile);

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };
  const labels = {
    0.5: "4.5",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "4.5",
    4: "Good+",
    4.5: "Excellent",
    5: "4.5",
  };
  const value = 5;

  //   const route = useRouter();
  const pathName = usePathname();
  return (
    <Box>
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
              ml: { md: .5 },
              cursor: "pointer",
            }}
          >
            <EditIcon sx={{ color: "#FFF" }} />
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
              width: { xs: 120, sm: 130, md: 151 },
              height: { xs: 120, sm: 130, md: 151 },
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
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            fontWeight: 400,
            lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "19px" },
            textDecoration: "underline",
            color: "#00305B",
            mt: "10px",
            mb: "5px",
          }}
        >
          {data?.userReview}
        </Typography>
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          sx={{
            fontSize: "12px",
          }}
          emptyIcon={
            <StarIcon
              sx={{
                opacity: 0.55,
              }}
            />
          }
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          my: 4,
        }}
      >
        <Button
          sx={{
            width: { xs: "100%", sm: "300px", md: "390px" },
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "#FE4D82",
            color: "#fff",
          }}
        >
          Follow
        </Button>
        <Button
          sx={{
            width: { xs: "100%", sm: "300px", md: "390px" },
            height: "60px",
            borderRadius: "10px",
            backgroundColor: "#00305B",
            color: "#fff",
          }}
        >
          Message
        </Button>
      </Box>
      {data?.overview?.map((item) => (
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
              placeholder={item?.title}
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
              placeholder={item?.title}
              onChange={(e) => handleChange(item.name, e.target.value)}
            />
          )}
        </Box>
      ))}
      <Box>
        <CustomButton label="Save" />
      </Box>
    </Box>
  );
};

export default EditEmployerProfile;
