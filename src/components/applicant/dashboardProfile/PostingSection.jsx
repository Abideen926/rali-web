"use client";

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ModalRalli from "./ModalRalli";

const PostingSection = ({
  data,
  onLike,
  commentIndex,
  commentText,
  onCommentClick,
  onCommentChange,
  onCommentSubmit,
  onSend,
  isShareModalOpen,
  setIsShareModalOpen,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const [open, setOpen] = useState(false);

  const handleModalRalliOpen = () => setOpen(true);
  const handleClose = () => setIsShareModalOpen(false)

  const handleProfileMenuOpen = (event) => {
    console.log("invoked");
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <ShareIcon
          sx={{
            color: "#111111",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "#111111",
            px: "10px",
          }}
        >
          Share Via
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <VisibilityOffIcon
          sx={{
            color: "#111111",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "#111111",
            px: "10px",
          }}
        >
          I Dont Want To Se This
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <PermIdentityIcon
          sx={{
            color: "#111111",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "#111111",
            px: "10px",
          }}
        >
          Unfollow JamesAnderson
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <ContentPasteIcon
          sx={{
            color: "#111111",
          }}
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "18px",
            color: "#111111",
            px: "10px",
          }}
        >
          Report
        </Typography>
      </MenuItem>
    </Menu>
  );
  return (
    <Box>
      {data?.map((item, index) => (
        <Box
          key={index}
          sx={{
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 1px 3px #00000040",
            px: 2,
            py: 2,
            my: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt={item?.userName}
                  src={item?.userProfile}
                  sx={{
                    width: 49,
                    height: 49,
                  }}
                />
                <Box sx={{ px: 2 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", lg: "16px" },
                      lineHeight: "16px",
                      fontWeight: 600,
                      color: "#222222",
                    }}
                  >
                    {item?.userName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", lg: "14px" },
                      lineHeight: "21px",
                      fontWeight: 400,
                      color: "#222222",
                    }}
                  >
                    u/dadjokes 18h
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <MoreVertRoundedIcon
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={handleProfileMenuOpen}
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontSize: { xs: "14px", lg: "16px" },
                lineHeight: "18px",
                fontWeight: 500,
                color: "#222222",
                py: 1.5,
              }}
            >
              {item?.postTitle}
            </Typography>
            {item?.postImage && (
              <Box
                component="img"
                sx={{}}
                src={item?.postImage}
                width={"100%"}
                height={"100%"}
              />
            )}
          </Box>
          <Box
            sx={{
              py: 1,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button
              onClick={() => onLike(index)}
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "16px" },
                lineHeight: "17px",
                fontWeight: 300,
                color: "#222222",
                border: "none",
                boxShadow: "0px 1px 3px #00000040",
                borderRadius: { xs: "10px", sm: "20px", md: "30px" },

                minWidth: { xs: "60px", sm: "100px", lg: "170px" },
                py: 1,
              }}
              startIcon={<ThumbUpOffAltIcon />}
            >
              {item?.likes || 0}
            </Button>
            <Button
              onClick={() => onCommentClick(index)}
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "16px" },

                lineHeight: "17px",
                fontWeight: 300,
                color: "#222222",
                border: "none",
                boxShadow: "0px 1px 3px #00000040",
                borderRadius: { xs: "10px", sm: "20px", md: "30px" },

                minWidth: { xs: "60px", sm: "100px", lg: "170px" },
                py: 1,
              }}
              startIcon={<ChatBubbleOutlineIcon />}
            >
              Comment
            </Button>
            <Button
              onClick={() => onSend(index)}
              sx={{
                fontSize: { xs: "8px", sm: "10px", md: "12px", lg: "16px" },

                lineHeight: "17px",
                fontWeight: 300,
                color: "#222222",
                border: "none",
                boxShadow: "0px 1px 3px #00000040",
                borderRadius: { xs: "10px", sm: "20px", md: "30px" },
                minWidth: { xs: "60px", sm: "100px", lg: "170px" },
                py: 1,
              }}
              startIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
          {commentIndex === index && (
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                value={commentText}
                onChange={onCommentChange}
                placeholder="Write your comment..."
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "10px",
                    color: "#222222",
                  },
                }}
              />
              <Button
                onClick={() => onCommentSubmit(index)}
                sx={{
                  mt: 1,
                  fontSize: { xs: "14px", lg: "16px" },
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#FE4D82",
                  borderRadius: "30px",
                  px: 4,
                  py: 1,
                }}
              >
                Submit
              </Button>
            </Box>
          )}
        </Box>
      ))}
      {renderMenu}
      <ModalRalli
        open={isShareModalOpen}
        onClose={handleClose}
        isShareModalOpen={isShareModalOpen}
      />
    </Box>
  );
};

export default PostingSection;
