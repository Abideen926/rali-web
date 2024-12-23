import { MY_ACTIVITIES } from "@/services/apiService/apiEndPoints";
import apiInstance from "@/services/apiService/apiServiceInstance";
import { Box, Button, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardAtivities = ({ data }) => {
  const [activities, setActivities] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoadingJobs, setIsLoadingJobs] = useState(false);

  const router = useRouter();
  const pathName = usePathname();
  const getMyActivites = async () => {
    setIsLoadingJobs(true);
    try {
      const response = await apiInstance?.get(MY_ACTIVITIES);
      console.log(response, "res--");
      setActivities(response?.data?.data?.activities);
    } catch (error) {
      setErrors({
        email: error?.response?.data?.message || "Failed to load jobs",
      });
    } finally {
      setIsLoadingJobs(false);
    }
  };

  useEffect(() => {
    getMyActivites();
  }, []);

  const [ids, setIds] = useState();
  const handleClick = (id) => {
    setIds(id);
  };

  const handleFurtherDetails = () => {
    if (pathName.includes("/employer")) {
      router.push("/employer/dashboard/application");
    } else {
      router.push("/applicant/applications");
    }
  };
  return (
    <>
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
                    lineHeight: { xs: "30px", md: "18px" },
                    fontWeight: 700,
                    color: item?.id === ids ? "#FFFFFF" : "#00305B",
                    py: 1,
                  }}
                >
                  {item?.title}
                </Typography>
              </Box>
              <Button
                sx={{
                  backgroundColor: "#FE4D82",
                  color: "#fff",
                  fontSize: { xs: "9px", sm: "14px", md: "16px" },
                  lineHeight: "24px",
                  borderRadius: "44px",
                  height: "34px",
                  width: "148px",
                  fontWeight: 700,
                }}
                onClick={handleFurtherDetails}
              >
                {item?.buttonLable}
              </Button>
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
                      color: item?.id === ids ? "#FFFFFF" : "#00305B",
                    }}
                  >
                    Date:
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: item?.id === ids ? "#FFFFFF" : "#222222",
                    }}
                  >
                    {item?.date}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: item?.id === ids ? "#FFFFFF" : "#00305B",
                    }}
                  >
                    Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: item?.id === ids ? "#FFFFFF" : "#222222",
                    }}
                  >
                    {item?.time}
                  </Typography>
                </Box>
              </Box>
              {pathName.includes("/employer") && (
                <Box>
                  <Typography
                    sx={{
                      borderRadius: "44px",
                      backgroundColor: "#E3F6E6",
                      fontSize: { xs: "9px", sm: "14px", md: "16px" },
                      lineHeight: "18px",
                      padding: "9px",
                      color: "#111111",
                    }}
                  >
                    32 Application
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </>
      ))}
    </>
  );
};

export default DashboardAtivities;
