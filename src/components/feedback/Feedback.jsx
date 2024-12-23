'use client'
import { Box, Typography } from "@mui/material";
import React from "react";
import Search from "../searchField/Search";
import Navbar from "../applicant/dashboard/Navbar";
import { NAVBAR_DATA } from "@/constant/applicant/navbar";
import Container from "../common/Container";
import BackButtonWithTitle from "../applicant/dashboard/BackButtonWithTitle";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Feedback = ({ data }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };
  return (
    <Box>
      <Navbar data={NAVBAR_DATA} />
      <Container>
        <BackButtonWithTitle label="Feedback" onClick={handleBack}/>
        <Search />
        {data?.map((item,index) => (
          <Box
          key={index}
            sx={{
              borderRadius: "10px",
              boxShadow: "0px 1px 3px #00000040",
              p:2,
              mb:2
            }}
          >
            <Box sx={{display:'flex', alignItems:'center', gap:2}}>
              <Image src={item?.image} width={70} height={70} alt='feedback'/>
              <Box>
                <Typography sx={{fontSize:'20px', fontWeight:400, lineHeight:'33px', color:'#111111'}}>
                  {item?.employerName}
                </Typography>
                <Typography sx={{fontSize:'16px', fontWeight:300, lineHeight:'19px', color:'#333333'}}>
                  {item?.lastName}
                </Typography>
              </Box>
            </Box>
            <Typography sx={{fontSize:'16px', fontWeight:400, lineHeight:'26px', color:'#111111',py:1}}>
              {item?.description}
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Feedback;
