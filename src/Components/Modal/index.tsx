import React, { ReactNode } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, DialogProps } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

interface ModalProps extends DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  hasDivider?: boolean;
  dialogStyles?: React.CSSProperties;
}

const StyledDialog = styled(Dialog)<{ customStyles?: React.CSSProperties }>(({ customStyles }) => ({
  '& .MuiPaper-root': {
    borderRadius: '24px',
    boxShadow: '0px 4px 32px 0px #43546580',
    backgroundColor: '#FFFFFF',
    height:'auto',
    width: 'auto', 
    maxWidth:'100%',
    maxHeight:'auto',
    overflow: 'hidden',
    ...(customStyles ? customStyles : {}),
  },
}));

const ModalContainer = styled(DialogContent)({
  padding: '16px',
  overflow: 'auto',
});

const ModalTitleContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px  16px 0',
});

const ModalTitle = styled(DialogTitle)({
  fontWeight: 600,
  color: '#133039',
  fontSize: '24px',
  flexGrow: 1,
});

const Divider = styled('div')({
  width: '100%',
  height: '1px',
  backgroundColor: '#DCE0E1',
});

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, actions, hasDivider = false, dialogStyles }) => (
  <StyledDialog open={open} onClose={onClose} fullWidth customStyles={dialogStyles}>
    <ModalTitleContainer>
      <ModalTitle>{title}</ModalTitle>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {actions}
        <IconButton
          onClick={onClose}
          style={{ marginLeft: '60px', marginRight: '10px' }}
          sx={{ borderRadius: '50%', border: '1px solid #DCE0E1' }}
        >
          <Image src="/close_24px.png" width={20} height={20} alt="close" />
        </IconButton>
      </div>
    </ModalTitleContainer>
    {hasDivider && <Divider />}
    <ModalContainer>{children}</ModalContainer>
  </StyledDialog>
);

export default Modal;
