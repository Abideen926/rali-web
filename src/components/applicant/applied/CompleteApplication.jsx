"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import AppliedJobs from "../dashboard/AppliedJobs";
import CustomButton from "@/components/button/CustomButton";
import { BorderLinearProgress } from "@/helper/progressbar";
import FormCheckbox from "./FormCheckbox";
import { useWizard } from "react-use-wizard";
import { useSelector } from "react-redux";
import { JOBS_FOR_YOU_ADD_A_RESUME } from "@/constant/applicant/jobstab";
import RalliModal from "@/components/Modal/RalliModal";
import { useRouter } from "next/navigation";

const CompleteApplication = ({ data, getAppliedData }) => {
  const [inputData, setInputData] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { nextStep, previousStep } = useWizard();

  const router = useRouter();
  const handleCloseModal = () => {
    setModalOpen(false);
    router.push("/applicant/careerAreas");
  };

  const handleModal = () => {
    handleCloseModal();
  };
  const getApplied = useSelector((state) => state?.appliedJobs?.appliedData);
  const getUserData = useSelector((state) => state?.auth?.userData);
  console.log(getUserData, "userData");
  console.log(getApplied, "appliedJob");
  const collectData = [
    {
      title: getUserData?.user?.ucn,
      name: "UCN",
    },
    {
      title: getApplied?.requisition_number,
      name: "Req Number",
    },
    {
      title: getApplied?.title,
      name: "Position Title",
    },
    {
      title: getUserData?.user?.gender?.name,
      name: "Gender",
    },
    {
      title: getUserData?.user?.ethnicity,
      name: "Ethnicity",
    },
    {
      title: getApplied?.job_location?.name,
      name: "Employment Type",
    },
    {
      title: getApplied?.job_type?.name,
      name: "Employee Type",
    },
  ];

  const [checkboxStates, setCheckboxStates] = useState({
    isEighteen: "",
    usCitizen: "",
    workVisa: "",
    mustHaveQualifications: "",
    educationRequirements: "",
    hasDisability: "",
    isVeteran: "",
    termsAgreement: "",
  });
  // const [dropdownStates, setDropdownStates] = useState({
  //     employmentType: '',
  //     employeeType: '',
  //     gender: '',
  //     ethnicity: '',
  // });

  const handleInputChange = (name, value) => {
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDropdownChange = (key, value) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleCheckboxChange = (key, option) => {
    setCheckboxStates((prevState) => ({
      ...prevState,
      [key]: option,
    }));
  };

  const handleSubmit = () => {
    setModalOpen(true);
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
          <Box sx={{ pb: 4 }}>
            <BorderLinearProgress variant="determinate" value={100} />
          </Box>

          {collectData?.map((item) => (
            <Box key={item.name} sx={{ mb: "20px" }}>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  fontWeight: 500,
                  lineHeight: {
                    xs: "25px",
                    sm: "30px",
                    md: "24px",
                    lg: "18px",
                  },
                  color: "#222222",
                  mb: "5px",
                }}
              >
                {item?.name}
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
                  boxShadow: "0px 1px 5px #00000040",
                }}
              >
                {item?.title || "N/A"}
              </Typography>
            </Box>
          ))}
          {/* <CompleteDropdown
                        names={data?.employmentType}
                        label="Employment Type"
                        selectedValue={dropdownStates.employmentType}
                        onChange={(value) => handleDropdownChange('employmentType', value)}
                    /> */}
          <FormCheckbox
            selectedOption={checkboxStates.isEighteen}
            handleCheckboxChange={(option) =>
              handleCheckboxChange("isEighteen", option)
            }
            label={"Are You 18 Years or Older?"}
          />
          <FormCheckbox
            selectedOption={checkboxStates.usCitizen}
            handleCheckboxChange={(option) =>
              handleCheckboxChange("usCitizen", option)
            }
            label={
              "Are You a US Citizen Authorized to Work in the United States?"
            }
          />
          <FormCheckbox
            selectedOption={checkboxStates.workVisa}
            handleCheckboxChange={(option) =>
              handleCheckboxChange("workVisa", option)
            }
            label={
              "Do you have a work Visa or will you require one in the future?"
            }
          />
          <FormCheckbox
            selectedOption={checkboxStates.mustHaveQualifications}
            handleCheckboxChange={(option) =>
              handleCheckboxChange("mustHaveQualifications", option)
            }
            label={"Do You Meet the Must Have Qualifications?"}
          />
          <FormCheckbox
            selectedOption={checkboxStates.educationRequirements}
            handleCheckboxChange={(option) =>
              handleCheckboxChange("educationRequirements", option)
            }
            label={"Do You Meet the Education Requirements?"}
          />
          <FormCheckbox
            selectedOption={checkboxStates.hasDisability}
            handleCheckboxChange={(option) =>
              handleCheckboxChange("hasDisability", option)
            }
            label={"Do You Have a Disability?"}
            NoAnswer={true}
          />
          <FormCheckbox
            selectedOption={checkboxStates.isVeteran}
            handleCheckboxChange={(option) =>
              handleCheckboxChange("isVeteran", option)
            }
            label={"Are you a Veteran?"}
            NoAnswer={true}
          />
          <FormCheckbox
            selectedOption={checkboxStates.termsAgreement}
            handleCheckboxChange={(option) =>
              handleCheckboxChange("termsAgreement", option)
            }
            label={"Do You Agree With RALLi Technologies Terms Of Use?"}
          />
          <Box
            sx={{
              pt: 4,
            }}
          >
            <CustomButton label="Submit Application" onClick={handleSubmit} />
          </Box>
          <Box
            sx={{
              py: 2,
              pb: 2,
            }}
          >
            <CustomButton label="Cancel" onClick={handleSubmit} bg="#00305B" />
          </Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedOption === "Yes"}
                onChange={() => handleCheckboxChange("Yes")}
              />
            }
            label=" Do You Agree With RALLi Technologies Terms Of Use?"
            sx={{
              fontWeight: 400,
              color: "#111111",
              ".css-54c5wf-MuiTypography-root": {
                fontSize: { xs: "8px ", sm: "12px", md: "14px", lg: "16px" },
                lineHeight: { xs: "10px ", sm: "10px", md: "20px", lg: "16px" },
              },
              ".css-1kkxg6p-MuiButtonBase-root-MuiCheckbox-root": {
                fontSize: { xs: "8px", sm: "12px", lg: "16px" },
                padding: { xs: "0px", md: "10px" },
              },
            }}
          />
        </Grid>
        <RalliModal
          onClick={handleModal}
          open={isModalOpen}
          onClose={handleCloseModal}
          para={
            "Thank you! Your application has been successfully submitted. We’ll review it shortly and keep you updated on the next steps"
          }
          imageSrc={"/assets/images/confirmation.png"}
          buttonLabel="Done"
        />
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

export default CompleteApplication;
