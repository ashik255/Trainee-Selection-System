import React, { useState } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
// import './FinalList.css';

const FinalList = () => {
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: 'John Doe',
      writtenExamScore: 90,
      aptitudeTestScore: 85,
      technicalInterviewScore: 95,
      hrInterviewScore: 88,
      totalScore: 358,
      status: 'Selected',
    },
    {
      id: 2,
      name: 'Jane Smith',
      writtenExamScore: 88,
      aptitudeTestScore: 80,
      technicalInterviewScore: 92,
      hrInterviewScore: 85,
      totalScore: 345,
      status: 'Selected',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      writtenExamScore: 82,
      aptitudeTestScore: 78,
      technicalInterviewScore: 88,
      hrInterviewScore: 90,
      totalScore: 338,
      status: 'Selected',
    },
    {
      id: 4,
      name: 'Emily Williams',
      writtenExamScore: 78,
      aptitudeTestScore: 82,
      technicalInterviewScore: 80,
      hrInterviewScore: 75,
      totalScore: 315,
      status: 'Not Selected',
    },
  ]);

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
                <tr key={applicant.id}>
                  <td>{applicant.id}</td>
                  <td>{applicant.name}</td>
                  <td>{applicant.writtenExamScore}</td>
                  <td>{applicant.aptitudeTestScore}</td>
                  <td>{applicant.technicalInterviewScore}</td>
                  <td>{applicant.hrInterviewScore}</td>
                  <td>{applicant.totalScore}</td>
                  <td>{applicant.status}</td>
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
