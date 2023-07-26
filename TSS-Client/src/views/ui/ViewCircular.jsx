import React, { useState, useEffect } from "react";
import { Container, Paper, Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const ViewCircular = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/admin/circular/getAllCircular");
        setData(response.data.data);
      } catch (error) {
        console.error(error);
        // Handle error here, e.g., show an error message to the user.
      }
    };

    fetchData();
  }, []);

  const handleApplyButtonClick = async (circularId, applicantId) => {
    try {
      await axios.post(`http://localhost:8081/applicant/apply/${circularId}/${applicantId}`);
      // Optionally, you can show a success message or update the UI to indicate successful application.
    } catch (error) {
      console.error(error);
      // Handle error here, e.g., show an error message to the user.
    }
  };

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Grid container spacing={3}>
          {data.map((course) => (
            <Grid item xs={12} sm={6} md={4} key={course.circularId}>
              <Card style={{ marginBottom: "20px" }}>
                {course.imgLink && (
                  <CardMedia component="img" height="200" image={course.imgLink} alt={course.title} />
                )}
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {course.description}
                  </Typography>
                </CardContent>
                <Link to={`/circulardetails/${course.circularId}`}>
                  <Button variant="outlined" color="primary">
                    View Course
                  </Button>
                </Link>
                <Button onClick={() => handleApplyButtonClick(course.circularId,  course.applicantId )}>Apply</Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default ViewCircular;
