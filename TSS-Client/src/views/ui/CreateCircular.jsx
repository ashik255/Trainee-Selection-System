import React, { useState } from 'react';
import { TextField, Button, Container, Paper } from '@mui/material';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControl } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';

const CreateCircular = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    imgLink: '',
    description: '',
    startDate: '',
    endDate: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleDateChange = (date, name) => {
    setFormValues((prevValues) => ({ ...prevValues, [name]: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/admin/create', formValues);

      // If the response is successful, you can perform any additional actions here.
      console.log('Form submitted successfully!');
      console.log(response.data); // The response from the API

      setSuccessMessage('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      // Handle error here, e.g., show an error message to the user.
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="Title"
            value={formValues.title}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="imgLink"
            label="Image Link"
            value={formValues.imgLink}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            name="description"
            label="Description"
            value={formValues.description}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            variant="outlined"
            inputProps={{ style: { overflow: 'auto' } }}
          />
          {/* <FormControl */}
            <div style={{ marginBottom: '16px' }}>
             <label>Start Date:</label>
            <DatePicker
            label="Start Date"
              name="startDate"
              selected={formValues.startDate}
              onChange={(date) => handleDateChange(date, 'startDate')}
              dateFormat="MM/dd/yyyy"
              required
            />
          </div>
          {/* </FormControl> */}
          <div style={{ marginBottom: '16px' }}>
            <label>End Date:</label>
            <DatePicker
              name="endDate"
              selected={formValues.endDate}
              onChange={(date) => handleDateChange(date, 'endDate')}
              dateFormat="MM/dd/yyyy"
              required
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
          {successMessage && <div style={{ color: 'green', marginTop: '8px' }}>{successMessage}</div>}
        </form>

      </Paper>
    </Container>
  );
};

export default CreateCircular;
