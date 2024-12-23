import React from "react";
import { Modal, Box } from "@mui/material";
import { SHARE_YOUR_FEED } from "@/constant/applicant/feed";
import SharePost from "./SharePost";
import ChangePassword from "../profile/ChangePassword";
import PasswordChangeContainer from "../forgetPassword/PasswordChangeContainer";

const ModalRalli = ({
  open,
  onClose,
  isShareModalOpen,
  isChangePasswordModalOpen,
  isForgetPasswordModalOpen
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          width: "100%",
          maxWidth:'1260px',
          height: "auto",
          borderRadius: 2,
        }}
      >
        <Box sx={{}}>
          {isShareModalOpen && (
            <SharePost data={SHARE_YOUR_FEED} handleClose={onClose} />
          )}
          {isChangePasswordModalOpen && (
            <ChangePassword handleClose={onClose} />
          )}
          {isForgetPasswordModalOpen && (
            <PasswordChangeContainer handleClose={onClose} />
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalRalli;
