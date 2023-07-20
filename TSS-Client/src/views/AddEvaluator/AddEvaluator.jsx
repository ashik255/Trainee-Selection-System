import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css'; // Import the custom CSS file

const AddEvaluator = () => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace 'https://example-api.com/register' with your server API endpoint for user registration
    fetch('https://example-api.com/register', {
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
            name="role"
            value={userDetails.role}
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
      </Form>
    </div>
  );
};

export default AddEvaluator ;
