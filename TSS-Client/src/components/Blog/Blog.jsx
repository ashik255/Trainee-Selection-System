import React from 'react';
import pic1 from '../../assets/images/blog/pic1.jpg';
import pic2 from '../../assets/images/blog/pic2.jpg';
import pic3 from '../../assets/images/blog/pic3.jpg';
import pic4 from '../../assets/images/blog/pic4.jpg';
import pic5 from '../../assets/images/blog/pic5.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import './Blog.css'; // Import the custom CSS styles
import { Paper } from '@mui/material';

const Blog = () => {
  return (
   <Paper elevation={2} >
     <Container>
      <Col className="blog-container  bg-white">
        <Row className="blog-header text-center">
          <h1>Join <span className='text-primary' style={{color:""}}>650+</span> Happy Learners</h1>
          <p>Learn from the best to become the best</p>
        </Row>
        <Row className="blog-images d-flex justify-content-center align-items-center">
          <Col xs={12} md={4} className="mb-3">
            <img src={pic1} alt="Blog 1" className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <img src={pic2} alt="Blog 2" className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <img src={pic3} alt="Blog 3" className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <img src={pic4} alt="Blog 4" className="img-fluid rounded" />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <img src={pic5} alt="Blog 5" className="img-fluid rounded" />
          </Col>
        </Row>
      </Col>
    </Container>
   </Paper>
  );
};

export default Blog;
