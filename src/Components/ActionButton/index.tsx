import React, { ChangeEvent } from 'react';
import { Button, InputBase, FormControlLabel, Radio } from '@mui/material';
import Image from 'next/image';

interface ActionButtonsProps {
  type: 'button' | 'radio' | 'search';
  label?: React.ReactNode;
  onClick?: () => void;
  value?: string;
  checked?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  searchValue?: string;
  searchOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  buttonColor?: string;
  radioColor?: string;
  actionButtons?: React.ReactNode; 
}

const ActionButtons: React.FC<ActionButtonsProps> = (props) => {
  const {
    type,
    label,
    onClick,
    value,
    checked,
    onChange,
    placeholder,
    searchValue,
    searchOnChange,
    style,
    radioColor,
    buttonColor,
    actionButtons, 
  } = props;

  const renderComponent = () => {
    switch (type) {
      case 'button':
        return (
          <Button
            onClick={onClick}
            style={{ backgroundColor: buttonColor, ...style }}
            variant="contained"
            sx={{
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none', backgroundColor: buttonColor },
              '&:focus': { boxShadow: 'none', outline: 'none' },
              '&:active': { boxShadow: 'none', backgroundColor: buttonColor },
            }}
          >
            {label}
            {actionButtons && (
              <div style={{ marginLeft: '10px' }}>{actionButtons}</div>
            )}
          </Button>
        );
      case 'radio':
        return (
          <FormControlLabel
            value={value}
            control={
              <Radio
               
                onChange={onChange}
                sx={{
                  '&.Mui-checked': { color: radioColor || '#00A991' },
                  '&:hover': { backgroundColor: 'transparent' },
                }}
              />
            }
            label={label}
            style={style}
          />
        );
      case 'search':
        return (
          <div style={{ position: 'relative', ...style }}>
            <InputBase
              value={searchValue}
              onChange={searchOnChange}
              placeholder={placeholder}
              fullWidth
              sx={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                height: '36px',
              }}
            />
            <Image
              src="/search_24px.png"
              alt="Search"
              width={18}
              height={18}
              style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return renderComponent();
};

export default ActionButtons;
