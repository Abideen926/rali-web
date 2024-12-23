import DashboardProfile from '@/components/applicant/dashboardProfile/DashboardProfile'
import { USER_PROFILE } from '@/constant/applicant/feed/index'
import React from 'react'
import { EMPLOYER_NAVBAR_DATA } from '@/constant/employer/navbar'
import EmployerNavbar from '@/components/employer/employerNavbar/EmployerNavbar'

const page = () => {
  return (
    <>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA}/>
      <DashboardProfile data={USER_PROFILE}/>
    </>
  )
}

export default page

