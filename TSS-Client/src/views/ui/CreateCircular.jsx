import React, { useState } from 'react';
import { TextField, Button, Container, Paper,Grid } from '@mui/material';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, FormControl } from 'react-bootstrap';
// import { Form } from 'reactstrap';
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
      const clonedFormValues = JSON.parse(JSON.stringify(formValues));
      const response = await axios.post('http://localhost:8081/admin/circular/create', clonedFormValues);

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
      <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <TextField
            name="title"
            label="Title"
            value={formValues.title}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            style={{ marginBottom: '15px' }}
          />

          {/* Image Link */}
          <TextField
            name="imgLink"
            label="Image Link"
            value={formValues.imgLink}
            onChange={handleChange}
            fullWidth
            required
            variant="outlined"
            style={{ marginBottom: '15px' }}
          />

          {/* Description */}
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
            style={{ marginBottom: '15px' }}
          />

          {/* Date Pickers */}
          <Grid container spacing={2} style={{ marginBottom: '15px' }}>
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
          <Button type="submit" variant="contained" color="primary" style={{ width: '100%', marginBottom: '15px' }}>
            Create
          </Button>

          {/* Success Message */}
          {successMessage && (
            <div style={{ color: 'green', marginTop: '8px', textAlign: 'center', fontSize: '16px' }}>
              {successMessage}
            </div>
          )}
        </form>
      </Paper>
    </Container>
  );
};

export default CreateCircular;
