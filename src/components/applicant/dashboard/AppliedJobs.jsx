'use client'
import React, { useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const AppliedJobs = ({ data }) => {
    const [showRequirements, setShowRequirements] = useState(false);

    const labels = {
        0.5: '4.5',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: '4.5',
        4: 'Good+',
        4.5: 'Excellent',
        5: '4.5',
    };
    const value = 5;

    const MAX_LENGTH = 200;
    const fullDescription = data?.jobDataDetails?.jobsDescription || '';
    const shortDescription = fullDescription.length > MAX_LENGTH
        ? `${fullDescription.substring(0, MAX_LENGTH)}...`
        : fullDescription;

    return (
        <Box sx={{
            borderRadius: '10px',
            boxShadow: "0px 1px 5px #00000040",
            backgroundColor: '#FFFFFF',
            mx: { lg: '55px', },
            mt: '60px',
        }}>
            <Box sx={{
                my: 2,
                px: { xs: '15px', sm: '20px', md: '30px' },
                py: 1.5,
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: '10px' }}>
                    <Typography sx={{
                        fontSize: { xs: '18px', sm: '21px', md: '24px' },
                        fontWeight: 500,
                        lineHeight: { xs: '25px', sm: '30px', md: '25px', lg: '20px' },
                        color: "#111111"
                    }}>
                        {data?.applyNowSections?.title}
                    </Typography>
                </Box>
                <Box sx={{ py: '10px', display: 'flex' }}>
                    <Button sx={{
                        backgroundColor: '#FDF7F7',
                        border: '0.4px solid #0000004D',
                        borderRadius: '6px',
                        color: '#222222',
                        fontSize: { xs: '8px', sm: '14px', md: '16px' },
                        fontWeight: 400,
                        lineHeight: { xs: '8px', sm: '16px', md: '18px' },
                        textAlign: 'center',
                        p: '7px',
                        py: { xs: '10px' }
                    }}>
                        {data?.applyNowSections?.companyName}
                        <ArrowOutwardIcon
                            sx={{
                                fontSize: { xs: '12px', sm: '14px', md: '25px' },
                            }}
                        />
                    </Button>
                    <Box
                        sx={{
                            width: 200,
                            display: 'flex',
                            alignItems: 'center',
                            padding: '4px',
                        }}
                    >
                        <Typography
                            sx={{
                                mr: 0.5,
                                ml: 1.5,
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '18px',
                                color: '#00305B',
                            }}
                        >
                            {labels[value]}
                        </Typography>
                        <Rating
                            name="text-feedback"
                            value={value}
                            readOnly
                            precision={0.5}
                            sx={{
                                fontSize: '12px',
                            }}
                            emptyIcon={
                                <StarIcon
                                    sx={{
                                        opacity: 0.55,
                                    }}
                                />
                            }
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', pt: 1 }}>
                    <LocationOnRoundedIcon sx={{ width: '18px' }} />
                    <Typography sx={{
                        fontSize: { xs: '12px', sm: '14px', md: '16px' },
                        fontWeight: 500,
                        lineHeight: '20px',
                        color: "#00305B",
                        pl: '5px',
                        pr: '12px'
                    }}>
                        Location
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: '12px', sm: '14px', md: '15px' },
                        fontWeight: 300,
                        lineHeight: '16px',
                        color: "#333333"
                    }}>
                     {data?.applyNowSections?.location}

                    </Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{
                my: 2,
                px: { xs: '15px', sm: '20px', md: '30px' },
                py: 1.5,
            }}>
                <Typography sx={{
                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                    fontWeight: 700,
                    lineHeight: { xs: '25px', sm: '30px', md: '25px', lg: '18px' },
                    color: "#00305B",
                    py: 1
                }}>
                    Job Description
                </Typography>
                <Typography sx={{
                    fontSize: { xs: '12px', sm: '14px', md: '15px' },
                    fontWeight: 400,
                    lineHeight: { md: '26px', lg: '26px' },
                    color: "#333333",
                    py: 1
                }}>
                    {showRequirements ? fullDescription : shortDescription}
                </Typography>

                {fullDescription.length > MAX_LENGTH && (
                    <Button
                        sx={{
                            width: '100%',
                            backgroundColor: '#FE4D82',
                            color: '#FFF',
                            borderRadius: '6px'
                        }}
                        onClick={() => setShowRequirements(!showRequirements)}
                    >
                        {showRequirements ? 'Less Description' : 'View Full Job Description'}
                        {showRequirements ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </Button>
                )}
            </Box>
        </Box>
        // API WORKS
        // <Box sx={{
        //     borderRadius: '10px',
        //     boxShadow: "0px 1px 5px #00000040",
        //     backgroundColor: '#FFFFFF',
        //     mx: { lg: '55px', },
        //     mt: '60px',
        // }}>
        //     <Box sx={{
        //         my: 2,
        //         px: { xs: '15px', sm: '20px', md: '30px' },
        //         py: 1.5,
        //     }}>
        //         <Box sx={{ display: 'flex', justifyContent: 'space-between', py: '10px' }}>
        //             <Typography sx={{
        //                 fontSize: { xs: '18px', sm: '21px', md: '24px' },
        //                 fontWeight: 500,
        //                 lineHeight: { xs: '25px', sm: '30px', md: '25px', lg: '20px' },
        //                 color: "#111111"
        //             }}>
        //                 {data?.title}
        //             </Typography>
        //         </Box>
        //         <Box sx={{ py: '10px', display: 'flex' }}>
        //             <Button sx={{
        //                 backgroundColor: '#FDF7F7',
        //                 border: '0.4px solid #0000004D',
        //                 borderRadius: '6px',
        //                 color: '#222222',
        //                 fontSize: { xs: '8px', sm: '14px', md: '16px' },
        //                 fontWeight: 400,
        //                 lineHeight: { xs: '8px', sm: '16px', md: '18px' },
        //                 textAlign: 'center',
        //                 p: '7px',
        //                 py: { xs: '10px' }
        //             }}>
        //                 {`${data?.employer?.first_name} ${data?.employer?.middle_name
        //                     } ${data?.employer?.last_name}`}
        //                 <ArrowOutwardIcon
        //                     sx={{
        //                         fontSize: { xs: '12px', sm: '14px', md: '25px' },
        //                     }}
        //                 />
        //             </Button>
        //             <Box
        //                 sx={{
        //                     width: 200,
        //                     display: 'flex',
        //                     alignItems: 'center',
        //                     padding: '4px',
        //                 }}
        //             >
        //                 <Typography
        //                     sx={{
        //                         mr: 0.5,
        //                         ml: 1.5,
        //                         fontWeight: 500,
        //                         fontSize: '14px',
        //                         lineHeight: '18px',
        //                         color: '#00305B',
        //                     }}
        //                 >
        //                     {labels[value]}
        //                 </Typography>
        //                 <Rating
        //                     name="text-feedback"
        //                     value={value}
        //                     readOnly
        //                     precision={0.5}
        //                     sx={{
        //                         fontSize: '12px',
        //                     }}
        //                     emptyIcon={
        //                         <StarIcon
        //                             sx={{
        //                                 opacity: 0.55,
        //                             }}
        //                         />
        //                     }
        //                 />
        //             </Box>
        //         </Box>
        //         <Box sx={{ display: 'flex', alignItems: 'center', pt: 1 }}>
        //             <LocationOnRoundedIcon sx={{ width: '18px' }} />
        //             <Typography sx={{
        //                 fontSize: { xs: '12px', sm: '14px', md: '16px' },
        //                 fontWeight: 500,
        //                 lineHeight: '20px',
        //                 color: "#00305B",
        //                 pl: '5px',
        //                 pr: '12px'
        //             }}>
        //                 Location
        //             </Typography>
        //             <Typography sx={{
        //                 fontSize: { xs: '12px', sm: '14px', md: '15px' },
        //                 fontWeight: 300,
        //                 lineHeight: '16px',
        //                 color: "#333333"
        //             }}>
        //                 {`${data?.job_location?.name}, ${data?.country?.name
        //                     }, ${data?.city?.name}`}
        //             </Typography>
        //         </Box>
        //     </Box>
        //     <Divider />
        //     <Box sx={{
        //         my: 2,
        //         px: { xs: '15px', sm: '20px', md: '30px' },
        //         py: 1.5,
        //     }}>
        //         <Typography sx={{
        //             fontSize: { xs: '14px', sm: '16px', md: '18px' },
        //             fontWeight: 700,
        //             lineHeight: { xs: '25px', sm: '30px', md: '25px', lg: '18px' },
        //             color: "#00305B",
        //             py: 1
        //         }}>
        //             Job Description
        //         </Typography>
        //         <Typography sx={{
        //             fontSize: { xs: '12px', sm: '14px', md: '15px' },
        //             fontWeight: 400,
        //             lineHeight: { md: '26px', lg: '26px' },
        //             color: "#333333",
        //             py: 1
        //         }}>
        //             {data?.description}
        //         </Typography>
        //         <Button
        //             sx={{
        //                 width: '100%',
        //                 backgroundColor: '#FE4D82',
        //                 color: '#FFF',
        //                 borderRadius: '6px'
        //             }}
        //             onClick={() => setShowRequirements(!showRequirements)}
        //         >
        //             {showRequirements ? 'Less Description' : 'View Full Job Description'}
        //             {showRequirements ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        //         </Button>
        //         {showRequirements && (
        //             <>
        //                 <Typography sx={{
        //                     fontSize: { xs: '14px', sm: '16px', md: '18px' },
        //                     fontWeight: 700,
        //                     lineHeight: { xs: '25px', sm: '30px', md: '25px', lg: '18px' },
        //                     color: "#00305B",
        //                     py: 1,
        //                 }}>
        //                     Job Requirements
        //                 </Typography>
        //                 <Typography sx={{
        //                     fontSize: { xs: '12px', sm: '14px', md: '15px' },
        //                     fontWeight: 400,
        //                     lineHeight: { md: '26px', lg: '26px' },

        //                     color: "#333333",
        //                     py: 1
        //                 }}>
        //                     {data?.requirements}
        //                 </Typography>
        //             </>
        //         )}
        //     </Box>
        // </Box>
    );
};

export default AppliedJobs;
