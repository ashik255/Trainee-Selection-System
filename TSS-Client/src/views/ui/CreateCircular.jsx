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
      const response = await axios.post('http://localhost:8081/admin/create', clonedFormValues);

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
          <br />
          <TextField
            name="imgLink"
            label="Image Link"
            value={formValues.imgLink}
            onChange={handleChange}
            fullWidth
            required
          />
          <br />
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
          <br />
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
              />
            </Grid>
          </Grid>

          <br />
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
