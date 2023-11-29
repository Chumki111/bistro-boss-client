import { Helmet } from "react-helmet-async";
import DonationRequestForm from '../../../Components/Form/DonationRequestForm'
const MyDonationRequestsPage = () => {


  
    return (
        <div>
            <Helmet>
                <title>Blood Donation | Request page</title>
            </Helmet>


     <div>
      <DonationRequestForm/>
     </div>
        </div>
    );
};

export default MyDonationRequestsPage;