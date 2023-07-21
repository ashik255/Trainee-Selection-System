import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css'; // Import the custom CSS file
import { Link } from 'react-router-dom';

const AddEvaluator = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    roles: '', // Fix the property name from 'role' to 'roles'
  });
 

  const handleChange = (e) => {
    const { name, value } = e.target; // Fix the destructuring to get 'name' and 'value' from e.target
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [successMessage, setSuccessMessage] = useState('');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'https://example-api.com/register' with your server API endpoint for user registration
    fetch('http://localhost:8081/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Server response:', data);
        // Handle the server response as needed
        setSuccessMessage(data.message);
        setRegisteredEmail(data.message); // Extract the registered email from the response
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors if any
      });
  };

  return (
    <div className="user-registration-form">
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

        <Form.Group controlId="role">
          <Form.Label>Role</Form.Label>
          <Form.Control
            as="select"
            name="roles" // Fix the name attribute to 'roles' to match the state property
            value={userDetails.roles}
            onChange={handleChange}
            required
          >
            <option value="">Select a role</option>
            <option value="Evaluator">Evaluator</option>
            {/* Add other role options here */}
          </Form.Control>
        </Form.Group>

        <Button className='mt-2 p-2' variant="primary" type="submit">
          Register
        </Button>
        {successMessage && (
        <div className="success-message">
          Registration successful : {successMessage}
          <hr />
          Email: {registeredEmail}
        </div>
      )}
        <div className="login-link mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </div>
      </Form>
    </div>
  );
};

export default AddEvaluator;
