import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import CustomButton from '../button/CustomButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '790px',
    width: { xs: '90%' },
    height: 'auto',
    bgcolor: '#FFFFFF',
    boxShadow: "0px 1px 5px #00000040",
    boxShadow: 24,
    p: 4,
    borderRadius: '15px'
};
const RalliModal = ({ open, onClose, para, title, imageSrc ,buttonLabel, onClick={onClick}}) => {
    const handleClose = () => onClose();
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    py: 4.5
                }}>
                    {title && <Typography id="modal-modal-title" variant="h6" component="h2"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '12px', sm: '16px', md: '20px', lg: '26px' },
                            lineHeight: { xs: '12px', sm: '16px', md: '20px', lg: '18px' },
                            color: '#222222',
                            py: 2
                        }}>
                        {title}
                    </Typography>}
                    {imageSrc && <Box sx={{ py: 2 }}>
                        <Image src={imageSrc} width={65} height={65} alt='done' />
                    </Box>}
                    {para && <Typography id="modal-modal-description" sx={{
                        fontSize: { xs: '12px', sm: '14px', md: '16px' },
                        fontWeight: 400,
                        lineHeight: { lg: '26px' },
                        color: "#111111",
                        textAlign: 'center',
                        px: { md: '30px' },
                        maxWidth:{md:'6  00px'},
                        py: 2
                    }}>
                        {para}
                    </Typography>}
                    <CustomButton label={buttonLabel} onClick={onClick} />
                </Box>
            </Box>
        </Modal>
    );
}
export default RalliModal