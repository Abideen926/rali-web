import React from 'react';
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

export default function CompleteDropdown({ names, label, selectedValue, onChange }) {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <>
            <Box
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
            </Box>
            <FormControl
                sx={{
                    width: '100%',
                    boxShadow: '0px 1px 5px #00000040',
                    borderRadius: '10px',
                    fontSize: '16px',
                    fontWeight: 300,
                    lineHeight: '18px',
                    color: '#222222',
                    my: 1,
                }}
            >
                <Select
                    sx={{
                        textDecoration: 'none',
                        border: 'none',
                        boxShadow: 'none',
                        '.MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: 'none' },
                        '.css-1u4kwaj-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': {
                            paddingTop: '12px',
                            paddingBottom: '15px',
                        },
                        fontSize: '16px',
                        color: '#222222',
                    }}
                    displayEmpty
                    value={selectedValue}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (!selected) {
                            return <em>Select item</em>;
                        }
                        const selectedItem = names.find((item) => item.id === selected);
                        return selectedItem ? selectedItem.name : selected;
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="" sx={{ color: '#222222' }}>
                        <em>Select Item</em>
                    </MenuItem>
                    {names?.map((item) => (
                        <MenuItem key={item.id} value={item.id} sx={{ color: '#222222' }}>
                            {item.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
}
