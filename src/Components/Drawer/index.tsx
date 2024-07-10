import React from 'react';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';

const drawerWidth = 220;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  minHeight: 64,
}));

interface CustomDrawerProps {
  open: boolean;
  onToggle: () => void;
  logoSrc: string;
  logoAlt: string;
  headerText: string;
  children: React.ReactNode;
}

const SideDrawer: React.FC<CustomDrawerProps> = ({
  open,
  onToggle,
  logoSrc,
  logoAlt,
  headerText,
  children,
}) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? drawerWidth : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : 70,
          backgroundColor: '#133039',
          borderRadius: '0px 32px 32px 0px',
          color: 'white',
          overflowX: 'hidden',
          transition: 'width 0.3s',
        },
      }}
    >
      <DrawerHeader>
        <div
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '20px' }}
          onClick={onToggle}
        >
          <Image src={logoSrc} alt={logoAlt} width={40} height={40} style={{ marginRight: 8 }} />
          {open && (
            <Typography variant="h6" noWrap className="text-baseColor font-medium text-3xl">
              {headerText}
            </Typography>
          )}
        </div>
        {open && (
          <IconButton onClick={onToggle} sx={{ color: 'white' }}>
            <div className="border-2 mt-4 border-[#364F57] px-2 py-2">
              <Image src="/Vector (3).png" alt="menu" width={8} height={10} />
            </div>
          </IconButton>
        )}
      </DrawerHeader>
      <div>{children}</div>
    </Drawer>
  );
};

export default SideDrawer;
