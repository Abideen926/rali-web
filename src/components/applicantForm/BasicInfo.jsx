'use client';
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

import { useWizard } from 'react-use-wizard';

import Image from 'next/image';
import CustomButton from '../button/CustomButton';
import FormTitle from '../applicant/dashboard/FormTitle';
import { useRouter } from 'next/navigation';

const BasicInfo = ({ data, onNext }) => {
  const { nextStep } = useWizard();
  const [form, setForm] = useState({});
  const router = useRouter()

  const handleChange = (name, value) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    onNext(form); 
    nextStep();
  };
  const handleBack = ()=> {
    router.back()
  }

  return (
    <Box sx={{ height: '100vh', backgroundColor: '#FFFFFF',  }}>
      <Box sx={{ width: { xs: '100%', sm: '50%' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '15px', mb: '20px' }}>
        <Button onClick={handleBack} sx={{ minWidth: 0, p: 0 }}>
          <ArrowCircleLeftRoundedIcon sx={{ color: '#00305B', fontSize: 32 }} />
        </Button>
        <Image src={data?.logo} width={70} height={40} alt="logo" />
      </Box>
      <FormTitle label={data?.title}/>

      {data?.form?.map((item) => (
        <Box key={item.name} sx={{ mb: '20px' }}>
          <Typography sx={{ fontSize: {xs:'12px', md:'14px', lg:'16px'}, fontWeight: 600, lineHeight: '18px', color: '#222222', mb: '10px' }}>
            {item?.name}
          </Typography>
          <Box
            component="input"
            sx={{
              width: '100%',
              boxShadow: '0px 0px 3px 1px #00000040',
              border:'none',
              padding: '18px 20px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: '18px',
              color: '#222222'
            }}
            placeholder={item?.placeHolder}
            onChange={(e) => handleChange(item.name, e.target.value)}
          />
        </Box>
      ))}
      <CustomButton label="Next" onClick={handleNext} />
    </Box>
  );
};

export default BasicInfo;
