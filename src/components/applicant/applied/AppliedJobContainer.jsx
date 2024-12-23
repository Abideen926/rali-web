'use client'
import React, { useState } from 'react'
import { Wizard } from 'react-use-wizard'

import { TERMS_CONDITIONS } from '@/constant/applicant/termsconditions'
import { ADD_ADDITOIONAL_DOC } from '@/constant/applicant/addAdditionalFile'
import { VARIFY_RESUME } from '@/constant/applicant/varifyResume'
import { COMPLETE_APPLICATION } from '@/constant/applicant/completeApplication'

import ApplyContainer from '../dashboard/ApplyContainer'
import StartApplication from './StartApplication'
import TremsAndConditions from './TremsAndConditions'
import AddAdditionalDoc from './AddAdditionalDoc'
import VerifyResume from './VerifyResume'
import CompleteApplication from './CompleteApplication'
import { useSelector } from 'react-redux'


const AppliedJobContainer = () => {
  const [finalData, setFinalData] = useState()
  const getAppliedData = useSelector((state)=>state?.appliedJobs?.appliedData)
  console.log(getAppliedData, 'get')
  const handleNextStepData = (step, data) =>{
    setFinalData(prevData =>({
      ...prevData,
      [step]: data,
    }))

  }
  console.log(finalData, '<----final ')
  return (
    <Wizard>
      <ApplyContainer getAppliedData={getAppliedData} onNext={(data) => handleNextStepData('applyContainer', data)} />
      <StartApplication onNext={(data) => handleNextStepData('startApplication')} />
      <TremsAndConditions data={TERMS_CONDITIONS} onNext={(data) => handleNextStepData('tremsConditions')} />
      <AddAdditionalDoc getAppliedData={getAppliedData} data={ADD_ADDITOIONAL_DOC} onNext={(data) => handleNextStepData('tremsConditions')} />
      <VerifyResume  getAppliedData={getAppliedData} data={VARIFY_RESUME} onNext={(data) => handleNextStepData('tremsConditions')} />
      <CompleteApplication  getAppliedData={getAppliedData} data={COMPLETE_APPLICATION}  onNext={(data) => handleNextStepData('tremsConditions')}/>
    </Wizard>
  )
}

export default AppliedJobContainer
