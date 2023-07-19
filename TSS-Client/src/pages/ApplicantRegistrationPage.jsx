

import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Container, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const ApplicantRegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [contact, setContact] = useState("");
  const [degreeName, setDegreeName] = useState("");
  const [institute, setInstitute] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [cv, setCV] = useState("");
  // const [role, setRole] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
     const role = {role:["applicant"]};
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
      role
    };
    const formData1 = new FormData();

    // Perform the registration logic by sending the form data to the server
    // Replace the endpoint URL with your server's endpoint
    fetch('http://localhost:8081/applicant/create', {
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
        setDateOfBirth("");
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
          <Grid item xs={6}>
            <TextField
              label="Date of Birth"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Contact Number"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Degree Name"
              fullWidth
              value={degreeName}
              onChange={(e) => setDegreeName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="University Name"
              fullWidth
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="CGPA"
              fullWidth
              value={cgpa}
              onChange={(e) => setCGPA(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
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
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Grid>
          {/* <Grid item xs={6}>
            <Typography variant="p">Upload Photo</Typography>
            <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="p">Upload CV</Typography>
            <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCV(e.target.files[0])} />
          </Grid> */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ApplicantRegistrationPage;
