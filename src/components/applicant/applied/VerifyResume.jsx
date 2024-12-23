"use client";
import React, { useRef, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import AppliedJobs from "../dashboard/AppliedJobs";
import {
  JOBS_FOR_YOU,
  JOBS_FOR_YOU_ADD_A_RESUME,
} from "@/constant/applicant/jobstab";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { BorderLinearProgress } from "@/helper/progressbar";
import CustomButton from "@/components/button/CustomButton";
import Image from "next/image";
import { useWizard } from "react-use-wizard";

const VerifyResume = ({ data, getAppliedData }) => {
  const { nextStep, previousStep } = useWizard();
  const [verify, setVerify] = useState(false);

  const handleVerify = () => {
    setVerify(true);
    if (verify) {
      nextStep();
    }
  };
  const handleBack = () => {
    previousStep();
    setVerify(false);
  };
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#FFFFFF",
            pr: "25px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%" },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: "15px",
              mb: "20px",
            }}
          >
            <Button onClick={handleBack} sx={{ minWidth: 0, p: 0 }}>
              <ArrowCircleLeftRoundedIcon
                sx={{ color: "#00305B", fontSize: 32 }}
              />
            </Button>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "21px", md: "30px" },
              fontWeight: 700,
              lineHeight: {
                xs: "25px",
                sm: "30px",
                md: "18px",
                lg: "20px",
              },
              color: "#222222",
              pb: "25px",
            }}
          >
            {data?.title}
          </Typography>
          <Box sx={{ py: 1 }}>
            <BorderLinearProgress variant="determinate" value={85} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                fontWeight: 700,
                lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "16px" },
                color: "#000000",
              }}
            >
              {data?.subTitles}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "21px",
                  md: "19px",
                },
                fontWeight: 700,
                lineHeight: {
                  xs: "25px",
                  sm: "30px",
                  md: "25px",
                  lg: "28.5px",
                },
                color: "#00305B",
              }}
            >
              {data?.resume}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "21px" },
                color: "#333333",
              }}
            >
              {data?.para}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "21px",
                  md: "19px",
                },
                fontWeight: 700,
                lineHeight: {
                  xs: "25px",
                  sm: "30px",
                  md: "25px",
                  lg: "28.5px",
                },
                color: "#00305B",
                py: 1,
              }}
            >
              {data?.visible}
            </Typography>
          </Box>
          {data?.items?.map((item, index) => (
            <Box key={index} sx={{ pb: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <Box sx={{ pr: 2 }}>{item.icon}</Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                    },
                    fontWeight: 400,
                    lineHeight: {
                      xs: "25px",
                      sm: "30px",
                      md: "25px",
                      lg: "16px",
                    },
                    color: "#111111",
                    px: 2,
                    py: 1,
                  }}
                >
                  {item?.title}
                </Typography>
                {verify && (
                  <Image src={item?.verify} width={25} height={25} alt="true" />
                )}
              </Box>
            </Box>
          ))}
          <CustomButton label="Verify" onClick={handleVerify} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#FAF9F8",
          }}
        >
          <AppliedJobs data={JOBS_FOR_YOU_ADD_A_RESUME} />

          {/* API WORKS
                    <AppliedJobs data={getAppliedData} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};
export default VerifyResume;
