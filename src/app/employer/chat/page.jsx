'use client';
import React, { useState } from 'react';
import { Box, Grid, useMediaQuery } from '@mui/material';

import { EMPLOYER_NAVBAR_DATA } from "@/constant/employer/navbar";
import { CHAT_ITEMS } from '@/constant/applicant/chat';

import EmployerNavbar from "@/components/employer/employerNavbar/EmployerNavbar";
import Container from '@/components/common/Container';
import MessageItems from '@/components/applicant/chatComponent/MessageItems';
import OpendMessages from '@/components/applicant/chatComponent/OpendMessages';
import RalliDrawer from '@/components/common/Drawer/RalliDrawer';

const Page = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [chatData, setChatData] = useState(CHAT_ITEMS);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const handleSelect = (userId) => {
    setSelectedId(userId);
  };

  const handleSendMessage = (userId, newMessage) => {
    const updatedChats = chatData.map((chat) => {
      if (chat.userId === userId) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            { sender: 'You', text: newMessage, time: new Date().toLocaleTimeString() },
          ],
          lastMessage: newMessage,
          lastDateChat: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }),
        };
      }
      return chat;
    });
    setChatData(updatedChats);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box>
    <EmployerNavbar data={EMPLOYER_NAVBAR_DATA} />
      {isSmallScreen && (
        <RalliDrawer
          data={chatData}
          selectedId={selectedId}
          onSelect={handleSelect}
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        />
      )}
      <Container>
        <Grid container spacing={2}>
          {!isSmallScreen && (
            <Grid item xs={4} md={4}>
              <Box
                sx={{
                  minHeight: '800px',
                  maxHeight: '800px',
                  borderRadius: '10px',
                  backgroundColor: '#FFFFFF',
                  boxShadow: '0px 1px 3px #00000040',
                  px: 2,
                  py: 2,
                  my: 2,
                }}
              >
                <MessageItems data={chatData} selectedId={selectedId} onSelect={handleSelect} />
              </Box>
            </Grid>
          )}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                minHeight: '800px',
                maxHeight: '800px',
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 1px 3px #00000040',
                px: 2,
                py: 2,
                my: 2,
              }}
            >
              <OpendMessages
                selectedId={selectedId}
                data={chatData}
                onSendMessage={handleSendMessage}
                toggleDrawer={toggleDrawer}  
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Page;
