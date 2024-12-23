"use client";
import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import TalentNetworkTitleSearchable from "./TalentNetworkTitleSearchable";

const UserCard = ({ data }) => {
  console.log(data, "daa");
  return (
    <Box>
      <TalentNetworkTitleSearchable label={'Talent Network'}/>
      <Grid container spacing={2}>
        {data?.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{}}>
            <Box
              sx={{
                borderRadius: "5px",
                boxShadow: "0px 1px 3px #00000040",
                maxWidth: "254.66px",
                mx: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  py: 2,
                }}
              >
                <Image src={item?.photo} width={81} height={81} alt="user" />
              </Box>
              <Typography
                sx={{
                  fontSize:{xs:'14px',md:'16px',lg:"18px"},
                  fontWeight: 600,
                  lineHeight: "18px",
                  textAlign: "center",
                  color: "#222222",
                }}
              >
                {item?.first_name}
              </Typography>
              <Typography
                sx={{
                  fontSize: {xs:'12px', md:"14px"},
                  fontWeight: 400,
                  lineHeight: "19px",
                  textAlign: "center",
                  color: "#00305B",
                  textDecoration: "underline",
                }}
              >
                Follower {item?.followers_count}
              </Typography>
              <Box
                sx={{
                  py: 1,
                }}
              >
                <Button
                  sx={{
                    minWidth: "151.16px",
                    height: "46px",
                    margin: "0px auto",
                    borderRadius: "6px",
                    border: "1px solid #00305B",
                    boxShadow: "0px 1px 3px #00000033",
                    color: "#00305B",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    mb: 1,
                    fontSize:'14px',
                    fontWeight:700,
                    lineHeight:'21px',
                    "@media (min-width: 780px) and (max-width: 880px)": {
                      minWidth: "111.16px",
                    },
                  }}
                >
                  Follow
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UserCard;
