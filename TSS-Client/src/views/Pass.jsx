import React from 'react';
import ApprovedTable from './ui/ApprovedTable';

const Pass = ({tableData}) => {
    return (
        <div>
            <ApprovedTable approvedTable={tableData} />
        </div>
    );
};

export default Pass;