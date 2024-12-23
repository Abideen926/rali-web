import Navbar from '@/components/applicant/dashboard/Navbar'
import DashboardProfile from '@/components/applicant/dashboardProfile/DashboardProfile'
import { NAVBAR_DATA } from '@/constant/applicant/navbar'
import { USER_PROFILE } from '@/constant/applicant/feed/index'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar data={NAVBAR_DATA}/>
      <DashboardProfile data={USER_PROFILE}/>
    </>
  )
}

export default page
