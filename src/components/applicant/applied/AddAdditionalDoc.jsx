"use client";
import React, { useRef, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import { BorderLinearProgress } from "@/helper/progressbar";
import Image from "next/image";
import CircleIcon from "@mui/icons-material/Circle";
import CustomButton from "@/components/button/CustomButton";
import ClearIcon from "@mui/icons-material/Clear";
import AppliedJobs from "../dashboard/AppliedJobs";
import {
  JOBS_FOR_YOU,
  JOBS_FOR_YOU_ADD_A_RESUME,
} from "@/constant/applicant/jobstab";
import { useWizard } from "react-use-wizard";

const AddAdditionalDoc = ({ data, getAppliedData }) => {
  const { nextStep, previousStep } = useWizard();
  const [selectedFiles, setSelectedFiles] = useState([]);

  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      console.log("Selected files:", files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleClearFile = (index) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleNext = () => {
    nextStep();
  };
  const handleBack = () => {
    previousStep();
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
            onClick={handleBack}
          >
            <Button
              onClick={() => console.log("Back")}
              sx={{ minWidth: 0, p: 0 }}
            >
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
            <BorderLinearProgress variant="determinate" value={70} />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pt: 2,
            }}
          >
            <Image
              src={"/assets/images/addAdditionalfile/resume.png"}
              width={40}
              height={40}
              alt="resume"
            />
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: { xs: "25px", sm: "30px", md: "24px", lg: "16px" },
                color: "#111111",
                pl: 3,
              }}
            >
              {data?.uploadNewResume}
            </Typography>
          </Box>
          <Button
            sx={{
              width: "200.29px",
              height: { xs: "40px", sm: "50px", md: "60.93px" },
              backgroundColor: "#FE4D82",
              boxShadow: "0px 1px 5px #00000040",
              borderRadius: "6px",
              color: "#FFFFFF",
              fontSize: { xs: "10px", sm: "14px", md: "16px" },
              fontWeight: 700,
              lineHeight: "18px",
              textAlign: "center",
              p: "7px",
              my: 3,
            }}
            onClick={handleBoxClick}
          >
            {data?.buttonLabel}
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              pb: 3,
              pt: 1,
              cursor: "pointer",
            }}
            onClick={handleBoxClick}
          >
            <Image
              src={"/assets/images/addAdditionalfile/attachfile.png"}
              width={40}
              height={40}
              alt="resume"
            />
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                fontWeight: 400,
                lineHeight: {
                  xs: "25px",
                  sm: "30px",
                  md: "24px",
                  lg: "16px",
                },
                color: "#111111",
                pl: 3,
              }}
            >
              {data?.attachAdditionalDoc}
            </Typography>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept=".doc,.docx,.pdf"
              multiple
              onChange={handleFileUpload}
            />
          </Box>
          <Box sx={{ px: 2, pb: 2 }}>
            {selectedFiles.length > 0 ? (
              selectedFiles.map((file, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "15px", md: "18px" },
                      fontWeight: 700,
                      color: "#111111",
                      pr: 2,
                    }}
                  >
                    {file.name}
                  </Typography>
                  <ClearIcon
                    onClick={() => handleClearFile(index)}
                    sx={{ cursor: "pointer", color: "#FE4D82" }}
                  />
                </Box>
              ))
            ) : (
              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "15px", md: "18px" },
                  fontWeight: 700,
                  color: "#111111",
                }}
              >
                No files selected
              </Typography>
            )}
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
                <CircleIcon sx={{ color: "#FE4D82" }} />
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
                    px: 2,
                  }}
                >
                  {item?.title}
                </Typography>
              </Box>
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
                  pb: 2,
                  pl: 5,
                }}
              >
                {item?.para}
              </Typography>
            </Box>
          ))}

          <CustomButton label="Next" onClick={handleNext} />
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

          {/* API Works
                     <AppliedJobs data={getAppliedData}/> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddAdditionalDoc;
