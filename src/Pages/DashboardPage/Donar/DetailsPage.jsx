import { useLoaderData } from "react-router-dom";


const DetailsPage = () => {
    const donation = useLoaderData();
    console.log(donation);
    return (
        <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th> 
              <th>Recipient_name
</th> 
              <th>Location</th> 
              <th>Requester</th> 
              
              <th>donation_date</th> 
              <th>full_address</th>
              <th>hospital_name</th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <th>1</th> 
              <td>{donation.recipient_name}</td> 
              <td>{donation.recipient_district} <br /> {donation.recipient_upazila}</td> 
              <td>{donation.requester_Name} <br />{donation.equester_email}</td> 
              <td>{donation.donation_date}</td> 
              <td>{donation.full_address}</td>
              <td>{donation.hospital_name}</td>
            </tr>
          
          </tbody> 
         
        </table>
      </div>
    );
};

export default DetailsPage;