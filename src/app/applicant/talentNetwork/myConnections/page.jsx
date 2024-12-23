import React from 'react'
import { Box } from '@mui/material'
import { NAVBAR_DATA } from '@/constant/applicant/navbar'
import MyConnections from '@/components/applicant/talentNetwork/MyConnections'
import Navbar from '@/components/applicant/dashboard/Navbar'

const page = () => {
  return (
    <Box>
      <Navbar data={NAVBAR_DATA}/>  
      <MyConnections />
    </Box>
  )
}        

export default page
