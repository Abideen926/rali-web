'use client'
import React from 'react'
import { Box } from '@mui/material'
import Navbar from '@/components/applicant/dashboard/Navbar'
import { NAVBAR_DATA } from '@/constant/applicant/navbar'
import Container from '@/components/common/Container'
import BackButtonWithTitle from '@/components/applicant/dashboard/BackButtonWithTitle'
import Search from '@/components/searchField/Search'
import { USERS } from '@/constant/applicant/talentNetwork'
import PopularCompanies from '@/components/applicant/dashboard/PopularCompanies'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()
    const handleBack = () =>{
        router.back()
    }
  return (
    <Box>
       <Navbar data={NAVBAR_DATA}/>
        <Container>
            <BackButtonWithTitle label='popular companies' onClick={handleBack}/>
            <Search />
            <PopularCompanies data={USERS}/>
            
        </Container>
    </Box>
  )
}

export default Page
