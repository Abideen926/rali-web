'use client';
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import Image from 'next/image';
import { RESEND, VERIFY } from '@/services/apiService/apiEndPoints';
import apiInstance from '@/services/apiService/apiServiceInstance';
import { useRouter } from 'next/navigation';

const EmailVerification = ({ data, onSubmit }) => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleChange = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("otp", Number(form.verification));

      const response = await apiInstance.post(VERIFY, formData);
      if (response?.data?.data?.is_verified) {
        router.push("/applicant/careerAreas");
      }
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong");
      console.error("Error:", error);
    }
  };
  const handleResendCode = async() => {
    try {
      const response = await apiInstance.post(RESEND);
    } catch (error) {
      setError(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleBack = () =>{
    router.back()
  }
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '50%' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: '15px',
          mb: '20px',
        }}
      >
        <Button onClick={handleBack} sx={{ minWidth: 0, p: 0 }}>
          <ArrowCircleLeftRoundedIcon sx={{ color: '#00305B', fontSize: 32 }} />
        </Button>
        <Image src={data?.logo} width={70} height={40} alt="logo" />
      </Box>

      <form onSubmit={handleSubmit}>
        {data?.form?.map((item) => (
          <Box key={item.name} sx={{ mb: '20px' }}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 600,
                lineHeight: '18px',
                color: '#222222',
                mb: '10px',
                textTransform:'capitalize'
              }}
            >
              {item?.name}
            </Typography>
            <Box
              component="input"
              sx={{
                width: '100%',
                borderRadius: '10px',
                boxShadow: '0px 0px 3px #00000040',
                border: 'none',
                padding: '18px 20px',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: 300,
                lineHeight: '18px',
                color: '#222222',
              }}
              placeholder={item?.placeHolder}
              onChange={(e) => handleChange(item.name, e.target.value)}
              type='number'
              typeof='number'
            />
          </Box>
        ))}

        {error && (
          <Typography
            sx={{ color: 'red', fontSize: '14px', mb: 2 }}
          >
            {error}
          </Typography>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            pb: 4,
          }}
        >
          <Button
            sx={{
              fontSize: '16px',
              lineHeight: '18px',
              textDecoration: 'underline',
              color: '#00305B',
              cursor: 'pointer',
            }}
            onClick={handleResendCode}
          >
            Resend Verification Code
          </Button>
        </Box>

        <Button
          type="submit"
          sx={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#FE4D82',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 600,
            textTransform: 'none',
            borderRadius: '10px',
            ':hover': {
              backgroundColor: '#FE4D90',
            },
          }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Box>
  );
};

export default EmailVerification;
