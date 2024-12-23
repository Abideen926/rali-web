"use client";
import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { ADD_TO_YOUR_FEED, POSTING_ITEM } from "@/constant/applicant/feed";
import AboutSection from "./AboutSection";
import FollowProfile from "./FollowProfile";
import PostingTabs from "./PostingTabs";
import CreatePostModal from "./CreatePostModal";

const DashboardProfile = ({ data }) => {
  const handleLike = (postIndex) => {
    console.log(`Liked post at index ${postIndex}`);
  };

  const [commentIndex, setCommentIndex] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const [likedProfiles, setLikedProfiles] = useState({});
  const [openModal, setOpenModal] = useState(false); 

  const handleOpen = () => {
    setOpenModal(true);

  };
  const handleModalRalliOpen = () => {
    setIsShareModalOpen(true)
  };
  console.log(open, 'open')

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleLikeToggle = (index) => {
    setLikedProfiles((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleCommentClick = (index) => {
    if (commentIndex === index) {
      setCommentIndex(null);
    } else {
      setCommentIndex(index);
    }
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (index) => {
    console.log(`Comment on post ${index}: ${commentText}`);
    setCommentText("");
    setCommentIndex(null);
  };

  const handleSend = (postIndex) => {
    console.log(`Send post at index ${postIndex}`);
    handleModalRalliOpen()
  };

  return (
    <Box sx={{ px: "25px", maxWidth: "1260px", margin: "25px auto" }}>
      <Grid container spacing={2}>
        <Grid
          item
          md={3}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <AboutSection data={data} />
        </Grid>
        <Grid item xs={12} md={5.7}>
          <PostingTabs 
             data={POSTING_ITEM}
             onLike={handleLike}
             commentIndex={commentIndex}
             commentText={commentText}
             onCommentClick={handleCommentClick}
             onCommentChange={handleCommentChange}
             onCommentSubmit={handleCommentSubmit}
             onSend={handleSend}
             setIsShareModalOpen={setIsShareModalOpen}
             isShareModalOpen={isShareModalOpen}
          />
          <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              Create Post
            </Button>
          </Box>
          
          <CreatePostModal open={openModal} onClose={handleClose} />
        </Grid>
        <Grid
          item
          md={3.3}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <FollowProfile
            data={ADD_TO_YOUR_FEED}
            likedProfiles={likedProfiles}
            setLikedProfiles={setLikedProfiles}
            handleLikeToggle={handleLikeToggle}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardProfile;
