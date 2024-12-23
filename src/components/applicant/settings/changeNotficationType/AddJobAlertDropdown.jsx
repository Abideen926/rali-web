import React from "react";
import { Box } from "@mui/material";
import CompleteDropdown from "../../applied/CompleteDropdown";
import CustomButton from "@/components/button/CustomButton";

const AddJobAlertDropdown = ({
  countries,
  states,
  cities,
  jobCategories,
  jobLocations,
  jobShifts,
  dropdownStates,
  handleDropdownChange,
}) => {
  return (
    <Box>
      <CompleteDropdown
        names={countries}
        label="Country"
        selectedValue={dropdownStates.selectedCountry}
        onChange={(value) => handleDropdownChange("selectedCountry", value)}
      />

      <CompleteDropdown
        names={states}
        label="State"
        selectedValue={dropdownStates.selectedState}
        onChange={(value) => handleDropdownChange("selectedState", value)}
      />

      <CompleteDropdown
        names={cities}
        label="City"
        selectedValue={dropdownStates.selectedCity}
        onChange={(value) => handleDropdownChange("selectedCity", value)}
      />

      <CompleteDropdown
        names={jobCategories}
        label="Job Category"
        selectedValue={dropdownStates.selectedJobCategory}
        onChange={(value) => handleDropdownChange("selectedJobCategory", value)}
      />

      <CompleteDropdown
        names={jobLocations}
        label="Job Location"
        selectedValue={dropdownStates.selectedJobLocation}
        onChange={(value) => handleDropdownChange("selectedJobLocation", value)}
      />

      <CompleteDropdown
        names={["Full-time", "Part-time", "Contract"]}
        label="Job Type"
        selectedValue={dropdownStates.selectedJobType}
        onChange={(value) => handleDropdownChange("selectedJobType", value)}
      />

      <CompleteDropdown
        names={jobShifts}
        label="Job Shift"
        selectedValue={dropdownStates.selectedJobShift}
        onChange={(value) => handleDropdownChange("selectedJobShift", value)}
      />
      <Box sx={{my:2}}>
        <CustomButton label="Set Alert" />
      </Box>
    </Box>
  );
};

export default AddJobAlertDropdown;
