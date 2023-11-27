// import { DateRange } from 'react-date-range'
// import { TbFidgetSpinner } from 'react-icons/tb'

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const DonationRequestForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>

            <DatePicker
                showIcon
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                icon="fa fa-calendar"
            />
        </>
    );
};

export default DonationRequestForm;