'use client';
import React from 'react';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import { Box, Button, Typography } from '@mui/material';

const BackButtonWithTitle = ({ label, onClick }) => {
  return (
    <Box>
      <Box
        sx={{
          width: { xs: '100%',  lg: '60%' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: '15px',
          mb: '20px',
        }}
      >
        <Button onClick={onClick} sx={{ minWidth: 0, p: 0 }}>
          <ArrowCircleLeftRoundedIcon sx={{ color: '#00305B', fontSize: 32 }} />
        </Button>

        {label && (
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              sx={{
                fontSize: { xs: '22px', sm: '26px', md: '30px' },
                lineHeight: { xs: '20px', md: '18px' },
                fontWeight: 600,
                color: '#00305B',
                textTransform: 'capitalize',
              }}
            >
              {label}
            </Typography>
            <Box
              sx={{
                width: '60px',
                height: '2px',
                backgroundColor: '#FE4D82',
                margin: '10px auto 0',
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default BackButtonWithTitle;
