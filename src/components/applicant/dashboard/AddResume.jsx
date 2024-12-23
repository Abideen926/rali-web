"use client";
import React, { useRef, useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Image from "next/image";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import CustomButton from "@/components/button/CustomButton";
import RalliModal from "@/components/Modal/RalliModal";
import { useDispatch } from "react-redux";
import { setCvs } from "@/redux/slices/applicantCv";
import { ATTACHED_CV } from "@/services/apiService/apiEndPoints";
import apiInstance from "@/services/apiService/apiServiceInstance";
import { useRouter } from "next/navigation";

const AddResume = ({ nextStep, onNext }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadTime, setUploadTime] = useState(null);
  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const router = useRouter();

  console.log(selectedFile, "selectedfile ");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    console.log("Uploading file:", file);
    setSelectedFile({ file });

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await apiInstance.post(ATTACHED_CV, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("API Response:", response?.data?.data);
      dispatch(setCvs(response?.data?.data));

      setSelectedFile({ file });
      // setUploadTime(new Date());
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      event.target.value = "";
    }
  };
  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  const handleContinue = () => {
    if (selectedFile) {
      onNext(selectedFile);
      nextStep();
    } else {
      alert("Please upload a file before continuing.");
    }
  };

  // const getElapsedTime = () => {
  //     if (!uploadTime) return "No file uploaded";

  //     const now = new Date();
  //     const seconds = Math.floor((now - uploadTime) / 1000);

  //     if (seconds < 60) return "just now";
  //     if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
  //     if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
  //     if (seconds < 604800) return `${Math.floor(seconds / 86400)} days ago`;
  //     return "more than a week ago";
  // };
  const handleBack = () => {
    router.back()
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const handleBuildRalliResume = () => {
    router.push("/applicant/careerAreas/apply/ralliResume");
  };

  return (
    <Box
      sx={{
        // px: "10px",
        my: "60px",
      }}
    >
      <Box sx={{ maxWidth: "100%" }}>
        {/* <Button
          onClick={handleExit}
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
            width: "96.96px",
          }}
        >
          <HighlightOffIcon
            sx={{
              fontSize: "16px",
            }}
          />{" "}
          Exit
        </Button> */}
        <Button onClick={handleBack} sx={{ minWidth: 0, p: 0 }}>
          <ArrowCircleLeftRoundedIcon sx={{ color: "#00305B", fontSize: 32 }} />
        </Button>
        {/* <RalliModal
          open={isModalOpen}
          onClose={handleCloseModal}
          para={
            "Your application and any documents uploaded during this application will not be saved."
          }
          title={"Are you sure you want to exit?"}
          imageSrc={"/assets/images/confirmation.png"}
        /> */}
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "21px", md: "26px" },
            fontWeight: 600,
            lineHeight: { xs: "20px", sm: "30px", md: "25px", lg: "20px" },
            color: "#111111",
            pt: 3,
            // pb: { xs: 3, md: 2, lg: 2 },
          }}
        >
          Add a resume for the employer
        </Typography>
        <Box sx={{ px: "3px", my: "40px" }}>
          {!selectedFile ? (
            <Box
              onClick={handleFileUploadClick}
              sx={{
                maxWidth: "570px",
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
                Cv Option
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
                maxWidth: "570px",
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
                  <Typography
                    sx={{
                      fontSize: { xs: "10px", sm: "15px", md: "16px" },
                      fontWeight: 300,
                      color: "#111111",
                    }}
                  >
                    {/* {getElapsedTime()} */}
                  </Typography>
                </Box>
              </Box>
              <Box onClick={handleFileRemove}>
                <CloseIcon sx={{ color: "#FE4D82", cursor: "pointer" }} />
              </Box>
            </Box>
          )}

          {/* <Box sx={{ px: '5px', py: 3 }}>
                        <CustomButton label="Continue" onClick={handleContinue} />
                    </Box> */}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            my: 3,
            maxWidth: "570px",
            py: 2,
          }}
        >
          <Divider sx={{ flexGrow: 1 }} />
          <Typography
            sx={{
              px: 2,
              fontSize: "16px",
              color: "#333333",
              fontWeight: 400,
            }}
          >
            or
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        <Box
          sx={{
            maxWidth: "570px",
            boxShadow: "0px 1px 5px #00000040",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 1,

            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleBuildRalliResume}
          >
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
                  lineHeight: {
                    xs: "12px",
                    sm: "30px",
                    md: "25px",
                    lg: "20px",
                  },
                  color: "#111111",
                }}
              >
                Build An Ralli Resume
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "10px", sm: "15px", md: "16px" },
                  fontWeight: 300,
                  lineHeight: {
                    xs: "12px",
                    sm: "20px",
                    md: "25px",
                    lg: "33px",
                  },
                  color: "#111111",
                  py: 0,
                }}
              >
                we will guide you through it, there are only few
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            px: "5px",
            py: 3,
          }}
        >
          <CustomButton label="Continue" onClick={handleContinue} />
        </Box>
      </Box>
    </Box>
  );
};

export default AddResume;
