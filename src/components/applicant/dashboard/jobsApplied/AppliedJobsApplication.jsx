"use client";
import { setType } from "@/redux/slices/applicantStageType";
import DescriptionIcon from "@mui/icons-material/Description";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import renderMenu from "@/helper/MenuHelpers";

const AppliedJobsApplication = ({ data }) => {
  const menuId = "primary-search-account-menu";
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  const handleMoreVertRoundedIconItems = (type) => {
    dispatch(setType(type));
    router.push("/employer/dashboard/application/letter");
  };

  const menuItems = [
    {
      label: "Offer letter",
      icon: <EmailIcon />,
      onClick: () => {
        handleMoreVertRoundedIconItems("OfferLetter");
        handleMenuClose();
      },
    },
    {
      label: "Counter Offer letter",
      icon: <DescriptionIcon />,
      onClick: () => {
        handleMoreVertRoundedIconItems("CounterOfferLetter");
        handleMenuClose();
      },
    },
    {
      label: "Interview Invite",
      icon: <GroupsIcon />,
      onClick: () => {
        handleMoreVertRoundedIconItems("Interview");
        handleMenuClose();
      },
    },
    {
      label: "Not match",
      icon: <AccountCircleIcon />,
      onClick: () => {
        console.log("not match");
        handleMenuClose();
      },
    },
  ];

  const [ids, setIds] = useState();
  const handleClick = (id) => {
    setIds(id);
  };
  const dispatch = useDispatch();
  const pathName = usePathname();
  const handleButton = (type) => {
    dispatch(setType(type));
    router.push("/applicant/applications/latter");
  };
  const handleViewApplicationDetails = () => {
    router.push("/employer/dashboard/application/details");
  };

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
          <Typography
            sx={{
              fontSize: "26px",
              lineHeight: "18px",
              fontWeight: 400,
            }}
          >
            UCN: {data?.UCN}
          </Typography>
          {/* <Button
            variant="primary"
            sx={{
              fontSize: { xs: "12px", sm: "14px", md: "20px", lg:'24px'},
              lineHeight: { xs: "25px", sm: "20px", md: "17px" },
              fontWeight: 400,
            }}
          >
            {data?.status}
          </Button> */}
          {pathName.includes("employer") && (
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
          )}
          {renderMenu({
            anchorEl,
            isMenuOpen,
            handleMenuClose,
            menuId,
            menuItems,
          })}
        </Box>
        <Typography
          sx={{
            fontSize: "26px",
            lineHeight: "18px",
            fontWeight: 700,
          }}
        >
          {data?.jobTitle}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "26px",
            fontWeight: 400,
            py: 2,
          }}
        >
          {data?.JobDescriptions}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 4,
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#00305B",
                }}
              >
                Date:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#222222",
                }}
              >
                {data?.date}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#00305B",
                }}
              >
                Time:
              </Typography>
              <Typography
                sx={{
                  fontWeight: 300,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#222222",
                }}
              >
                {data?.time}
              </Typography>
            </Box>
          </Box>
          {pathName.includes("/employer") && (
            <Typography
              onClick={handleViewApplicationDetails}
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "20px", lg: "24px" },
                lineHeight: { xs: "25px", sm: "20px", md: "17px" },
                fontWeight: 500,
                textDecoration: "underline",
                color: "#00305B",
                cursor: "pointer",
              }}
            >
              View Application Details
            </Typography>
          )}
        </Box>
        <Divider />
      </Box>
      {data?.boxData?.map((item) => (
        <>
          <Box
            sx={{
              backgroundColor: item?.id === ids ? "#00305B" : "",
              border: "0.6px solid #0000004D",
              borderRadius: "10px",
              p: 2,
              my: 2,
              cursor: "pointer",
            }}
            onClick={() => handleClick(item?.id)}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box
                sx={{
                  //   display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "18px",
                    fontWeight: 600,
                    color: item?.id === ids ? "#FFFFFF" : "#222222",
                  }}
                >
                  {item?.ucNumber}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "26px",
                    lineHeight: "18px",
                    fontWeight: 700,
                    color: item?.id === ids ? "#FFFFFF" : "#00305B",
                    py: 1,
                  }}
                >
                  {item?.title}
                </Typography>
              </Box>
              {!pathName.includes("employer") && (
                <Button
                  sx={{
                    backgroundColor: "#FE4D82",
                    color: "#fff",
                    fontSize: "16px",
                    lineHeight: "24px",
                    borderRadius: "44px",
                    height: "34px",
                    width: "148px",
                    fontWeight: 700,
                  }}
                  onClick={() => handleButton(item?.type)}
                >
                  {item?.buttonLable}
                </Button>
              )}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "26px",
                  fontWeight: 400,
                  color: item?.id === ids ? "#FFFFFF" : "#111111",
                  py: 1,
                }}
              >
                {item?.para}
              </Typography>
            </Box>
          </Box>
        </>
      ))}
    </>
  );
};

export default AppliedJobsApplication;
