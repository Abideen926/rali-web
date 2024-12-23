import React from "react";
import AddNumber from "./AddNumber";
import VerifyNumber from "./VerifyNumber";
import { Wizard } from 'react-use-wizard';

const AddNumberWrapper = ({
    ADD_NUMBER,
    ADD_NUMBER_VERIFICATIONS,
    handleNextStepData
}) => {
  return (
    <Wizard>
      <AddNumber
        data={ADD_NUMBER}
        onNext={(data) => handleNextStepData("addNumber", data)}
      />
      <VerifyNumber
        data={ADD_NUMBER_VERIFICATIONS}
        onNext={(data) => handleNextStepData("verifyNumber", data)}
      />
    </Wizard>
  );
};
export default AddNumberWrapper;
