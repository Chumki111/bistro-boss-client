import * as React from 'react';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
// import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { getDonarDonations } from '../../Api/donations';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const rowsPerPageOptions = [3, 5, 10];

export default function DonationRequestForm(){
  const { user } = useAuth();
  const [donations, setDonations] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  React.useEffect(() => {
    getDonarDonations(user?.email)
      .then((res) => {
        setDonations(res);
      })
      .catch((error) => {
        console.error('Error fetching donations:', error);
      });
  }, [user]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = React.useMemo(
    () => donations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [donations, page, rowsPerPage]
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label="enhanced table">
        <TableHead>
          <TableRow>
            <TableCell>Recipient Name</TableCell>
            <TableCell align="right">Location</TableCell>
            
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Donation Status</TableCell>
            <TableCell align="right">Delete</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.recipient_name}
              </TableCell>
              <TableCell align="right">{row.recipient_district} <br />{row.recipient_upazila}</TableCell>
             
              <TableCell align="right">{row.donation_date}</TableCell>
              <TableCell align="right">{ }</TableCell>
              <TableCell align="right" ><Button size="small">
                Delete
              </Button></TableCell>
              <TableCell align="right"><Button size="small"  style={{color:"red"}}>
                Edit
              </Button></TableCell>
              <TableCell align="right"><Link to={`detailsPage/${row._id}`}><Button size="small">
                View
              </Button></Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={donations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
