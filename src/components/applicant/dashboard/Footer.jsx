import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer = ({ data }) => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: 'auto',
                backgroundColor: '#00305B',
                py: '30px'
            }}>
            <Box sx={{
                maxWidth: '1289.48px',
                margin:'0px auto',
                textAlign:'center',
                alignItems:'center'
            }}>
                <Grid container spacing={0}>
                    {
                        data?.map((item, index) => (
                            <Grid item key={index} xs={12} sm={6} md={3} lg={1.6}
                            sx={{ py:{xs:'10px', lg:'0px'}}}
                            >
                                <Typography sx={{
                                    fontSize:'14px !important',
                                    lineHeight:'18px',
                                    fontWeight: 400,
                                    color:'#fff'
                                }}>
                                    {item?.title}
                                </Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Footer
