import React, { ReactNode } from 'react';
import { Table as MuiTable, TableContainer, TableProps as MuiTableProps, Paper } from '@mui/material';

interface TableProps extends MuiTableProps {

  actionButtons?: React.ReactNode;
  children: ReactNode;
}

const Table: React.FC<TableProps> = ({  actionButtons, children, ...props }) => (
  <TableContainer component={Paper} style={{ border: '1px solid #D9DCDF', borderRadius: '16px', overflow: 'hidden',  width: '100%', }}>
    {actionButtons && <div style={{ padding: '16px' }}>{actionButtons}</div>}
    <MuiTable size="medium" {...props}>
      {children}
    </MuiTable>
  </TableContainer>
);

export default Table;
