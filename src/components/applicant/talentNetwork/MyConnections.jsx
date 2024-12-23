import React from 'react'
import { Box, Grid } from '@mui/material'
import { USER_PROFILE } from '@/constant/applicant/feed'
import AboutSection from '../dashboardProfile/AboutSection'
import FollowesFollwingTabs from './FollowesFollwingTabs'

const MyConnections = () => {
  return (
    <Box sx={{ px: "25px", maxWidth: "1260px", margin: "25px auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <AboutSection data={USER_PROFILE} />
          </Grid>
          <Grid item xs={12} md={9}>
            <FollowesFollwingTabs />
          </Grid>
        </Grid>
      </Box>
  )
}

export default MyConnections
