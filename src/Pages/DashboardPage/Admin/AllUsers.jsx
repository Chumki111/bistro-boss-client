import * as React from 'react';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { getAllUsers } from '../../../Api/donations';
import { Avatar, Stack } from '@mui/material';

const rowsPerPageOptions = [3, 5, 10];

export default function AllUsers(){
  
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  React.useEffect(() => {
    getAllUsers('/users')
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.error('Error fetching donations:', error);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () => users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [users, page, rowsPerPage]
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="enhanced table">
        <TableHead>
          <TableRow>
            <TableCell>User Avatar</TableCell>
            
            
            <TableCell align="right">User Email</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">User Status</TableCell>
            <TableCell align="right">Volunteer</TableCell>
            <TableCell align="right">Admin</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">

              <Stack direction="row" spacing={2}>
      
      <Avatar
        alt="Remy Sharp"
        src={row?.image}
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
                
              </TableCell>
              <TableCell align="right">{row?.email}</TableCell>
             
              <TableCell align="right">{row.displayName}</TableCell>
              <TableCell align="right">{row.displayName}</TableCell>
              
              <TableCell align="right" ><Button size="small">
              Make Volunteer
              </Button></TableCell>
              <TableCell align="right"><Button size="small"  style={{color:"red"}}>
               Make Admin
              </Button></TableCell>
             

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
