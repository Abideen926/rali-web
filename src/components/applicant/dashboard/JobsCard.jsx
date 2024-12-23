"use client";
import React, { useState } from "react";
import {
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

const JobsCard = ({ data, setId, isLoadingJobs, ids }) => {
  console.log(data,'data jobss')
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
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <BookmarkIcon
          sx={{
            color: "#111111",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "#111111",
            px: "10px",
          }}
        >
          Save Job
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NotInterestedIcon
          sx={{
            color: "#111111",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "#111111",
            px: "10px",
          }}
        >
          Not Intrested
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ErrorIcon
          sx={{
            color: "#111111",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "#111111",
            px: "10px",
          }}
        >
          Is There A Problem With This Job?
        </Typography>
      </MenuItem>
    </Menu>
  );
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
                  py: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 500,
                    lineHeight: "20px",
                    color: "#111111",
                  }}
                >
                  {item?.title}
                </Typography>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <MoreVertRoundedIcon
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={handleProfileMenuOpen}
                  />
                </IconButton>
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
              <Box sx={{ py: "10px" }}>
                <Button
                  sx={{
                    backgroundColor: "#FDF7F7",
                    border: "0.4px solid #0000004D",
                    borderRadius: "6px",
                    color: "#222222",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    textAlign: "center",
                    p: "7px",
                  }}
                >
                  {/* {item?.job_type} */}
                  {item?.buttonJobTypeLable}
                </Button>
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
                  Easy Apply
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
      {renderMenu}
    </Box>
  );
};

export default JobsCard;
