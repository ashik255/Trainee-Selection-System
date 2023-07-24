import React from 'react';

const ApplicantRoute = () => {
    return (
        <div>
            const user = JSON.parse(localStorage.getItem("user"));
            const isApplicant = user && user.role === "APPLICANT";
            return isApplicant ? <Outlet /> : <Navigate to="/login" />;
        </div>
    );
};

export default ApplicantRoute;