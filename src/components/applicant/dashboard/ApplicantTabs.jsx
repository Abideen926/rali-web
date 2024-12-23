"use client";
import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ApplicantJobDetails from "./ApplicantJobDetails";
import RecentSearch from "./RecentSearch";
import { usePathname, useRouter } from "next/navigation";
import EmployerJobDetails from "@/components/employer/homePage/EmployerJobDetails";
import CustomButton from "@/components/button/CustomButton";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ApplicantTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const pathName = usePathname();
  const router = useRouter();
  const handleCreateJobs = () => {
    router.push("/employer/myJobs/form");
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        {pathName.includes("/employer/myJobs") && (
          <CustomButton label="Create Jobs" onClick={handleCreateJobs} />
        )}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Jobs For You"
            {...a11yProps(0)}
            fullWidth
            sx={{
              maxWidth: "50%",
              width: "100%",
              fontSize: { xs: "9px", sm: "18px", md: "22px", lg: "26px" },
              lineHeight: "18px",
              fontWeight: 600,
              color: "#222222",
              pl: { lg: "190px" },
            }}
          />
          <Tab
            label="Recent Searches"
            {...a11yProps(1)}
            sx={{
              maxWidth: "50%",
              width: "100%",
              fontSize: { xs: "9px", sm: "18px", md: "22px", lg: "26px" },
              lineHeight: "18px",
              fontWeight: 600,
              color: "#222222",
              pr: { lg: "190px" },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {pathName === "/employer/home" || pathName === "/employer/myJobs" ? (
          <EmployerJobDetails />
        ) : (
          <ApplicantJobDetails />
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RecentSearch />
      </CustomTabPanel>
    </Box>
  );
};
export default ApplicantTabs;
