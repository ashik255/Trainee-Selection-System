import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './style.css'; // Import the custom CSS file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/pro-duotone-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddEvaluator = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    roles: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [successMessage, setSuccessMessage] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [submittedData, setSubmittedData] = useState(null); // State to store submitted data

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'http://localhost:8082/applicant/getAllApplicant' with your API endpoint
    axios.post('http://localhost:8082/applicant/getAllApplicant', userDetails)
      .then((response) => {
        console.log('Server response:', response.data);
        setSubmittedData(response.data); // Store the server response in the state
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
    <div className="user-registration-form">
      {showForm ? (
        <>
          <h2>Add Evaluator</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={userDetails.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </Form.Group>

            <Form.Group controlId="roles">
              <Form.Label>Role</Form.Label>
              <Form.Control
                as="select"
                name="roles"
                value={userDetails.roles}
                onChange={handleChange}
                required
              >
                <option value="">Select a role</option>
                <option value="Evaluator">Evaluator</option>
                {/* Add other role options here */}
              </Form.Control>
            </Form.Group>

            <Button className="mt-2 p-2" variant="primary" type="submit">
              Register
            </Button>
          </Form>
          {successMessage && (
            <div className="success-message">
              Registration successful: {successMessage}
              <hr />
              Email: {registeredEmail}
            </div>
          )}
        </>
      ) : (
        <Button onClick={() => setShowForm(true)}>
          Add Evaluator 
        </Button>
      )}

      {/* Data view section */}
      {submittedData && (
        <div className="data-view">
          <h2>Submitted Data</h2>
          {submittedData.map((dataItem) => (
            <Card key={dataItem.id} className="mb-3">
              <Card.Body>
                <Card.Title>{dataItem.name}</Card.Title>
                <Card.Text>{dataItem.email}</Card.Text>
                <Card.Text>{dataItem.roles}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

      <div className="login-link mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default AddEvaluator;
