"use client";
import React, { useState, ReactNode, MouseEvent } from 'react';
import { Menu, Typography } from '@mui/material';

interface DropdownProps {
  triggerElement: ReactNode;
  children: ReactNode;
  menuStyle?: React.CSSProperties;
  triggerStyle?: React.CSSProperties;
}

const Dropdown: React.FC<DropdownProps> = ({
  triggerElement,
  children,
  menuStyle,
  triggerStyle,
}) => {
  const [OpenDropdown, setOpenDropdown] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setOpenDropdown(event.currentTarget);
  };

  const handleClose = () => {
    setOpenDropdown(null);
  };

  return (
    <div>
      <div onClick={handleClick} style={triggerStyle}>
        {triggerElement}
      </div>
      <Menu
        anchorEl={OpenDropdown}
        open={Boolean(OpenDropdown)}
        onClose={handleClose}
        PaperProps={{
          style: {
            boxShadow: '0px 8px 32px 0px #01162729',
            padding: '20px',
            top: '40px',
            borderRadius: '8px',
            ...menuStyle,
          },
        }}
      >
        <Typography>
          {children}
        </Typography>
      </Menu>
    </div>
  );
};

export default Dropdown;
