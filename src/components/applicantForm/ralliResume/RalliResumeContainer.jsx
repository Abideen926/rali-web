import React from "react";
import {
  ADD_A_RECENT,
  ADD_SKILLS,
  EDU_INFO_BY_RALLI,
  SEARCHABLE_RALLI,
} from "@/constant/ralliResume";
import { Wizard } from "react-use-wizard";
import EducationRalliInfo from "./EducationRalliInfo";
import AddRecentJobs from "./AddRecentJobs";
import AddSkills from "./AddSkills";
import SearchAbleOnRalli from "./SearchAbleOnRalli";

const RalliResumeContainer = ({handleNextStepData, data}) => {
  return (
    <Wizard>
      <EducationRalliInfo
        data={EDU_INFO_BY_RALLI}
        onNext={(data) => handleNextStepData("ralliInfo", data)}
      />
      <AddRecentJobs
        data={ADD_A_RECENT}
        onNext={(data) => handleNextStepData("addRecentJob", data)}
      />
      <AddSkills
        data={ADD_SKILLS}
        onNext={(data) => handleNextStepData("addSkills", data)}
      />
      <SearchAbleOnRalli
        data={SEARCHABLE_RALLI}
        onNext={(data) => handleNextStepData("searchAbleRalli", data)}
      />
    </Wizard>
  );
};

export default RalliResumeContainer;
