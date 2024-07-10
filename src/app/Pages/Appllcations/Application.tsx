"use client"
import React, { useState } from 'react';
import { Typography, Box, MenuItem } from '@mui/material';
import Leads from './Lead/page';
import Image from 'next/image';
import Dropdown from '../../../Components/DropDown';
import ActionButtons from '../../../Components/ActionButton';
import CreateLead from './Components/Modal/CreateLead';
import UploadBulkLeads from './Components/Modal/UploadBulkLead';
import UploadBulkCaseFlows from './Components/Modal/UplaodBulkCaseFlow';

const metrics = [
  { label: 'Leads', value: 3 },
  { label: 'All Applications', value: 10 },
  { label: 'Approved Applications', value: 5 },
];

const Application: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState('Leads');
  const [modalState, setModalState] = useState({
    createLead: false,
    uploadBulkLeads: false,
    uploadBulkCaseFlows: false,
  });

  const menuItems = ['Create Lead', 'Upload Bulk Lead', 'Upload Bulk Case Flow'];

  const handleMetricClick = (label: string) => {
    setActiveMetric(label);
  };

  const handleModalToggle = (modalName: string, isOpen: boolean) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: isOpen,
    }));
  };

  return (
    <Box color="text.primary" position="relative">
      <Box display="flex" alignItems="center" justifyContent="space-between" marginBottom="16px">
        <Box display="flex" alignItems="center">
          {metrics.map((metric) => (
            <Box
              key={metric.label}
              onClick={() => handleMetricClick(metric.label)}
              style={{ cursor: 'pointer', marginRight: '32px' }}
            >
              <Typography
                variant="h6"
                style={{
                  fontWeight: 600,
                  color: metric.label === activeMetric ? '#00A991' : 'inherit',
                  fontSize: '14px',
                }}
              >
                {metric.label} {metric.label === activeMetric && `(${metric.value})`}
              </Typography>
            </Box>
          ))}
        </Box>

        {activeMetric === 'Leads' && (
          <Dropdown
            triggerElement={
              <ActionButtons
                type="button"
                label="Create"
                buttonColor="#00A991"
                actionButtons={<Image src="/Frame (26).png" width={16} height={16} alt="dropdown icon" />}
                style={{ borderRadius: '8px', padding: '12px 36px', width: '170px' }}
              />
            }
            menuStyle={{ width: '170px' }}
          >
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                onClick={() =>
                  handleModalToggle(
                    item === 'Create Lead' ? 'createLead' :
                    item === 'Upload Bulk Lead' ? 'uploadBulkLeads' :
                    'uploadBulkCaseFlows',
                    true
                  )
                }
                style={{ width: '170px' }}
              >
                <Typography sx={{ fontWeight: 500, fontSize: '12px' }}>{item}</Typography>
              </MenuItem>
            ))}
          </Dropdown>
        )}
      </Box>

      {activeMetric === 'Leads' && <Leads />}
      <CreateLead open={modalState.createLead} onClose={() => handleModalToggle('createLead', false)} />
      <UploadBulkLeads open={modalState.uploadBulkLeads} onClose={() => handleModalToggle('uploadBulkLeads', false)} />
      <UploadBulkCaseFlows open={modalState.uploadBulkCaseFlows} onClose={() => handleModalToggle('uploadBulkCaseFlows', false)} />
    </Box>
  );
};

export default Application;
