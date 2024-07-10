"use client"
import React, { useState } from 'react';
import { TableHead, TableRow, TableCell, TableBody, Checkbox,   Typography, IconButton ,Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '../../../../Components/Table';
import Image from 'next/image';
import ShareLinkModal from '../Components/Modal/ShareModal';
import ActionButtons from '../../../../Components/ActionButton';


// Define types/interfaces for cells and rows
interface BusinessCell {
  businessName: string;
  details: string;
  userId: string;
}

interface CategoryCell {
  businessCategory: string;
  categoryName: string;
}

interface UpdatedCell {
  date: string;
  time: string;
}

interface StatusCell {
  status: 'PENDING' | 'UPLOADED' | 'EXPIRED';
  action: string;
}



// Type to represent a row of data, which can be a mix of different cell types
type RowData = (number | string | BusinessCell | CategoryCell | StatusCell | UpdatedCell)[]
interface Row {
  id: number;
  data: RowData;
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'PENDING':
      return { bgColor: '#FFDA451F', textColor: '#D8B31C' };
    case 'UPLOADED':
      return { bgColor: '#E6F6F5', textColor: '#00A991' };
    case 'EXPIRED':
      return { bgColor: '#FDEAE5', textColor: '#F3512B' };
    default:
      return { bgColor: 'transparent', textColor: 'black' };
  }
};

const StatusTag = styled('div')<{ status: string }>(({ status }) => {
  const { bgColor, textColor } = getStatusStyles(status);
  return {
    display: 'inline-block',
    padding: '4px 10px',
    borderRadius: '8px',
    border: `1px solid ${textColor}`,
    color: textColor,
    backgroundColor: bgColor,
    fontSize: '13px',
  };
});


const MyTable: React.FC = () => {
  const [shareModalOpen, setShareModalOpen] = useState(false);


   // Define columns for the table
  const columns = ['#', 'BUSINESS', 'CATEGORY', 'GST NO.', 'UPLOAD CF/STATUS', 'UPDATE', 'ACTION'];
  
  const rows: Row[] = [
    {
      id: 1,
      data: [
        1,
        { businessName: 'Bharat Electronics ', details: 'Abhishek Jain |  +91 95647 76550', userId: '123456' },
        { businessCategory: 'Electronics', categoryName: 'Mobile Phone' },
        'GST123456',
        { status: 'UPLOADED', action: 'UPLOAD' },
        { date: 'Yesterday', time: '14:07:57' },

        'Edit/Delete',
      ],
    },
    {
    id: 2,
      data: [
        2,
        { businessName: 'A1 Groceries', details: 'Manisha Singh | +91 98765 43210', userId: '789012' },
        { businessCategory: 'Groceries', categoryName: 'General Store' },
        'GST789012GST78901',
        { status: 'PENDING', action: 'UPLOAD' },
        { date: 'Yesterday', time: '14:07:57' },
        'Edit/Delete',
      ],
    },
    {
      id: 3,
      data: [
        3,
        { businessName: 'Techno World', details: 'Rajesh Kumar | +91 87654 32109', userId: '345678' },
        { businessCategory: 'Electronics', categoryName: 'Laptops' },
        'GST345678',
        { status: 'EXPIRED', action: 'UPLOAD' },
        { date: 'Yesterday', time: '14:07:57' },
        'Edit/Delete',
      ],
    },
    {
      id: 4,
      data: [
        4,
        { businessName: 'Fashion Hub', details: 'Priya Verma | +91 76543 21098', userId: '901234' },
        { businessCategory: 'Clothing', categoryName: 'Retail' },
        'GST901234',
        { status: 'UPLOADED', action: 'UPLOAD' },
        { date: 'Yesterday', time: '14:07:57' },
        'Edit/Delete',
      ],
    },
    {
      id: 5,
      data: [
        5,
        { businessName: 'Kitchen Essentials', details: 'Suresh Reddy | +91 65432 10987', userId: '567890' },
        { businessCategory: 'Home Appliances', categoryName: 'Kitchenware' },
        'GST567890',
        { status: 'PENDING', action: 'UPLOAD' },
        { date: 'Yesterday', time: '14:07:57' },
        'Edit/Delete',
      ],
    },
    {
      id: 2,
      data: [
        2,
        { businessName: 'Another Business Name', details: 'John Doe | +91 98765 43210', userId: '654321' },
        { businessCategory: 'Electronics', categoryName: 'Mobile Phone' },
        'GST654321',
        { status: 'PENDING', action: 'Upload' },
        { date: 'Yesterday', time: '14:07:57' },
        'Edit/Delete',
      ],
    },
   
  ];

  const handleEditClick = () => {
    setShareModalOpen(true);
  };

  return (
    <>
   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'  ,marginTop:'20px'}}>
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <button style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', border: '1px solid #D9DCDF', borderRadius: '8px', marginRight: '10px', padding: '8px' }}>
      <Image src="/Vector.png" width={11} height={12} alt="Filter" style={{ marginRight: '5px' }} />
      <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039' }}>Filter</Typography>
    </button>
    <button style={{ display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', border: '1px solid #D9DCDF', borderRadius: '8px', padding: '7px' }}> <Image src="/Frame (27).png" width={11} height={12} alt="Sort By" style={{ marginRight: '5px' }} />
      <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039' }}>Sort By</Typography>
    </button>
  </div>
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <button style={{ display: 'flex', alignItems: 'center', marginRight:'20px'  }}> <Image src="/Frame (28).png" width={24} height={24} alt="Filter"  /></button>
    <Typography sx={{fontWeight:600, fontSize:'14px', marginRight:'20px'}}> <span style={{fontWeight:600, fontSize:'14px'}}>00:</span> <span style={ {color:'#95A2A6'}}>UPDATED</span></Typography>
    <Typography sx={{fontWeight:600, fontSize:'14px',marginRight:'20px'}}> <span style={{fontWeight:600, fontSize:'14px'}}>00:</span>  <span style={ {color:'#95A2A6'}}>NEW</span> </Typography>
    <Typography sx={{fontWeight:600, fontSize:'14px',}}> <span >00:</span><span style={ {color:'#95A2A6'}}>TOTAL</span> </Typography>
  </div>
</div>

      <Table actionButtons={
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
          {rows.map((row) => (
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
                        <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 ,}}>
                          {cell.details}
                        </Typography>
                      </div>
                    
                   <Typography sx={{ ml: 'auto', fontSize: '13px', color: '#133039', fontWeight: 500, whiteSpace: 'nowrap' }}>
  <span className='text-[#95A2A6]' style={{ marginRight: '4px' }}>USER ID:</span> <br />
  {cell.userId}
</Typography>      
                   
                     
                    </div>
                  ) : index === 2 && typeof cell === 'object' && 'businessCategory' in cell ? (
                    <div>
                      <Typography variant="subtitle1" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
                        {cell.businessCategory}
                      </Typography>
                      <Typography variant="body2" sx={{ ml: 'auto', fontSize: '13px', color: '#95A2A6', fontWeight: 500 }}>
                        {cell.categoryName}
                      </Typography>
                    </div>
                  ) : index === 4 && typeof cell === 'object' && 'status' in cell ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px' }}>
                      <IconButton sx={{ backgroundColor: '#00A991', borderRadius: 1, mr: 2, height: 28, width: 28 }}>
                        <Image src="/Frame (19).png" width={16} height={16} alt="icon" />
                      </IconButton>
                      <div style={{ flex: 1,marginLeft:'30px' }}>
                        <StatusTag status={cell.status}>{cell.status}</StatusTag>
                      </div>
                    </div>
                  ) : index === 5 && typeof cell === 'object' && 'date' in cell && 'time' in cell ? (
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px' }}>
                      <Image src="/Frame (20).png" width={20} height={20} alt="icon" style={{ marginRight: 8 }} />
                      <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 }}>
                        {cell.date } 
                      </Typography>
                      <Typography variant="body2" sx={{ fontSize: '13px', color: '#133039', fontWeight: 500 , marginLeft:'40px'}}>
                      {cell.time } 
                      </Typography>


                    
                    </div>
                  ) :  index === 6 && typeof cell === 'string' ? (
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px' , marginRight:"30px"}}>
                      <IconButton onClick={handleEditClick}>
                        <Image src="/Frame (21).png" width={24} height={24} alt="edit" />
                      </IconButton>
                      <IconButton>
                        <Image src="/Edit.png" width={24} height={24} alt="delete" />
                      </IconButton>
                    </div>
                  ) : typeof cell === 'string' || typeof cell === 'number' ? (
                    <Typography variant="body1" sx={{ fontSize: { xs: '10px', sm: '12px', md: '13px' }, color: '#133039', fontWeight: 500 }}>
                      {cell as string}
                    </Typography>
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Share Link Modal */}
      <ShareLinkModal open={shareModalOpen} onClose={() => setShareModalOpen(false)} />
    </>
  );
};

export default MyTable;
