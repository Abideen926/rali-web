import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import JobsCard from "./JobsCard";
import ApplyNowCard from "./ApplyNowCard";
import JobsCardDetails from "./JobsCardDetails";
import {
  CAREER_JOBS,
  CAREER_JOBS_DETAILS,
} from "@/services/apiService/apiEndPoints";
import { useRouter } from 'next/navigation';
import apiInstance from "@/services/apiService/apiServiceInstance";
import { useDispatch } from "react-redux";
import { setAppliedData } from "@/redux/slices/applicantAppliedSpecificJob";
import { JOBS_FOR_YOU, JOBS_FOR_YOU_CAREER_AREA_PAGE } from "@/constant/applicant/jobstab";

const ApplicantJobDetails = () => {
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

  const handleBookmark = (book) => {
  };
  const handleApplyNow = (data) => {
    dispatch(setAppliedData(data));
    router.push('/applicant/careerAreas/apply');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {errors ? (
            <Typography color="error">{errors?.message}</Typography>
          ) : (
            <JobsCard
              data={JOBS_FOR_YOU_CAREER_AREA_PAGE}
              id={id}
              setId={setId}
              // isLoadingJobs={isLoadingJobs}
              ids={id}
            />
            // api work
            // <JobsCard
            //   data={jobs}
            //   id={id}
            //   setId={setId}
            //   isLoadingJobs={isLoadingJobs}
            //   ids={id}
            // />
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          {errors ? (
            <Typography color="error">{errors?.message}</Typography>
          ) : (
            <>
              <ApplyNowCard
                data={JOBS_FOR_YOU_CAREER_AREA_PAGE?.applyNowSections}
                handleBookmark={handleBookmark}
                isLoadingDetails={isLoadingDetails}
                id={id}
                handleApplyNow={handleApplyNow}
              />
              <JobsCardDetails
                 data={JOBS_FOR_YOU_CAREER_AREA_PAGE?.jobDataDetails}
                isLoadingDetails={isLoadingDetails}
              />
              {/* <ApplyNowCard
                data={jobsDetails}
                handleBookmark={handleBookmark}
                isLoadingDetails={isLoadingDetails}
                id={id}
                handleApplyNow={handleApplyNow}
              />
              <JobsCardDetails
                data={jobsDetails}
                isLoadingDetails={isLoadingDetails}
              /> */}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ApplicantJobDetails;
