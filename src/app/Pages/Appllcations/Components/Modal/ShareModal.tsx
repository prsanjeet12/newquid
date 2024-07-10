import React from 'react';
import { Typography, IconButton } from '@mui/material';
import Modal from '../../../../../Components/Modal';
import Image from 'next/image';

interface ShareModalProps {
  open: boolean;
  onClose: () => void;
}

const ShareLinkModal: React.FC<ShareModalProps> = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose} title="Share Link" hasDivider={true}>
    <div style={{ padding: '10px 0' ,width:'550px' }}>
      <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 500, color: '#133039' }}>Send On-boarding link via</Typography>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
        {['WhatsApp', 'Message'].map((text, i) => (
          <div key={text} style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ mr: 1, bgcolor: '#00A991' }}>
              <Image src={`/Frame (2${3 + i}).png`} width={24} height={24} alt={`icon-${text.toLowerCase()}`} />
            </IconButton>
            <Typography variant="body2" sx={{ fontSize: 16, fontWeight: 500, color: '#133039' }}>{text}</Typography>
          </div>
        ))}
      </div>
    </div>
  </Modal>
);

export default ShareLinkModal;
