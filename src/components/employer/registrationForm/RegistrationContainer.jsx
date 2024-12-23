"use client";
import React, { useEffect, useState } from "react";

import {
  BASIC_REGISTRATION,
  COMPANY_REGISTRATION,
  FINAL_REGISTRATION,
} from "@/constant/employer/registrationForm";

import { Wizard } from "react-use-wizard";
import BasicInfo from "@/components/applicantForm/BasicInfo";
import EducationInfo from "@/components/applicantForm/EducationInfo";
import RegistrationInfo from "@/components/applicantForm/RegistrationInfo";
import { finalFormData } from "@/redux/slices/applicantRegistrationFormSlice";
import { useDispatch } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

const RegistrationContainer = ({}) => {
  const [formData, setFormData] = useState({
    basicInfo: {},
    educationInfo: {},
    registrationInfo: {},
  });
  const dispatch = useDispatch();
  const router = useRouter();
 const pathName = usePathname()
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
        data={BASIC_REGISTRATION}
        onNext={(data) => handleNextStepData("basicInfo", data)}
      />
      <EducationInfo
        data={COMPANY_REGISTRATION}
        onNext={(data) => handleNextStepData("educationInfo", data)}
      />
      <RegistrationInfo
        data={FINAL_REGISTRATION}
        onSubmit={(data) => handleNextStepData("registrationInfo", data)}
      />
    </Wizard>
  );
};

export default RegistrationContainer;
