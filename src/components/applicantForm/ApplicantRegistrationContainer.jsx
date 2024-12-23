"use client";
import React, { useState, useEffect } from "react";

import {
  BASIC_INFO,
  EDU_INFO,
  REGISTRATION_INFO,
} from "@/constant/applicantForm/formData";

import { useDispatch } from "react-redux";
import { Wizard } from "react-use-wizard";

import BasicInfo from "./BasicInfo";
import EducationInfo from "./EducationInfo";
import RegistrationInfo from "./RegistrationInfo";
import { finalFormData } from "@/redux/slices/applicantRegistrationFormSlice";
import { usePathname, useRouter } from "next/navigation";

const ApplicantRegistrationContainer = () => {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    basicInfo: {},
    educationInfo: {},
    registrationInfo: {},
  });

  const handleNextStepData = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };

  const handleFinalSubmit = () => {
    const fullFormData = {
      ...formData.basicInfo,
      ...formData.educationInfo,
      ...formData.registrationInfo,
    };

    dispatch(finalFormData(fullFormData));
    if (pathName === "/employer/form") {
      router.push("/employer/form/emailVerification");
    } else {
      router.push("/applicant/form/emailVerification");
    }
    console.log("invoked submite data");
  };

  useEffect(() => {
    if (
      formData.registrationInfo &&
      Object.keys(formData.registrationInfo).length > 0
    ) {
      handleFinalSubmit();
    }
  }, [formData.registrationInfo]);

  return (
    <Wizard>
      <BasicInfo
        data={BASIC_INFO}
        onNext={(data) => handleNextStepData("basicInfo", data)}
      />
      <EducationInfo
        data={EDU_INFO}
        onNext={(data) => handleNextStepData("educationInfo", data)}
      />
      <RegistrationInfo
        data={REGISTRATION_INFO}
        onSubmit={(data) => handleNextStepData("registrationInfo", data)}
      />
    </Wizard>
  );
};

export default ApplicantRegistrationContainer;
