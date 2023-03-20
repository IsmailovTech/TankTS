// import { useTranslation } from 'npm i @mui/icons-material';
import React from 'react';
import { Grid, Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import HeaderHero from './top_components/HeaderHero';
import Features from './top_components/Features';
import Footer from './top_components/Footer';
import Pricing from './top_components/Pricing';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box>
      <Grid justifyContent={'center'} direction="column" >
        <Grid xs={12}>
          <Item>
            <HeaderHero />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <Features />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <Pricing />
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <Footer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}