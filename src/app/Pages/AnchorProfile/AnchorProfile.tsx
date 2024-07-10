"use client"
import React from 'react';
import { styled } from '@mui/system';
import TopLayout from './Components/TopLayout';
import BottomLayout from './Components/BottomLayout';

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: '1fr',
  gap: '16px',
  height: '100%',
});

const Title = styled('div')({
  fontSize: '24px',
  fontWeight: 600,
  lineHeight: '36px',
  textAlign: 'left',
  margin: '2px',
});


const Layout: React.FC = () => {
  return (
    <Container>
      <Title>Anchor Profile</Title>
      <TopLayout  />
      <BottomLayout  />
    </Container>
  );
};

export default Layout;
