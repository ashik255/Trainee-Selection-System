// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const RegistrationPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [gender, setGender] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState(null); // Using null as the initial value
//   const [contact, setContact] = useState('');
//   const [degreeName, setDegreeName] = useState('');
//   const [institute, setInstitute] = useState('');
//   const [cgpa, setCGPA] = useState('');
//   const [passingYear, setPassingYear] = useState('');
//   const [address, setAddress] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [cv, setCV] = useState('');

//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Prepare the form data
//     const formData = {
//       email,
//       password,
//       firstName,
//       lastName,
//       gender,
//       dateOfBirth,
//       contact,
//       degreeName,
//       institute,
//       cgpa,
//       passingYear,
//       address,
//       photo,
//       cv,
//     };

//     // Perform the registration logic by sending the form data to the server
//     // Replace the endpoint URL with your server's endpoint
//     fetch('http://example.com/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response from the server
//         console.log(data);
//         // Reset the form fields
//         setEmail('');
//         setPassword('');
//         setFirstName('');
//         setLastName('');
//         setGender('');
//         setDateOfBirth(null);
//         setContact('');
//         setDegreeName('');
//         setInstitute('');
//         setCGPA('');
//         setPassingYear('');
//         setAddress('');
//         setPhoto('');
//         setCV('');
//       })
//       .catch((error) => {
//         // Handle any error that occurred during registration
//         console.error(error);
//       });
//   };

//   return (
//     <Form onSubmit={handleRegister}>
//       <Form.Group controlId="email">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </Form.Group>

//       <Form.Group controlId="password">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </Form.Group>

//       <Form.Group controlId="firstName">
//         <Form.Label>First Name</Form.Label>
//         <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//       </Form.Group>

//       <Form.Group controlId="lastName">
//         <Form.Label>Last Name</Form.Label>
//         <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//       </Form.Group>

//       <Form.Group controlId="gender">
//         <Form.Label>Gender</Form.Label>
//         <Form.Control as="select" value={gender} onChange={(e) => setGender(e.target.value)} required>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </Form.Control>
//       </Form.Group>

//       <Form.Group controlId="dateOfBirth">
//         <Form.Label>Date of Birth</Form.Label>
//         <br />
//         <DatePicker
//           selected={dateOfBirth}
//           onChange={(date) => setDateOfBirth(date)}
//           dateFormat="dd/MM/yyyy"
//           maxDate={new Date()} // Restrict selecting future dates
//           showYearDropdown
//           scrollableYearDropdown
//           yearDropdownItemNumber={100}
//           placeholderText="Select Date of Birth"
//           required
//         />
//       </Form.Group>

//       {/* Add the remaining form fields here based on your requirements */}
//       {/* ... */}

//       <Button variant="primary" type="submit">Register</Button>
//     </Form>
//   );
// };

// export default RegistrationPage;
{/* <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup> */}

import React, { useState } from "react";
// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import { TextField, Button, Grid, Typography, Container, FormControl, InputLabel, Select, MenuItem } from '@material-ui';
// import { DatePicker } from '@mui/lab';
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { NavLink } from "react-router-dom";
// import { DatePicker } from '@mui/lab';
// import { DatePicker } from '@material-ui/pickers';

const ApplicantRegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [contact, setContact] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [institute, setInstitute] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [cv, setCV] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the form data
    const formData = {
      email,
      password,
      firstName,
      lastName,
      gender,
      dateOfBirth,
      contact,
      degreeName,
      institute,
      cgpa,
      passingYear,
      address,
      photo,
      cv,
    };

    // Perform the registration logic by sending the form data to the server
    // Replace the endpoint URL with your server's endpoint
    fetch("http://example.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        // Reset the form fields
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setGender("");
        setDateOfBirth(null);
        setContact("");
        setDegreeName("");
        setInstitute("");
        setCGPA("");
        setPassingYear("");
        setAddress("");
        setPhoto("");
        setCV("");
      })
      .catch((error) => {
        // Handle any error that occurred during registration
        console.error(error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Registration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid>
            <p> date</p>
          </Grid>
          {/* <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
        <DatePicker
          label="Controlled picker"
          value={dateOfBirth}
          onChange={(date) => setDateOfBirth(date)}
        />
      </DemoContainer>
    </LocalizationProvider>
            <DatePicker
              label="Date of Birth"
              format="MM/dd/yyyy"
              value={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              fullWidth
              inputVariant="outlined"
            />
          </Grid> */}
          <Grid item xs={6}>
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contact Number"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Degree Name"
              fullWidth
              value={degreeName}
              onChange={(e) => setDegreeName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
          <TextField
          label="Institute"
          type="text"
          value={institute}
          onChange={(e) => setInstitute(e.target.value)}
          required
        />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CGPA"
              fullWidth
              value={cgpa}
              onChange={(e) => setCGPA(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Passing Year"
              fullWidth
              value={passingYear}
              onChange={(e) => setPassingYear(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
          <TextField
          label="Address"
          multiline
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
          <NavLink style={{ textDecoration: "none" }} to="/login">
            <Button variant="text">Already Registered? Please Login</Button>
          </NavLink>
        </Grid>
      </form>
    </Container>
  );
};

export default ApplicantRegistrationPage;
