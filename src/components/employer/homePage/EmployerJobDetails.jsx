"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import EmployerJobsCard from "./EmployerJobsCard";
import { EMPLOYER_JOBS_FOR_YOU_HOME_PAGE } from "@/constant/employer/homePage";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import EmployerApplyNowCard from "./EmployerApplyNowCard";
import EmployerJobCardDetails from "./EmployerJobCardDetails";

const EmployerJobDetails = () => {
  const [jobs, setJobs] = useState([]);
  const [jobsDetails, setJobsDetails] = useState([]);
  const [id, setId] = useState(1);
  const [errors, setErrors] = useState(null);
  const [bookMark, setBookMarks] = useState();
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const getJobs = async () => {
    setIsLoadingJobs(true);
    try {
      const response = await apiInstance?.get(CAREER_JOBS);
      setJobs(response?.data?.data?.jobs);
    } catch (error) {
      // setErrors({
      //   email: error?.response?.data?.message || "Failed to load jobs",
      // });
    } finally {
      setIsLoadingJobs(false);
    }
  };

  const getJobsDetails = async () => {
    if (!id) return;
    setIsLoadingDetails(true);
    try {
      const response = await apiInstance.get(`${CAREER_JOBS_DETAILS}/${id}`);
      setJobsDetails(response?.data?.data?.job);
    } catch (error) {
      console.error("API Error:", error.response || error.message);
      // setErrors({
      //   message: error?.response?.data?.message || "Failed to load job details",
      // });
    } finally {
      setIsLoadingDetails(false);
    }
  };
  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    if (id) {
      getJobsDetails();
    }
  }, [id]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <EmployerJobsCard
            data={EMPLOYER_JOBS_FOR_YOU_HOME_PAGE}
            id={id}
            setId={setId}
            // isLoadingJobs={isLoadingJobs}
            ids={id}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <EmployerApplyNowCard
            data={EMPLOYER_JOBS_FOR_YOU_HOME_PAGE?.applyNowSections}
            // isLoadingDetails={isLoadingDetails}
            id={id}
            // handleApplyNow={handleApplyNow}
          />
          <EmployerJobCardDetails
            data={EMPLOYER_JOBS_FOR_YOU_HOME_PAGE?.jobDataDetails}
            isLoadingDetails={isLoadingDetails}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployerJobDetails;
