import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Paper,
  Grid,
  TextareaAutosize,
} from '@mui/material';
import axios from 'axios';

const CreateCircular = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    about: '',
    requirement: '',
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
      const clonedFormValues = JSON.parse(JSON.stringify(formValues));
      const response = await axios.post(
        'http://localhost:8081/admin/circular/create',
        clonedFormValues
      );

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
      <h2 className='mt-2 p-2'>Create Circular</h2>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <TextField
            name="title"
            label="Title"
            value={formValues.title}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            margin="normal"
          />

          <TextField
            name="imgLink"
            label="Image Link"
            value={formValues.imgLink}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            margin="normal"
          />

          <TextareaAutosize
            name="about"
            aria-label="minimum height"
            minRows={3}
            placeholder="About"
            value={formValues.about}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px' }}
          />

          <TextareaAutosize
            name="description"
            aria-label="minimum height"
            minRows={4}
            placeholder="Description"
            value={formValues.description}
            onChange={handleChange}
            required
            style={{ width: '100%', marginBottom: '10px' }}
          />

          {/* Date Pickers */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="startDate"
                label="Starting Date"
                type="date"
                value={formValues.startDate}
                onChange={(e) => handleDateChange(e.target.value, 'startDate')}
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="endDate"
                label="Ending Date"
                type="date"
                value={formValues.endDate}
                onChange={(e) => handleDateChange(e.target.value, 'endDate')}
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Create
          </Button>

          {/* Success Message */}
          {successMessage && (
            <div style={{ color: 'green', marginTop: '10px' }}>{successMessage}</div>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default CreateCircular;
