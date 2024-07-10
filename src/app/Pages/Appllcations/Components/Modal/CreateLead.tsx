"use client"
import React from 'react';
import { Box, Typography, Button, TextField, IconButton, Grid } from '@mui/material';
import Image from 'next/image';
import Modal from '../../../../../Components/Modal';

const fields = [
  { name: 'businessName', label: 'Business Name', placeholder: 'Enter business name', required: true },
  { name: 'ownerName', label: 'Owner Name', placeholder: 'Enter owner name', required: true },
  { name: 'gstinNo', label: 'GSTIN No.', placeholder: 'Enter GSTIN number', required: true },
  { name: 'phoneNumber', label: 'Phone Number', placeholder: 'Enter phone number', required: true },
  { name: 'lenderLink', label: 'Ledger Link', placeholder: 'Enter ledger link', required: false },
  { name: 'anchorRetailerId', label: 'Anchor-Retailer ID', placeholder: 'Enter anchor-retailer ID', required: false },
  { name: 'alternatePhoneNumber', label: 'Alternate Phone Number', placeholder: 'Enter alternate phone number', required: false },
];

const CreateLead: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose} title="Create Lead">
    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width:'750px', }}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} sm={6} key={field.name} sx={{ px: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography sx={{ marginBottom: 1, fontWeight: 500, fontSize: '16px', color: '#000000' }}>
                {field.label}{field.required && <span style={{ color: 'red' }}>*</span>}
              </Typography>
              {!field.required && (
                <Typography sx={{ color: '#95A2A6', fontSize: '14px', marginLeft: '8px' }}>
                  (Optional)
                </Typography>
              )}
            </Box>
            <TextField
              name={field.name}
              variant="outlined"
              placeholder={field.placeholder}
              fullWidth
              required={field.required}
              sx={{
                height: '40px',
                borderRadius: '8px',
                border: '1px solid #DCE0E1',
                '& .MuiInputBase-root': {
                  height: '100%',
                  color: '#000000',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#DCE0E1',
                },
              }}
              InputProps={{
                endAdornment: field.name === 'lenderLink' && (
                  <IconButton sx={{ bgcolor: '#00A991', borderRadius: 1, height: 28, width: 28, mr: 1 }}>
                    <Image src="/Frame (19).png" width={16} height={16} alt="icon" />
                  </IconButton>
                ),
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button
          type="button" variant="outlined" onClick={onClose}
          sx={{width: '152px', height: '40px', borderRadius: '8px', border: '1px solid #00A991', bgcolor: '#FFFFFF', color: '#00A991', }}
        >
          Cancel
        </Button>
        <Button type="submit"
          variant="contained" 
          sx={{
           width: '152px', height: '40px', borderRadius: '8px', bgcolor: '#00A991',color: '#FFFFFF', }}
        >
          Create
        </Button>
      </Box>
    </Box>
  </Modal>
);

export default CreateLead;
