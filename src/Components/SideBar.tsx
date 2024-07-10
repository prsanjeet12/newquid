import React, { useState } from 'react';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Box from '@mui/material/Box';

const drawerWidth = 220;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  minHeight: 64,
}));

interface SidebarProps {
  activeItem: string;
  setActiveItem: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem, setActiveItem }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Anchor Profile', icon: '/people.png' },
    { text: 'Applications', icon: '/document-copy.png' },
    { text: 'Accounts', icon: '/note-remove.png' },
    { text: 'Transactions', icon: '/bitcoin-convert.png' },
    { text: 'Collections', icon: '/direct-inbox.png' },
    { text: 'Lender', icon: '/Frame 2147223146 (4).png' },
  ];

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
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '20px' }} onClick={handleDrawerToggle}>
          <Image
            src="/Logo Icon.png"
            alt="Logo"
            width={40}
            height={40}
            style={{ marginRight: 8 }}
          />
          {open && (
            <Typography variant="h6" noWrap className='text-baseColor font-medium text-3xl'>
              QuID
            </Typography>
          )}
        </div>
        {open && (
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <div className='border-2 mt-4 border-[#364F57] px-2 py-2'>
              <Image
                src="/Vector (3).png"
                alt="menu"
                width={8}
                height={10}
              />
            </div>
          </IconButton>
        )}
      </DrawerHeader>
     
        <List className='' sx={{mt:5,
         marginLeft:'9px',
         
          width: open ? '204px' : '45px',
          transition: 'width 0.3s',
          

          }} >
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => setActiveItem(item.text)}
              sx={{
                borderRadius: '8px',
               
               
                backgroundColor: activeItem === item.text ? '#00A991' : 'transparent',
                '&:hover': { 
                  backgroundColor: '#00A991',
                  cursor: 'pointer'
                },
                padding: ''
              }}
            >
              <ListItemIcon sx={{ color: 'white' }}>
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={24}
                  style={{}}
                  height={24}
                 
                />
              </ListItemIcon>
              {open && (
                <ListItemText primary={item.text} sx={{ fontSize: '16px', color: '#FFFFFF' }} />
              )}
            </ListItem>
          ))}
        </List>
     
    </Drawer>
  );
};

export default Sidebar;