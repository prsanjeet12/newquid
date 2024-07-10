import React, { useState } from 'react';
import { TableHead, TableRow, TableCell, TableBody, Checkbox, Typography, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '../../../../Components/Table';
import Image from 'next/image';
import ActionButtons from '../../../../Components/ActionButton';
import DrawdownCreationModal from '../Components/Modal/DrawdownCreationModal';
import { BusinessCell, CreditLimitCell, CreatedDate, Row, RowData } from '../../../../types/types';







const StatusContainer = styled('div')({
  display: 'flex',
  width: '140px',
  height: '30px',
  borderRadius: '21px',
  backgroundColor: '#F1F3F3',
  border: '1px solid #DCE0E1',
  overflow: 'hidden',
  margin: '0 auto',
});

const StatusButton = styled('button')<{ isActive: boolean; isToggled: boolean }>(({ isActive, isToggled }) => ({
  flex: 1,
  border: isToggled ? (isActive ? '1px solid #00A991' : '1px solid #F3512B') : '1px solid transparent',
  background: isToggled ? (isActive ? '#E6F6F5' : '#FDEAE5') : 'transparent',
  color: isToggled ? (isActive ? '#00A991' : '#F3512B') : '#000',
  borderRadius: '21px',
  cursor: 'pointer',
  fontWeight: 600,
  fontSize: '13px',
  padding: '5px',
  transition: 'all 0.3s ease',
  '&:focus': {
    outline: 'none',
  },
}));

const StatusIndicator: React.FC<{ isActive: boolean; onToggle: () => void }> = ({ isActive, onToggle }) => {
  return (
    <StatusContainer>
      <StatusButton isActive={true} isToggled={isActive} onClick={onToggle} style={{ width: '70px' }}>
        Active
      </StatusButton>
      <StatusButton isActive={false} isToggled={!isActive} onClick={onToggle} style={{ width: '70px' }}>
        Inactive
      </StatusButton>
    </StatusContainer>
  );
};

const AllAccounts: React.FC = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [status, setStatus] = useState<boolean[]>(Array(5).fill(false));
  const [openDrawdownModal,setOpenDrawdownModal]=useState(false)

  const handleStatusToggle = (index: number) => {
    const newStatus = [...status];
    newStatus[index] = !newStatus[index];
    setStatus(newStatus);
  };

  const handleDrawdownModalToggle=()=>{
    setOpenDrawdownModal(!openDrawdownModal)
  }

  const columns = ['#', 'BUSINESS', 'CREDIT LIMIT', 'STATUS', 'ACTION', 'CREATED ON'];

  const rows: Row[] = [
    {
      id: 1,
      data: [
        1,
        { businessName: 'Bharat Electronics', details: 'Abhishek Jain | +91 95647 76550', userId: '123456' },
        { lender: 'Builder', creditLimit: '₹1,00,000', availableBalance: '₹50,000' },
        'Active',
        'Edit/Delete',
        { date: '11 Mar, 2024', time: '14:07:57', updatedDate: '12 Mar, 2024', updatedTime: '15:08:57' },
      ],
    },
    {
      id: 2,
      data: [
        2,
        { businessName: 'A1 Groceries', details: 'Manisha Singh | +91 98765 43210', userId: '789012' },
        { lender: 'Builder', creditLimit: '₹2,00,000', availableBalance: '₹1,50,000' },
        'Active',
        'Edit/Delete',
        { date: '11 Mar, 2024', time: '14:07:57', updatedDate: '12 Mar, 2024', updatedTime: '15:08:57' },
      ],
    },
    {
      id: 3,
      data: [
        3,
        { businessName: 'Techno World', details: 'Rajesh Kumar | +91 87654 32109', userId: '345678' },
        { lender: 'Lender C', creditLimit: '₹3,00,000', availableBalance: '₹2,00,000' },
        'Inactive',
        'Edit/Delete',
        { date: '11 Mar, 2024', time: '14:07:57', updatedDate: '12 Mar, 2024', updatedTime: '15:08:57' },
      ],
    },
    {
      id: 4,
      data: [
        4,
        { businessName: 'Fashion Hub', details: 'Priya Verma | +91 76543 21098', userId: '901234' },
        { lender: 'Lender D', creditLimit: '₹4,00,000', availableBalance: '₹3,50,000' },
        'Active',
        'Edit/Delete',
        { date: '11 Mar, 2024', time: '14:07:57', updatedDate: '12 Mar, 2024', updatedTime: '' },
      ],
    },
    {
      id: 5,
      data: [
        5,
        { businessName: 'Kitchen Essentials', details: 'Suresh Reddy | +91 65432 10987', userId: '' },
        { lender: 'Lender E', creditLimit: '₹5,00,000', availableBalance: '₹4,50,000' },
        'Inactive',
        'Edit/Delete',
        { date: '11 Mar, 2024', time: '14:07:57', updatedDate: '12 Mar, 2024', updatedTime: '15:08:57' },
      ],
    },
  ];

  const handleEditClick = () => {
    setShareModalOpen(true);
  };

  const renderBusinessCell = (cell: BusinessCell) => (
    <div style={{ display: 'flex', fontSize: '13px', whiteSpace: 'nowrap' }}>
      <div>
        <Typography variant="subtitle1" sx={{ fontSize: '13px', color: '#00A991', fontWeight: 600 }}>
          {cell.businessName}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
          {cell.details}
        </Typography>
      </div>
      <Typography sx={{ ml: 'auto', fontSize: '13px', color: '#133039', fontWeight: 500, whiteSpace: 'nowrap' }}>
        <span className='text-[#95A2A6]' style={{ marginRight: '4px' }}>USER ID:</span> <br />
        {cell.userId}
      </Typography>
    </div>
  );

  const renderCreditLimitCell = (cell: CreditLimitCell) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '13px' }}>
      <div>
        <Typography variant="body2" sx={{ fontSize: '13px', color: '#95A2A6', fontWeight: 500 }}>
          LENDER
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
          {cell.lender}
        </Typography>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <Typography variant="body2" sx={{ fontSize: '13px', color: '#95A2A6', fontWeight: 500 }}>
          CREDIT LIMIT
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
          {cell.creditLimit}
        </Typography>
      </div>
      <div style={{ marginLeft: '20px' }}>
        <Typography variant="body2" sx={{ fontSize: '13px', color: '#95A2A6', fontWeight: 500 }}>
          AVAILABLE BALANCE
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
          {cell.availableBalance}
        </Typography>
      </div>
    </div>
  );

  const renderCreatedDateCell = (cell: CreatedDate) => (
    <div>
      <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
        {cell.date} 
        <span style={{marginLeft:'20px'}}> {cell.time}</span>
        <br />
        <Typography variant="body2" sx={{color:'#95A2A6'}}>Updated on {cell.updatedDate} </Typography>
      </Typography>
    </div>
  );

  const renderCellContent = (cell: any, index: number, rowIndex: number) => {
    switch (index) {
      case 1:
        return typeof cell === 'object' && 'businessName' in cell ? renderBusinessCell(cell) : null;
      case 2:
        return typeof cell === 'object' && 'lender' in cell ? renderCreditLimitCell(cell) : null;
      case 3:
        return <StatusIndicator isActive={status[rowIndex]} onToggle={() => handleStatusToggle(rowIndex)} />;
      case 4:
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={handleDrawdownModalToggle}>
              <Image src="/Frame (33).png" alt="Delete" width={24} height={24} />
            </IconButton>
          </div>
        );
      case 5:
        return typeof cell === 'object' && 'date' in cell ? renderCreatedDateCell(cell) : null;
      default:
        return (
          <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
            {typeof cell === 'string' || typeof cell === 'number' ? cell : ''}
          </Typography>
        );
    }
  };

  return (
    <>


      <Table
        actionButtons={
          <ActionButtons type="search" placeholder="Search" style={{ marginLeft: '15px', width: '400px' }} />
        }
      >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox />
            </TableCell>
            {columns.map((column, index) => (
              <TableCell key={index}>
                <Typography variant="body2" sx={{ fontSize: '13px', color: '#95A2A6' }}>
                  {column}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={row.id}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              {row.data.map((cell, index) => (
                <TableCell key={index}>
                  {renderCellContent(cell, index, rowIndex)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <DrawdownCreationModal open={openDrawdownModal} onClose={handleDrawdownModalToggle} />
    </>
  );
};

export default AllAccounts;
