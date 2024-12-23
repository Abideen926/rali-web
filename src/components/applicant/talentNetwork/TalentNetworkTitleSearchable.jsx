import React from 'react'
import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";

const TalentNetworkTitleSearchable = ({label}) => {
  return (
    <Box
        sx={{
          display: "flex",
          flexDirection:{xs:'column', lg:'row'},
          justifyContent:{lg:'space-between'},
          alignItems: "center",
        }}
      >
       {label && <Box sx={{
              width:'auto'
        }}>
          <Typography
            sx={{
              fontSize:{xs:'22px',md:'26px',lg:"30px"},
              lineHeight: "18px",
              fontWeight: 600,
              color: "#00305B",
            }}
          >
           {label}
          </Typography>
        </Box>}
        <Box
          sx={{
            width:{xs:'100%',
                lg: label ? '515.55px' : '100%',
            },
            display: "flex",
            alignItems: "center",
            gap: 0,
            padding: 0,
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0px 1px 5px #00000040",
            height: "60.58px",
            border: "none",
            outline: "none",
            my: 2,
          }}
        >
          <TextField
            variant="standard"
            fullWidth
            placeholder="Type A Name"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#757575" }} />
                </InputAdornment>
              ),
              style: {
                color: "#222222",
                fontSize: "16px",
                lineHeight: "18px",
                fontWeight: 250,
              },
            }}
            sx={{
              flex: 1,
              padding: "10px 15px",
              border: "none",
              outline: "none",
            }}
          />
          <Box
            sx={{
              width: "1px",
              height: "30px",
              backgroundColor: "#ccc",
            }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              padding: "0px 25px",
              borderRadius: "0px 10px 10px 0px",
              height: "100%",
              fontSize: "16px",
              lineHeight: "18px",
              fontWeight: 700,
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
  )
}

export default TalentNetworkTitleSearchable
