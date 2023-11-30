import { useEffect, useState } from "react";

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Link } from "react-router-dom";
import { getAllDonations } from "../../../Api/donations";

const AllBloodDonationRequestVolunteer = () => {
  const [donations,setDonations] = useState([])
  useEffect(() =>{
      getAllDonations('/donations')
      .then((res) => {
          
          setDonations(res)
        })
        .catch((error) => {
          console.error('Error fetching donations:', error);
        });
  },[])
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
          {donations.map((row) => (
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
     
    </TableContainer>
  );
};

export default AllBloodDonationRequestVolunteer;
