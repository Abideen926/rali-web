import React from 'react'
import { Box, Grid } from '@mui/material'
import AppliedJobs from './AppliedJobs'
import AddResume from './AddResume'
import { useWizard } from 'react-use-wizard'
import { JOBS_FOR_YOU_ADD_A_RESUME, JOBS_FOR_YOU_CAREER_AREA_PAGE } from '@/constant/applicant/jobstab'

const ApplyContainer = ({getAppliedData, onNext}) => {
    const { nextStep, previousStep } = useWizard();
    return (
        <Box maxWidth="xl">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{
                    backgroundColor: '#FFFFFF'
                }}>
                    <AddResume nextStep={nextStep} previousStep={previousStep} onNext={onNext}/>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    backgroundColor: '#FAF9F8',
                }}>
                    <AppliedJobs data={JOBS_FOR_YOU_ADD_A_RESUME}/>
                    {/* API WORK
                    <AppliedJobs data={getAppliedData}/> */}
                </Grid>
            </Grid>
        </Box>
    )
}

export default ApplyContainer
