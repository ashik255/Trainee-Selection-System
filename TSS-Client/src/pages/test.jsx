// mport React, { useState } from 'react';
// import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import jwtDecode from 'jwt-decode';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showError, setShowError] = useState(false);
//   const navigate = useNavigate();

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:9080/login', { email, password }, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Access-Control-Allow-Origin': '*',
//         },
//       });

      
//       const token = response.data.token;

//       // Decode the token
//       const decodedToken = jwtDecode(token);
//       const role = decodedToken.roles[0].authority;
//       const userEmail = decodedToken.sub;
//       const userId = response.data.roleBasedId;
//       const user = { role: role, userEmail: userEmail , id: userId};

//       // Store user and role in local storage
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));

//       toast.success('Signin Successful');

//       // Redirect to different routes based on role
//       if (user && user.role === 'Admin') {
//         navigate('/admin/dashboard');
//       } else if (user && user.role === 'Trainer') {
//         navigate('/trainer/dashboard');
//       } else if (user && user.role === 'Trainee') {
//         navigate('/trainee/dashboard');
//       }
//     } catch (error) {
//       setShowError(true);
//       toast.error('Error signing in');
//       console.error('Error signing in:', error);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
//       <Container>
//         <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//           <Col md={6}>
//             <div
//               style={{
//                 background: '#ffffff',
//                 padding: '40px',
//                 borderRadius: '8px',
//                 boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//               }}
//             >
//               <h2 className="text-center mb-4">Sign In</h2>
//               {showError && (
//                 <Alert color="danger" className="mb-4">
//                   Invalid email or password. Please try again.
//                 </Alert>
//               )}
//               <Form onSubmit={handleFormSubmit}>
//                 <FormGroup>
//                   <Label for="email">Email Address</Label>
//                   <Input
//                     type="email"
//                     id="email"
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <Label for="password">Password</Label>
//                   <Input
//                     type="password"
//                     id="password"
//                     placeholder="Enter password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                 </FormGroup>

//                 <Button color="primary" type="submit" block>
//                   Sign In
//                 </Button>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignIn;

// <Route element={<AdminRoute />}>
// <Route path="admin" element={<AdminLayout />}>
//   <Route path="/admin/dashboard" element={<Starter />} />
//   <Route path="/admin/register/trainee" element={<TraineeRegister />} />
//   <Route path="/admin/register/trainer" element={<TrainerRegister />} />
//   <Route path="/admin/register/batch" element={<Batch />} />
//   <Route path="/admin/assign/trainee" element={<AssignTrainee />} />
//   <Route path="/admin/assign/trainer" element={<AssignTrainer />} />
//   <Route path="/admin/create/course" element={<Course/>} />
//   <Route path="/admin/schedule/batch" element={<ScheduleBatch />} />
// </Route>
// </Route>

// import React from 'react'
// import {Navigate, Outlet} from 'react-router-dom'

// function AdminRoute() {

//   // Retrieve user role from your authentication logic
//   const user = JSON.parse(localStorage.getItem("user"));
//   const isAdmin = user && user.role === "Admin";
//   return isAdmin ? <Outlet /> : <Navigate to="/signin" />;

// }

// export default AdminRoute;
