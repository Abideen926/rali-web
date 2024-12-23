"use client";
import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { SHARE_YOUR_FEED } from "@/constant/applicant/feed";
import Following from "./Following";
import AppliedJobsApplication from "../dashboard/jobsApplied/AppliedJobsApplication";
import { SEARCHABLE_RALLIs } from "@/constant/applicant/talentNetwork";

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
const FollowesFollwingTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        maxWidth: "1260px",
        margin: "25px auto",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Followes"
            {...a11yProps(0)}
            fullWidth
            sx={{
              maxWidth: { xs: "50%", sm: "50%" },
              width: "100%",
              fontSize: { xs: "9px", sm: "14px", md: "16px", lg: "26px" },
              lineHeight: "18px",
              fontWeight: 600,
              color: "#222222",
              "@media (max-width: 340px)": {
                minWidth: "77.5px",
              },
            }}
          />
          <Tab
            label="Following"
            {...a11yProps(1)}
            sx={{
              maxWidth: { xs: "50%", sm: "50%" },
              "@media (max-width: 340px)": {
                minWidth: "77.5px",
              },
              width: "100%",
              fontSize: { xs: "9px", sm: "14px", md: "16px", lg: "26px" },
              lineHeight: "18px",
              fontWeight: 600,
              color: "#222222",
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Following data={SHARE_YOUR_FEED} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Following data={SHARE_YOUR_FEED} />
      </CustomTabPanel>
    </Box>
  );
};

export default FollowesFollwingTabs;
