"use client"
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from '../../Components/SideBar';
import Header from '../../Components/Header';
import Profile from '../../Components/Profile';
import AnchorProfile from '../Pages/AnchorProfile/AnchorProfile';
import Application from '../Pages/Appllcations/Application';
import Accounts from '../Pages/Accounts/Accounts';

const theme = createTheme();

const Page = () => {
  const [activeItem, setActiveItem] = useState('HomeScreen'); 

  const handleSetActiveItem = (item: any) => {
    setActiveItem(item);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex min-h-screen">
        <Sidebar activeItem={activeItem} setActiveItem={handleSetActiveItem} />
        <main className="flex-1">
          <Header />
          <div className="p-8">
            {activeItem === 'Anchor Profile' ? <AnchorProfile /> :
             activeItem === 'Applications' ? <Application /> :
             activeItem === 'Accounts' ? <Accounts /> :
             <Profile />
            }
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Page;