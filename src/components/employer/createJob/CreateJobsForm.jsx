"use client";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CompleteDropdown from "@/components/applicant/applied/CompleteDropdown";
import CustomButton from "@/components/button/CustomButton";
import RalliModal from "@/components/Modal/RalliModal";
import { useRouter } from "next/navigation";

const CreateJobsForm = ({ data }) => {
  const [form, setForm] = useState({});
const [isModalOpen, setModalOpen] = useState(false);
  

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const jobCategories = [
    { id: 1, name: "Software" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Finance" },
    { id: 4, name: "Healthcare" },
  ];
  const jobTypes = [
    { id: 1, name: "Full-time" },
    { id: 2, name: "Part-time" },
    { id: 3, name: "Contract" },
    { id: 4, name: "Internship" },
  ];
  const jobLocations = [
    { id: 1, name: "Remote" },
    { id: 2, name: "On-site" },
    { id: 3, name: "Hybrid" },
  ];
  const countries = [
    { id: 1, name: "USA" },
    { id: 2, name: "Pakistan" },
    { id: 3, name: "India" },
    { id: 4, name: "UK" },
  ];
  const states = [
    { id: 1, name: "California" },
    { id: 2, name: "Sindh" },
    { id: 3, name: "Punjab" },
    { id: 4, name: "London" },
  ];
  const cities = [
    { id: 1, name: "Karachi" },
    { id: 2, name: "Lahore" },
    { id: 3, name: "Islamabad" },
    { id: 4, name: "Faisalabad" },
  ];
const router = useRouter()
  const handleSubmit = () => {
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    router.push("/employer/myJobs");
  };
  const handleModal = () => {
    handleCloseModal();
  };

  return (
    <Box>
      {data?.form?.map((item, index) => (
        <React.Fragment key={item.name}>
          <Box sx={{ mb: "20px" }}>
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px", lg: "16px" },
                fontWeight: 600,
                lineHeight: "18px",
                color: "#222222",
                mb: "10px",
              }}
            >
              {item?.title}
            </Typography>
            {["job_description", "job_requirements"].includes(item.name) ? (
              <Box
                component="textarea"
                sx={{
                  width: "100%",
                  boxShadow: "0px 0px 3px 1px #00000040",
                  border: "none",
                  padding: "18px 20px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "18px",
                  color: "#222222",
                  minHeight: "100px",
                  resize: "vertical",
                }}
                placeholder={item?.placeHolder}
                onChange={(e) => handleChange(item.name, e.target.value)}
              />
            ) : (
              <Box
                component="input"
                sx={{
                  width: "100%",
                  boxShadow: "0px 0px 3px 1px #00000040",
                  border: "none",
                  padding: "18px 20px",
                  borderRadius: "10px",
                  fontSize: "16px",
                  fontWeight: 300,
                  lineHeight: "18px",
                  color: "#222222",
                }}
                placeholder={item?.placeHolder}
                onChange={(e) => handleChange(item.name, e.target.value)}
              />
            )}
          </Box>
          {item.name === "application_deadline" && (
            <>
              <Box>
                <CompleteDropdown
                  names={jobCategories}
                  label="Job Category"
                  selectedValue={form.jobCategory || ""}
                  onChange={(value) => handleChange("jobCategory", value)}
                />
              </Box>
              <Box>
                <CompleteDropdown
                  names={jobTypes}
                  label="Job Type"
                  selectedValue={form.jobType || ""}
                  onChange={(value) => handleChange("jobType", value)}
                />
              </Box>
              <Box>
                <CompleteDropdown
                  names={jobLocations}
                  label="Job Location"
                  selectedValue={form.jobLocation || ""}
                  onChange={(value) => handleChange("jobLocation", value)}
                />
              </Box>
              <Box>
                <CompleteDropdown
                  names={countries}
                  label="Country"
                  selectedValue={form.country || ""}
                  onChange={(value) => handleChange("country", value)}
                />
              </Box>
              <Box>
                <CompleteDropdown
                  names={states}
                  label="State"
                  selectedValue={form.state || ""}
                  onChange={(value) => handleChange("state", value)}
                />
              </Box>
              <Box>
                <CompleteDropdown
                  names={cities}
                  label="City"
                  selectedValue={form.city || ""}
                  onChange={(value) => handleChange("city", value)}
                />
              </Box>
            </>
          )}
        </React.Fragment>
      ))}
      <RalliModal
          onClick={handleModal}
          open={isModalOpen}
          onClose={handleCloseModal}
          para={
            "Thank you! Your Created application Job has been successfully submitted. "
          }
          imageSrc={"/assets/images/confirmation.png"}
          buttonLabel="Done"
        />
      <Box sx={{ py: 2 }}>
        <CustomButton label="Submit" onClick={handleSubmit} />
      </Box>
    </Box>
  );
};

export default CreateJobsForm;
