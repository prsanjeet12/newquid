import React, { ReactNode } from 'react';
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

const CardContainer = styled('div')(({ theme }) => ({
  padding: '16px',
  borderRadius: '16px',
  border: '2px solid #D9DCDF',
  overflow: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: '12px',
  },
  [theme.breakpoints.down('xs')]: {
    padding: '8px',
  },
}));

const CardTitle = styled(Typography)({
  fontWeight: 600,
  color: '#000',
  marginBottom: '8px',
  fontSize: '15px',
});

const Divider = styled('div')({
  width: '100%',
  height: '1px',
  backgroundColor: '#DCE0E1',
  marginBottom: '8px',
});

interface CardProps {
  title: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => (
  <CardContainer>
    <CardTitle>{title}</CardTitle>
    <Divider />
    {children}
  </CardContainer>
);

export default Card;