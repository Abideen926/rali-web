import React from 'react'
import { Box, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'


const FormCheckbox = ({ handleCheckboxChange, selectedOption, label, NoAnswer }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    // py: 3,
                    pt:2
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: '12px', sm: '14px', md: '16px' },
                        fontWeight: 500,
                        lineHeight: { xs: '25px', sm: '30px', md: '24px', lg: '18px' },
                        color: '#222222',
                    }}
                >
                    {label && label}
                </Typography>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    boxShadow: '0px 1px 5px #00000040',
                    padding: '5px 0px',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: '18px',
                    color: '#222222',
                    my: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        px: 2,
                    }}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedOption === 'Yes'}
                                onChange={() => handleCheckboxChange('Yes')}
                                sx={{color:'#FE4D82'}}
                            />
                        }
                        label="Yes"
                        sx={{
                            fontWeight: 700,
                            color: "#111111",
                            '.css-54c5wf-MuiTypography-root': {
                            fontSize: { xs: '8px ', sm: '12px',md:'16px', lg: '19px' },
                            lineHeight: { xs: '10px ', sm: '10px', md: '20px', lg: '28px' },
                        },
                        '.css-1kkxg6p-MuiButtonBase-root-MuiCheckbox-root':{
                             fontSize: { xs: '8px', sm: '12px', lg: '19px' },
                             padding: { xs: '0px', md: '10px' },
                        }  
                        }}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={selectedOption === 'No'}
                                onChange={() => handleCheckboxChange('No')}
                                sx={{color:'#FE4D82'}}
                            />
                        }
                        label="No"
                        sx={{
                            fontWeight: 700,
                            color: "#111111",
                            '.css-54c5wf-MuiTypography-root': {
                            fontSize: { xs: '8px ', sm: '12px',md:'16px', lg: '19px' },
                            lineHeight: { xs: '10px ', sm: '10px', md: '20px', lg: '28px' },
                        },
                        '.css-1kkxg6p-MuiButtonBase-root-MuiCheckbox-root':{
                             fontSize: { xs: '8px', sm: '12px', lg: '19px' },
                             padding: { xs: '0px', md: '10px' },
                        }  
                        }}
                    />
                    {NoAnswer && (
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={selectedOption === 'No Answer'}
                                    onChange={() => handleCheckboxChange('No Answer')}
                                    sx={{color:'#FE4D82'}}
                                />
                            }
                            label="Do Not Wish To Answer"
                            sx={{
                                fontWeight: 700,
                                color: "#111111",
                                '.css-54c5wf-MuiTypography-root': {
                                fontSize: { xs: '8px ', sm: '12px',md:'16px', lg: '19px' },
                                lineHeight: { xs: '10px ', sm: '10px', md: '20px', lg: '28px' },
                            },
                            '.css-1kkxg6p-MuiButtonBase-root-MuiCheckbox-root':{
                                 fontSize: { xs: '8px', sm: '12px', lg: '19px' },
                                 padding: { xs: '0px', md: '10px' },
                            }  
                            }}
                        />
                    )}
                </Box>
            </Box>
        </>
    );
};


export default FormCheckbox
