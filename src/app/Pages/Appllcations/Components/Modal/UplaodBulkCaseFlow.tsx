"use client";
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Modal from '../../../../../Components/Modal';
import Image from 'next/image';

const UploadBulkCaseFlows: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose} title="Upload Bulk Case Flow">
    <div style={{width:'700px'}}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        backgroundColor: '#FBF1CC45',
        border: '1px solid #FFDA45',
        borderRadius: '8px',
        flexDirection: 'column',
        padding: '20px',
      }}
    >
      <IconButton sx={{ bgcolor: 'transparent', p: 0 }}>
        <Image src="/Frame (29).png" width={52} height={52} alt="Upload Icon" />
      </IconButton>
      <Typography sx={{ fontSize: '16px', color: '#000000' }}>Upload .xls file</Typography>
    </Box>
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#E6F6F5',
        padding: '16px',
        borderRadius: '8px',
        marginTop: '16px',
      }}
    >
      <Typography sx={{ fontWeight: 500, fontSize: '16px', color: '#000000' }}>
        Template
      </Typography>
      <Typography sx={{ fontSize: '14px', color: '#000000', marginTop: '8px' }}>
        A sample Excel file is provided to assist you in entering details in a structured format, <br /> ensuring an error-free process.
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
        <Typography sx={{ fontSize: '16px', color: '#00A991' }}>Sample Create Lead.xls</Typography>
        <Image src="/Frame (31).png" width={20} height={20} alt="Sample Icon" style={{ marginLeft: '8px' }} />
      </Box>
    </Box>
    </div>
   
  </Modal>
);

export default UploadBulkCaseFlows;
