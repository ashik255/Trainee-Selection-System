import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Paper, Typography, TextField, Grid } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddEvaluator = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: '',
    roles: '',
    title: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [evaluators, setEvaluators] = useState([]);

  useEffect(() => {
    // Fetch all evaluators when the component mounts
    axios.get('http://localhost:8081/admin/evaluator/getAll')
      .then((response) => {
        setEvaluators(response.data);
      })
      .catch((error) => {
        console.error('Error fetching evaluators:', error);
      });
  }, []);
  console.log(evaluators);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post data to 'http://localhost:8081/admin/evaluator/register'
    axios.post('http://localhost:8081/admin/evaluator/register', userDetails)
      .then((response) => {
        setSuccessMessage('Registration successful');
        setRegisteredEmail(userDetails.email);
        setShowForm(false); // Hide the form after submission

      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors if any
      });
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        {showForm ? (
          <>
            <Typography variant="h4">Add Evaluator</Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="name"
                    label="Name"
                    value={userDetails.name}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="title"
                    label="Title"
                    value={userDetails.title}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <TextField
                name="email"
                label="Email"
                type="email"
                value={userDetails.email}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                name="password"
                label="Password"
                type="password"
                value={userDetails.password}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                name="roles"
                label="Role"
                select
                value={userDetails.roles}
                onChange={handleChange}
                fullWidth
                required
              >

                <option value="Evaluator">Evaluator</option>
                {/* Add other role options here */}
              </TextField>
              <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Register
              </Button>
            </form>
            {successMessage && (
              <Typography variant="subtitle1" style={{ color: 'green', marginTop: '20px', textAlign: 'center' }}>
                {successMessage}
                <br />
                Email: {registeredEmail}
              </Typography>
            )}
          </>
        ) : (
          <Button onClick={() => setShowForm(true)} variant="contained" color="primary">
            Add Evaluator
          </Button>
        )}
      </Paper>

      {/* Data view section  */}
      {evaluators.length > 0 && (
          <div className="data-view mt-3">
            <Typography variant="h5">Evaluators List</Typography>
            {evaluators.map((evaluator) => (
              <Card key={evaluator.id} className="mb-3">
                <Card.Body>
                  <Typography variant="subtitle1">Name: {evaluator.data.name}</Typography>
                  <Typography variant="body1">Email: {evaluator.data.email}</Typography>
                  <Typography variant="body1">Role: {evaluator.data.roles}</Typography>
                  <Typography variant="body1">Title: {evaluator.data.title}</Typography>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}

      <div className="login-link mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </Container>
  );
};

export default AddEvaluator;
