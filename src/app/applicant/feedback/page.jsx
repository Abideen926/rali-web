"use client";
import React from "react";
import { Box } from "@mui/material";

import { NAVBAR_DATA } from "@/constant/applicant/navbar";

import Container from "@/components/common/Container";
import Navbar from "@/components/applicant/dashboard/Navbar";

import { useRouter } from "next/navigation";
import PopularCompanies from "@/components/applicant/dashboard/PopularCompanies";
import { USERS } from "@/constant/applicant/talentNetwork";

const Page = () => {
    const router = useRouter();
    const handleBack = () => {
      router.back(); 
    };

    return (
        <Box>
            <Navbar data={NAVBAR_DATA} />
            <Container>
                <PopularCompanies data={USERS} />
            </Container>
        </Box>
    );
};

export default Page;
