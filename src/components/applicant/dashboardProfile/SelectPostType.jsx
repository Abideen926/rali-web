import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Typography } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function SelectPostType({ names, label, selectedValue, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <>
           {label && <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    py: 1,
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
            </Box>}
            <FormControl
                sx={{
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: '18px',
                    color: '#222222'
                }}
            >
                <Select
                    sx={{
                        textDecoration: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 'none' ,
                         },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none', 
                         },
                        '.css-1u4kwaj-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': {
                        pt:1,
                        pb:1,
                        },
                        fontSize: '16px',
                        color: '#222222',
                        padding:0
                    }}
                    displayEmpty
                    value={selectedValue}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (!selected) {
                            return <em>Post Type</em>;
                        }
                        return selected;
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="" sx={{ color: '#222222' }}>
                        <em>Select Item</em>
                    </MenuItem>
                    {names?.map((name) => (
                        <MenuItem key={name} value={name} sx={{ color: '#222222', }}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}

