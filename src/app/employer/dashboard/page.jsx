"use client";
import React from "react";
import { Box } from "@mui/material";
import BackButtonWithTitle from "@/components/applicant/dashboard/BackButtonWithTitle";
import Container from "@/components/common/Container";
import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";
import DashboardAtivities from "@/components/applicant/dashboard/DashboardAtivities";
import { MY_ACTIVITIES_JSON } from "@/constant/applicant/talentNetwork";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/applicant/dashboard/SearchBar";
import Search from "@/components/searchField/Search";

const Page = () => {
  const pathName = usePathname()
  return (
    <Box>
      <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Dashboard" />
        {
          pathName.includes('employer/') && (
            <Search/>
          )
        }
        <DashboardAtivities data={MY_ACTIVITIES_JSON} />
      </Container>
    </Box>
  );
};

export default Page;
