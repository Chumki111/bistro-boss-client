  import { useEffect, useState } from "react";
import { getDonarDonations } from "../../../Api/donations";
import useAuth from "../../../Hooks/useAuth";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";


const DonarHome = () => {
    const {user} = useAuth();
    const [donations, setDonations] =useState([]);
    
   useEffect(() => {
        getDonarDonations(user?.email)
          .then((res) => {
            setDonations(res);
          })
          .catch((error) => {
            console.error('Error fetching donations:', error);
          });
      }, [user]);
       // Function to toggle displaying all rows
   
    const slicedDonations = donations.slice(0, 3); 
    return (
        <div>
           <div>
            <h1 className="text-3xl mt-10 mb-10">Hi,Welcome Back <span className="text-red-500">{user?.displayName}</span> </h1>
           </div>

           <TableContainer component={Paper}>
      <Table aria-label="enhanced table">
      {
        slicedDonations.length > 0 &&   <TableHead>
        <TableRow>
          <TableCell>Recipient Name</TableCell>
          <TableCell align="right">Location</TableCell>
          
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Donation Status</TableCell>
          <TableCell align="right">Delete</TableCell>
          <TableCell align="right">Update</TableCell>
          <TableCell align="right">View</TableCell>
        </TableRow>
      </TableHead>
      }
        <TableBody>
          {slicedDonations.map((row) => (
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
                Update
              </Button></TableCell>
              <TableCell align="right"><Link to={`detailsPage/${row._id}`}><Button size="small">
                View
              </Button></Link></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </TableContainer>
      {/* Display the button to view all requests */}
     {
      slicedDonations.length> 0 &&  <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="my-donation-requests">
          <Button variant="contained" style={{ backgroundColor: "red", color: "white" }}>
          view my all request
          </Button>
      </Link>
  </div>
     }
        </div>
    );
};

export default DonarHome;
