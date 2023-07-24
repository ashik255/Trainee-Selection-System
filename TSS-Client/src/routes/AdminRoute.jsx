import React from 'react';

const AdminRoute = () => {
    return (
        <div>
            {/* Retrieve user role from your authentication logic */}
            const user = JSON.parse(localStorage.getItem("user"));
            const isAdmin = user && user.role === "ADMIN";
            return isAdmin ? <Outlet /> : <Navigate to="/login" />;
        </div>
    );
};

export default AdminRoute;