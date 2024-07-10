import React, { useState, ReactNode } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import AllAccounts from './AllAccounts/page';
import ActiveAccounts from './ActiveAccounts/page';
import InActiveAccounts from './InActiveAccounts/page';

interface TabData {
  label: string;
  id: string;
  component: ReactNode;
}

const Account: React.FC = () => {
  const initialTabs: TabData[] = [
    { label: 'ALL Accounts', id: 'accounts', component: <AllAccounts /> },
    { label: 'Active', id: 'active', component: <ActiveAccounts /> },
    { label: 'Inactive', id: 'inactive', component: <InActiveAccounts /> },
  ];

  const [activeTab, setActiveTab] = useState(initialTabs[0].id);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={activeTab} onChange={handleTabChange}
        indicatorColor="primary" textColor="primary"
        sx={{
          '& .MuiTabs-flexContainer': {   gap: '3px',},
          '& .MuiTab-root': {
            minWidth: 0, marginRight: '50px',
            paddingBottom: '4px',fontSize: '14px',
            fontWeight: 600,color: '#011627',
            textTransform: 'none',
          },
          '& .MuiTab-root.Mui-selected': {  color: '#00A991', },
          '& .MuiTabs-indicator': {
            backgroundColor: '#00A991',  height: '4px',
         borderRadius: '4px 4px 0 0',
          },
        }}
      >
        {initialTabs.map((tab) => (
          <Tab key={tab.id} label={tab.label} value={tab.id} />
        ))}
      </Tabs>
      <Box sx={{ padding: '16px' }}>
        {initialTabs.find(tab => tab.id === activeTab)?.component}
      </Box>
    </Box>
  );
};

export default Account;
