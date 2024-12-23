'use client'
import React from 'react'
import { Box, Button as MuiButton } from '@mui/material'

const CustomButton = ({ label, onClick, bg }) => {
  return (
    <Box width="100%">
      <MuiButton
        variant="contained"
        onClick={() => {
          console.log('Button clicked');
          if (onClick) onClick();
        }}
        sx={{
          width: "100%",
          backgroundColor: bg || '#FE4D82',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: bg ? bg : '#FE4D62'
          },
          padding: '10px 20px',
          borderRadius: '8px',
          textTransform: 'none',
        }}
      >
        {label}
      </MuiButton>
    </Box>
  );
};

export default CustomButton;
