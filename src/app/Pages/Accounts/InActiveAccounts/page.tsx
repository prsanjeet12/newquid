"use client"
import React, { useState } from 'react';
import { TableHead, TableRow, TableCell, TableBody, Checkbox, Typography, IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '../../../../Components/Table';
import Image from 'next/image';
import ActionButtons from '../../../../Components/ActionButton';
import { BusinessCell, CreditLimitCell, CreatedDate, Row, RowData } from '../../../../types/types';




;const MyTable: React.FC = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);
   // Define columns for the table, including the new STATUS and ACTION columns
  const columns = ['#', 'BUSINESS', 'CREDIT LIMIT', 'ACTION', 'CREATED ON', ];

  const rows: Row[] = [
    {
      id: 1,
      data: [
        1,
        { businessName: 'Bharat Electronics', details: 'Abhishek Jain | +91 95647 76550', userId: '123456' },
        { lender: 'Builder', creditLimit: '₹1,00,000', availableBalance: '₹50,000' },
        
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
        
        'Edit/Delete',
        { date: '11 Mar, 2024', time: '14:07:57', updatedDate: '12 Mar, 2024', updatedTime: '15:08:57' },
      ],
    },
    {
      id: 5,
      data: [
        5,
        { businessName: 'Kitchen Essentials', details: 'Suresh Reddy | +91 65432 10987', userId: '567890' },
        { lender: 'Lender E', creditLimit: '₹5,00,000', availableBalance: '₹4,50,000' },
        
        'Edit/Delete',
        { date: '11 Mar, 2024', time: '14:07:57', updatedDate: '12 Mar, 2024', updatedTime: '15:08:57' },
      ],
    },
  ];

  const handleEditClick = () => {
    setShareModalOpen(true);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <button style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', border: '1px solid #D9DCDF', borderRadius: '8px', marginRight: '10px', padding: '8px' }}>
            <Image src="/Vector.png" width={11} height={12} alt="Filter" style={{ marginRight: '5px' }} />
            <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039' }}>Filter</Typography>
          </button>
          <button style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', border: '1px solid #D9DCDF', borderRadius: '8px', padding: '7px' }}>
            <Image src="/Frame (27).png" width={11} height={12} alt="Sort By" style={{ marginRight: '5px' }} />
            <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039' }}>Sort By</Typography>
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <Image src="/Frame (28).png" width={24} height={24} alt="Filter" />
          </button>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', marginRight: '20px' }}>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>00:</span> <span style={{ color: '#95A2A6' }}>UPDATED</span>
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '14px', marginRight: '20px' }}>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>00:</span> <span style={{ color: '#95A2A6' }}>NEW</span>
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>
            <span>00:</span><span style={{ color: '#95A2A6' }}>TOTAL</span>
          </Typography>
        </div>
      </div>

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
          {rows.map((row,rowIndex) => (
            <TableRow key={row.id}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              {row.data.map((cell, index) => (
                <TableCell key={index}>
                  {index === 1 && typeof cell === 'object' && 'businessName' in cell ? (
                    <div style={{ display: 'flex', fontSize: '13px' }}>
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
                  ) : index === 2 && typeof cell === 'object' && 'lender' in cell ? (
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
                                      
                  ) : index === 3 ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                     
                      <IconButton onClick={handleEditClick}>
                        <Image src="/Frame (33).png" alt="Delete" width={24} height={24} />
                      </IconButton>
                    </div>
                  
                  
                    ):  index === 4 && typeof cell === 'object' && 'date' in cell ? (
                    <div>
                      <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
                        {cell.date} 
                        <span style={{marginLeft:'20px'}}> {cell.time}</span>
 <br />
                        <Typography variant="body2" sx={{color:'#95A2A6'}}>Updated on {cell.updatedDate} {cell.updatedTime}</Typography>
                      </Typography>
                    </div>
                  ) :
                  
                  (
                    <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
                      {typeof cell === 'string' || typeof cell === 'number' ? cell : ''}
                    </Typography>
                  )}
                </TableCell>
              ))}
              <TableCell>
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default MyTable;
