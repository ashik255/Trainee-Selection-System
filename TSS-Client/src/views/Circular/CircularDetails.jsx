import React, { useEffect, useState } from "react";
// import { Container, Col, Row, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Container,Col, Row, Button } from "react-bootstrap";

const CircularDetails = () => {
  const { circularId } = useParams();
  const [courseDetails, setCourseDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/admin/circular/getCircularById/${circularId}`);
        setCourseDetails(response.data.data);
      } catch (error) {
        console.error(error);
        // Handle error here, e.g., show an error message to the user.
      }
    };

    fetchData();
  }, [circularId]);
  console.log(courseDetails);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <Container>
        <Col>
          <Row>
            {courseDetails.imgLink && <img src={courseDetails.imgLink} alt="" />}
          </Row>
          <hr />
          <Row>
            <Col xs={8}>
              <h1>About Course</h1>
              <p>{courseDetails.about}</p>
              <h2>Earn a Certificate</h2>
              <p>{courseDetails.requirement}</p>
              {/* Display other course details */}
            </Col>
            <Col xs={4} className="details-card">
              {/* Display course details card content */}
              <Link to="/register">
                <Button variant="contained" color="primary" className="apply-btn">
                  Apply Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Container>
      
    </div>
  );
};

export default CircularDetails;


// import React, { useEffect, useState } from 'react';
// import { Col, Row, Button, Container } from 'react-bootstrap';
// import pic from '../../assets/images/carosel/mern.png';
// import './CircularDetails.css';
// import { Link, NavLink } from 'react-router-dom';
// import axios from 'axios';
// // simport { UserPlus, LevelUpAlt, AccessTime, Event, LocationOn, Business } from '@mui/icons-material';

// const CircularDetails = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(
//             "http://localhost:8081/admin/circular/getAllCircular"
//           );
//           setData(response.data.data);
  
//           console.log("Fetched Data:", response.data.data);
//         } catch (error) {
//           console.error(error);
//           // Handle error here, e.g., show an error message to the user.
//         }
//       };
//     console.log(data);
//       fetchData();
//     }, []);
  

//     return (
//         <div className="">
//             <Container>
//             <Col>
//                 <Row>
//                     <img src={pic} alt="" />
//                 </Row>
//                 <hr />
//                 <Row >
//                     <Col xs={8}>
//                         <h1>About Course</h1>
//                         <p>
//                            {data.about}
//                         </p>
//                         <h2>Earn a Certificate</h2>
//                         <p>
//                             After the successful completion of this course and hands-on project, you will earn a certificate,
//                             and you can proudly celebrate your achievement with your professional network and prospective employers.
//                             To get this certificate, you must ace the tests, achieving a good score.
//                         </p>
//                         <h2>Requirements</h2>
//                         <ul>
//                             <li>B.Sc. in CSE or related discipline.</li>
//                             <li>Must have career goal and interest in Software Quality testing.</li>
//                             <li>Basic knowledge on various software domains and platform.</li>
//                             <li>Out-of-the-box thinker, Problem solving ability to identify and resolve issues.</li>
//                             <li>Basic Idea in Various testing type, knowledge of software test plans, test designs, test objectives, test cases, and reports.</li>
//                             <li>Good communication and team player to convey information in a clear and understandable manner for cross functional activity.</li>
//                             <li>Knowledge of the SDLC & STLC in an Agile environment is nice to have.</li>
//                             <li>Must have a proactive learning mindset & good communication skill in English.</li>
//                             <li>Long term career plan in Software Industry. Candidates who have a higher study plan are discouraged to apply.</li>
//                             <li>Both the Freshers and experienced engineers are eligible & welcome to apply to this program.</li>
//                         </ul>
//                     </Col>
//                     <Col xs={4} className="details-card">
//                         <div className="details-card-content">
//                             <div className="icon-container">
//                                 {/* <UserPlus className="details-icon" /> */}
//                             </div>
//                             <h2>Course Level</h2>
//                             <p>Intermediate Level</p>
//                         </div>
//                         <div className="details-card-content">
//                             <div className="icon-container">
//                                 {/* <Event className="details-icon" /> */}
//                             </div>
//                             <h2>Start From</h2>
//                             <p>01 Aug 2023</p>
//                         </div>
//                         <div className="details-card-content">
//                             <div className="icon-container">
//                                 {/* <AccessTime className="details-icon" /> */}
//                             </div>
//                             <h2>Course Duration</h2>
//                             <p>17 Weeks</p>
//                         </div>
//                         <div className="details-card-content">
//                             <div className="icon-container">
//                                 {/* <Business className="details-icon" /> */}
//                             </div>
//                             <h2>Resource Person</h2>
//                             <p>Nani Gopal</p>
//                         </div>
//                         <div className="details-card-content">
//                             <div className="icon-container">
//                                 {/* <LocationOn className="details-icon" /> */}
//                             </div>
//                             <h2>Location</h2>
//                             <p>BJIT Academy</p>
//                         </div>
//                         <NavLink to="/register">
//                         <Button variant="primary" className="apply-btn">Apply Now</Button>
//                         </NavLink>
//                     </Col>
//                 </Row>
//             </Col>
//             </Container>
//         </div>
//     );
// };

// export default CircularDetails;
