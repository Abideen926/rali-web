import Link from 'next/link';
import React from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '../common/Container';
import { SPLASH_SCREEN_DATA } from '@/constant/spalsh';

const SplashScreen = () => {
  const data = SPLASH_SCREEN_DATA;

  const renderList = (items) => (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} sx={{ pl: 0 }}>
          <Link href={item.link} passHref>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    color: '#FFF',
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#FE4D82',
                    },
                  }}
                >{`• ${item.label}`}</Typography>
              }
            />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              width: '100%',
              backgroundColor: '#00305B',
              padding: 2,
              borderRadius: 2,
              minHeight: '900px',
              maxHeight: '900px',
              overflowY: 'scroll',
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
            }}
          >
            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: '#FFF', marginBottom: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FE4D82' }} />} aria-controls="panel1-content" id="panel1-header">
                <Typography sx={{ flex: 1, fontWeight: 'bold', color: '#FE4D82' }}>{data.loginTypeTitle}</Typography>
              </AccordionSummary>
              <AccordionDetails>{renderList(data.loginType)}</AccordionDetails>
            </Accordion>

            <Box sx={{ marginBottom: 2, borderBottom: '1px solid #FE4D82' }} />

            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: '#FFF', marginBottom: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FE4D82' }} />} aria-controls="panel2-content" id="panel2-header">
                <Typography sx={{ flex: 1, fontWeight: 'bold', color: '#FE4D82' }}>{data.helpCenterTitle}</Typography>
              </AccordionSummary>
              <AccordionDetails>{renderList(data.helpCenter)}</AccordionDetails>
            </Accordion>

            <Box sx={{ marginBottom: 2, borderBottom: '1px solid #FE4D82' }} />

            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: '#FFF', marginBottom: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FE4D82' }} />} aria-controls="panel3-content" id="panel3-header">
                <Typography sx={{ flex: 1, fontWeight: 'bold', color: '#FE4D82' }}>{data.diversityTitle}</Typography>
              </AccordionSummary>
              <AccordionDetails>{renderList(data.diversityItems)}</AccordionDetails>
            </Accordion>

            <Box sx={{ marginBottom: 2, borderBottom: '1px solid #FE4D82' }} />

            <Accordion sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: '#FFF', marginBottom: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#FE4D82' }} />} aria-controls="panel4-content" id="panel4-header">
                <Typography sx={{ flex: 1, fontWeight: 'bold', color: '#FE4D82' }}>{data.toolikitsTitle}</Typography>
              </AccordionSummary>
              <AccordionDetails>{renderList(data.toolkitItems)}</AccordionDetails>
            </Accordion>

            <Box sx={{ marginBottom: 2, borderBottom: '1px solid #FE4D82' }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <Box
                component="img"
                src="/assets/images/splash.png"
                width={200}
                height={180}
                alt="splash-img"
                sx={{
                  '@media (max-width: 1024px)': {
                    width: '180px',
                    height: '180px',
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplashScreen;
