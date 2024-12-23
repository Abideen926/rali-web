"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import PasswordRecovery from "./PasswordRecovery";
import {
  FORGET_PASSWORD,
  FORGET_PASSWORD_CHANGE_PASSWORD,
  FORGET_PASSWORD_VARIFICATION_CODE,
} from "@/constant/forgetPassword";
import VerficationCode from "./VerficationCode";
import ChangePassword from "./ChangePassword";

import { Wizard } from "react-use-wizard";
import RalliModal from "@/components/Modal/RalliModal";

const PasswordChangeContainer = ({handleClose}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false);
    router.push("/applicant/login");
  };
  const handleModal = () => {
    handleCloseModal();
  };
  const [formData, setFormData] = useState();
  const handleNextStepData = (step, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [step]: data,
    }));
  };
  const onClose = () => {
    console.log("helo");
  };
  return (
    <Wizard>
      <PasswordRecovery
        data={FORGET_PASSWORD}
        onNext={(data) => handleNextStepData("passwordRecovery", data)}
      />
      <VerficationCode
        data={FORGET_PASSWORD_VARIFICATION_CODE}
        onNext={(data) => handleNextStepData("recentCode", data)}
      />
      <ChangePassword
        data={FORGET_PASSWORD_CHANGE_PASSWORD}
        onNext={(data) => handleNextStepData("changePassword", data)}
        handleClose={handleClose}
      />
    </Wizard>
  );
};

export default PasswordChangeContainer;
