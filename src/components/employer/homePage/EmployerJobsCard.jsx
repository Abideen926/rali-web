"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Skeleton,
  Typography,
} from "@mui/material";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import ErrorIcon from "@mui/icons-material/Error";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { usePathname } from "next/navigation";

const EmployerJobsCard = ({ data, setId, isLoadingJobs, ids }) => {
  console.log(data, "data jobss");
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  dayjs.extend(relativeTime);

  const handleProfileMenuOpen = (event) => {
    console.log("invoked");
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const pathName = usePathname()
  return (
    <Box>
      {data?.length === 0 || isLoadingJobs
        ? ["1", "2", "3"].map((item, index) => (
            <Box key={index} sx={{ my: 2 }}>
              <Skeleton variant="rectangular" width="100%" height={200} />
              <Skeleton width="60%" />
              <Skeleton width="40%" />
              <Skeleton width="80%" />
              <Skeleton width="30%" />
            </Box>
          ))
        : data?.jobData?.map((item, index) => (
            <Box
              key={index}
              sx={{
                my: 2,
                borderRadius: "10px",
                px: "15px",
                py: 1.5,
                boxShadow: "0px 1px 5px #00000040",
                cursor: "pointer",
                border: item.id === ids ? "2px solid #FE4D82" : "none",
              }}
              onClick={() => setId(item?.id)}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt="Profile Picture"
                    src={item?.userProfile}
                    sx={{
                      width: { xs: 40, lg: 50 },
                      height: { xs: 40, lg: 50 },
                    }}
                  />
                  <Box sx={{ px: { xs: 1, lg: 1.5 } }}>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px", lg: "19px" },
                        lineHeight: "18px",
                        fontWeight: 700,
                        color: "#00305B",
                      }}
                    >
                      {item?.userName}
                    </Typography>
                  </Box>
                </Box>
                {pathName !== "/employer/home" && (
                  <Typography
                    sx={{
                      borderRadius: "44px",
                      backgroundColor: "#E3F6E6",
                      fontSize: { xs: "9px", sm: "14px", md: "16px" },
                      lineHeight: "18px",
                      padding: "9px",
                      color: "#111111",
                    }}
                  >
                    32 Application
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: { xs: "28px", md: "26px", lg: "20px" },
                    color: "#111111",
                  }}
                >
                  {item?.title}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnRoundedIcon sx={{ width: "18px" }} />
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#00305B",
                    pl: "5px",
                    pr: "12px",
                  }}
                >
                  Location
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 300,
                    lineHeight: "16px",
                    color: "#333333",
                  }}
                >
                  {/* {`${item?.job_location}, ${item?.state}, ${item.country}`} */}
                  {item?.location}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pb: "15px",
                  pt: "2px",
                }}
              >
                <Button
                  variant="link"
                  sx={{
                    color: "#00305B",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "20px",
                    textAlign: "center",
                    pl: "2px",
                  }}
                >
                  <SendRoundedIcon sx={{ width: "18px" }} />
                  View Details
                </Button>
              </Box>
              <Box
                key={index}
                sx={{
                  maxHeight: "130px",
                  overflowY: "scroll",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <FiberManualRecordOutlinedIcon
                    sx={{
                      width: "18px",
                      color: "#FE4D82",
                      pt: "8px",
                    }}
                  />
                  <Typography
                    sx={{
                      color: "#111111",
                      fontSize: "14px",
                      fontWeight: 270,
                      lineHeight: "24px",
                      py: "3px",
                      pl: "2px",
                    }}
                  >
                    {item?.description}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "#FE4D82",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  pb: 1,
                  pt: 1.8,
                }}
              >
                Active {dayjs(item?.created_at).fromNow()}
              </Typography>
            </Box>
          ))}
    </Box>
  );
};

export default EmployerJobsCard;
