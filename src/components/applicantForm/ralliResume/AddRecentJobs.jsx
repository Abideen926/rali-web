'use client';
import React, { useState } from 'react';
import { Box, Button, Grid, Typography, TextField, FormControl, FormHelperText } from '@mui/material';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import CloseIcon from '@mui/icons-material/Close';

import { useWizard } from 'react-use-wizard';

import CustomButton from '@/components/button/CustomButton';
import CompleteDropdown from '@/components/applicant/applied/CompleteDropdown';
import FormTitle from '@/components/applicant/dashboard/FormTitle';

const AddRecentJobs = ({ data, onNext }) => {
      const { nextStep, previousStep } = useWizard();
    const [form, setForm] = useState({});

    const handleChange = (name, value) => {
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        onNext(form);
        nextStep(); 
    };

    const handleBack = () => {
        previousStep();
    };
    const handleClose = () => {
        previousStep()
    }

    return (
        <Box>
            <Box sx={{ width: { xs: '100%', sm: '100%' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: '15px', mb: '10px' }}>
                <Button onClick={handleBack} sx={{ minWidth: 0, p: 0 }}>
                    <ArrowCircleLeftRoundedIcon sx={{ color: '#00305B', fontSize: 32 }} />
                </Button>
            </Box>
            <Box>
                <Typography sx={{
                    fontSize: { xs: '10px', sm: '15px', md: '16px' },
                    fontWeight: 300,
                    lineHeight: { xs: '12px', sm: '20px', md: '25px', lg: '33px' },
                    color: "#111111",
                    pb: 2,
                }}>
                    {data.pages}
                </Typography>
                <FormTitle label={data?.title}/>
            </Box>

            {data?.form?.map((item) => (
                <Box key={item.name} sx={{ mb: '20px' }}>
                    <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '18px', color: '#222222', mb: '10px', textTransform: 'capitalize' }}>
                        {item?.title}
                    </Typography>
                    <Box
                        component="input"
                        sx={{
                            width: '100%',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 3px #00000040',
                            width: '100%',
                            border: 'none',
                            padding: '18px 20px',
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
            <Box >
                <CompleteDropdown />
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CompleteDropdown />
                </Grid>
                <Grid item xs={6}>
                    <CompleteDropdown />
                </Grid>
                <Grid item xs={6}>
                    <CompleteDropdown />
                </Grid>
                <Grid item xs={6}>
                    <CompleteDropdown />
                </Grid>
            </Grid>
            <Box sx={{ pb: 3 }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '18px', color: '#222222', mb: '10px', textTransform: 'capitalize' }}>
                Descriptions
                    </Typography>
                <TextField
                    // label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Enter a detailed description here..."
                    sx={{
                        width: '100%',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 3px #00000040',
                        '& .css-w4nesw-MuiInputBase-input-MuiOutlinedInput-input':{
                            border: 'none !important',
                            outline:'none',
                            color:'#222222',

                        },
                        '& .css-w4nesw-MuiInputBase-input-MuiOutlinedInput-input':{
                            border: 'none !important',
                            outline:'none',
                            color:'#222222',

                        },
                    }}
                />
            </Box>
            <CustomButton label="Save And Continue" onClick={handleNext} />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button sx={{
                    fontSize: { xs: '18px', sm: '21px', md: '26px' },
                    fontWeight: 600,
                    lineHeight: { xs: '20px', sm: '30px', md: '25px', lg: '20px' },
                    color: "#00305B",
                    textDecoration: 'underline',
                    mt: 2,
                    // pb: { xs: 3, md: 4, lg: 4.5 }
                    alignContent: 'center',
                    textAlign: 'center'
                }}>
                    Skip
                </Button>

            </Box>
        </Box>
    );
};

export default AddRecentJobs;
