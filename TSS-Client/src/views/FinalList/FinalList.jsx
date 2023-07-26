import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const FinalList = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    // Function to fetch data from the URL and update the state
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/marks/upload/hr/passed');
        const data = await response.json();
        setApplicants(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="section-title">Final List of Applicants</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Written Exam Score</th>
                <th>Aptitude Test Score</th>
                <th>Technical Interview Score</th>
                <th>HR Interview Score</th>
                <th>Total Score</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant.applicantId}>
                  <td>{applicant.applicantId}</td>
                  <td>{applicant.name}</td>
                  <td>{applicant.written_exam}</td>
                  <td>{applicant.aptitude_test}</td>
                  <td>{applicant.technical_interview}</td>
                  <td>{applicant.hr_interview}</td>
                  <td>{applicant.total_marks}</td>
                  <td>{applicant.hrPassed ? 'Selected' : 'Not Selected'}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default FinalList;

