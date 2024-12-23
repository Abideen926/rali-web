'use client'
import React from 'react'
import { Box } from '@mui/material'
import { EMPLOYER_NAVBAR_DATA } from '@/constant/employer/navbar'
import { EMPLOYER_PROFILE } from '@/constant/employer/profile'

import { useRouter } from 'next/navigation'
import Container from '@/components/common/Container'
import BackButtonWithTitle from '@/components/applicant/dashboard/BackButtonWithTitle'
import EmployerProfile from '@/components/employer/profile/EmployerProfile'
import EmployerNavbar from '@/components/employer/employerNavbar/EmployerNavbar'

const Page = () => {
    const router = useRouter();

    const handleBack = () => {
      router.back(); 
    };
  return (
    <Box>
         <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
        <Container>
            <BackButtonWithTitle label='Employer Profile' onClick={handleBack}/>
            <EmployerProfile data={EMPLOYER_PROFILE}/>
        </Container>
    </Box>
  )
}

export default Page
