import React from 'react';
import {Typography} from "@mui/material";

const DaysSinceDate = () => {
    const targetDate = new Date('2024-08-01');
    const currentDate = new Date();

    // Calculate the difference in days
    const timeDifference = currentDate.getTime() - targetDate.getTime();
    const daysSince = Math.floor(timeDifference / (1000 * 3600 * 24));

    // Format the current date
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    return (
        <div className="p-4">
            <Typography variant="h1" gutterBottom>
                #{daysSince}
            </Typography>
            <Typography variant="h4" gutterBottom>
                {formattedDate}
            </Typography>
        </div>
    );
};

export default DaysSinceDate;