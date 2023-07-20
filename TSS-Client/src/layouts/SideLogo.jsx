import React from 'react';
import pic from "../assets/images/users/ashik.png";

const SideLogo = () => {
    return (
        <div>
            <div className="d-flex align-items-center p-2">
                      <img
                        src={pic}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 style={{textDecoration: 'none'}} className="mb-0">Md. Ariful Islam</h6>
                        <span style={{textDecoration: 'none' , color:'red'}} className="text-muted ">ADMIN</span>
                      </div>
                    </div>
        </div>
    );
};

export default SideLogo;