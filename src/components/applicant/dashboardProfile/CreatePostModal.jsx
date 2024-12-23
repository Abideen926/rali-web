"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Modal,
  Typography,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageIcon from "@mui/icons-material/Image";
import MicIcon from "@mui/icons-material/Mic";
import SelectPostType from "./SelectPostType";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "790px",
  width: { xs: "90%" },
  height: "auto",
  bgcolor: "#FFFFFF",
  boxShadow: "0px 1px 5px #00000040",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
};

const CreatePostModal = ({ open, onClose }) => {
  const isPostType = ["Post", "Reels"];
  const [dropdownStates, setDropdownStates] = useState({
    postType: "",
  });
  const [inputValue, setInputValue] = useState("");
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const handleMediaChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const isReels = dropdownStates.postType === "Reels";
      const isVideo = file.type.startsWith("video/");
      const isImage = file.type.startsWith("image/");

      if (isReels && isVideo) {
        setMedia(file);
        setMediaPreview(URL.createObjectURL(file));
      } else if (!isReels && (isImage || isVideo)) {
        setMedia(file);
        setMediaPreview(URL.createObjectURL(file));
      } else {
        alert("Invalid file type. Please upload a video for Reels.");
      }
    }
  };

  const handlePost = () => {
    if (!dropdownStates.postType) {
      alert("Please select a post type.");
      return;
    }

    if (dropdownStates.postType === "Reels" && inputValue && !media) {
      alert("For Reels, a video is required.");
      return;
    }

    if (
      dropdownStates.postType === "Reels" &&
      media &&
      !media.type.startsWith("video/")
    ) {
      alert("For Reels, only videos are allowed.");
      return;
    }

    console.log({
      text: inputValue,
      media,
    });
    alert("Post submitted!");
    setInputValue("");
    setMedia(null);
    setMediaPreview(null);
  };

  const handleClose = () => onClose();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  width: 95,
                  height: 95,
                }}
              />
              <Box sx={{ px: 2 }}>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", lg: "20px" },
                    lineHeight: "16px",
                    fontWeight: 500,
                    color: "#00305B",
                  }}
                >
                  James Anderson
                </Typography>
                <SelectPostType
                  names={isPostType}
                  selectedValue={dropdownStates.postType}
                  onChange={(value) =>
                    setDropdownStates((prevState) => ({
                      ...prevState,
                      postType: value,
                    }))
                  }
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "63px",
              height: "63px",
              borderRadius: "50%",
              boxShadow: "0px 1px 5px #00000040",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <CloseIcon />
          </Box>
        </Box>
        <Divider sx={{ pt: 2 }} />

        <Box sx={{ mt: 2, mb: mediaPreview ? 2 : 0 }}>
          <TextField
            fullWidth
            placeholder="Write something..."
            multiline
            minRows={media ? 3 : 12}
            maxRows={12}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            // variant="standard"
            sx={{ paddingBottom: mediaPreview ? 0 : 2 }}
          />
        </Box>

        {mediaPreview && (
          <Box sx={{ mt: 2 }}>
            {media && media.type.startsWith("image/") ? (
              <img
                src={mediaPreview}
                alt="media preview"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  maxHeight: "400px",
                  objectFit: "cover",
                }}
              />
            ) : media && media.type.startsWith("video/") ? (
              <video
                src={mediaPreview}
                controls
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  maxHeight: "400px",
                }}
              />
            ) : null}
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                width: "63px",
                height: "63px",
                borderRadius: "50%",
                boxShadow: "0px 1px 5px #00000040",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <IconButton
                component="label"
                aria-label="Add Media"
                sx={{ width: "100%", height: "100%" }}
              >
                <ImageIcon />
                <input
                  type="file"
                  accept="image/*,video/*"
                  hidden
                  onChange={handleMediaChange}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                width: "63px",
                height: "63px",
                borderRadius: "50%",
                boxShadow: "0px 1px 5px #00000040",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <IconButton
                aria-label="Record Voice"
                sx={{ width: "100%", height: "100%" }}
              >
                <MicIcon />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePost}
              disabled={!inputValue && !media}
            >
              Post
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
