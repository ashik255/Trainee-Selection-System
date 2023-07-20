import React, { useState, useEffect } from 'react';
import './UploadMarks.css';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';

const UploadMarks = () => {
  const [applicationStatus, setApplicationStatus] = useState('all');
  const [writtenExamPassed, setWrittenExamPassed] = useState(false);
  const [aptitudeTestPassed, setAptitudeTestPassed] = useState(false);
  const [technicalInterviewPassed, setTechnicalInterviewPassed] = useState(false);
  const [hrInterviewPassed, setHrInterviewPassed] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [writtenExamMarks, setWrittenExamMarks] = useState('');
  const [aptitudeTestMarks, setAptitudeTestMarks] = useState('');
  const [technicalInterviewMarks, setTechnicalInterviewMarks] = useState('');
  const [hrInterviewMarks, setHrInterviewMarks] = useState('');
  const [isApplicationSubmitted, setIsApplicationSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Dummy data for demonstration purposes. Replace this with actual data from your backend.
  const dummyNotices = [
    { id: 1, title: 'First Call Interview', date: '2023-07-20', status: 'first_call', score: 5 },
    { id: 2, title: 'Written Exam', date: '2023-07-21', status: 'written_exam', score: 10 },
    { id: 3, title: 'Aptitude Test', date: '2023-07-22', status: 'aptitude_test', score: 15 },
    { id: 4, title: 'Technical Interview', date: '2023-07-23', status: 'technical_interview', score: 20 },
    { id: 5, title: 'HR Interview', date: '2023-07-24', status: 'hr_interview', score: 25 },
  ];

  // Calculate the total score based on the rounds passed and entered marks
  useEffect(() => {
    let score = 0;
    if (writtenExamPassed) score += dummyNotices.find((notice) => notice.status === 'written_exam').score;
    if (aptitudeTestPassed) score += dummyNotices.find((notice) => notice.status === 'aptitude_test').score;
    if (technicalInterviewPassed) score += dummyNotices.find((notice) => notice.status === 'technical_interview').score;
    if (hrInterviewPassed) score += dummyNotices.find((notice) => notice.status === 'hr_interview').score;
    setTotalScore(score);
  }, [writtenExamPassed, aptitudeTestPassed, technicalInterviewPassed, hrInterviewPassed]);

  // Update the total score whenever any of the marks change
  useEffect(() => {
    let totalMarks = 0;
    if (writtenExamMarks) totalMarks += parseInt(writtenExamMarks, 10);
    if (aptitudeTestMarks) totalMarks += parseInt(aptitudeTestMarks, 10);
    if (technicalInterviewMarks) totalMarks += parseInt(technicalInterviewMarks, 10);
    if (hrInterviewMarks) totalMarks += parseInt(hrInterviewMarks, 10);
    setTotalScore(totalMarks);
  }, [writtenExamMarks, aptitudeTestMarks, technicalInterviewMarks, hrInterviewMarks]);

  // Filter the notices based on the applicationStatus prop and the state of passed rounds
  const filteredNotices =
    applicationStatus === 'all'
      ? dummyNotices
      : applicationStatus === 'written_exam' && !writtenExamPassed
      ? dummyNotices.filter((notice) => notice.status === 'written_exam')
      : applicationStatus === 'aptitude_test' && !aptitudeTestPassed
      ? dummyNotices.filter((notice) => notice.status === 'aptitude_test')
      : applicationStatus === 'technical_interview' && !technicalInterviewPassed
      ? dummyNotices.filter((notice) => notice.status === 'technical_interview')
      : applicationStatus === 'hr_interview' && !hrInterviewPassed
      ? dummyNotices.filter((notice) => notice.status === 'hr_interview')
      : [];

  const handleStatusChange = (status) => {
    setApplicationStatus(status);
  };

  const handleRoundPass = (round) => {
    switch (round) {
      case 'written_exam':
        setWrittenExamPassed(true);
        setSuccessMessage('Congratulations! You passed the Written Exam.');
        break;
      case 'aptitude_test':
        setAptitudeTestPassed(true);
        setSuccessMessage('Congratulations! You passed the Aptitude Test.');
        break;
      case 'technical_interview':
        setTechnicalInterviewPassed(true);
        setSuccessMessage('Congratulations! You passed the Technical Interview.');
        break;
      case 'hr_interview':
        setHrInterviewPassed(true);
        setSuccessMessage('Congratulations! You passed the HR Interview.');
        break;
      default:
        break;
    }
  };

  const handleSubmitApplication = () => {
    if (writtenExamPassed && aptitudeTestPassed && technicalInterviewPassed && hrInterviewPassed) {
      setIsApplicationSubmitted(true);
      setSuccessMessage('Congratulations! Your application has been successfully submitted.');
    } else {
      setSuccessMessage('Please complete all rounds before submitting the application.');
    }
  };

  return (
    <Container className="container">
      <Row>
        <Col>
          <h3 className="section-title">Filter by Application Status:</h3>
          <div className="filter-buttons">
            <Button
              variant="outline-primary"
              onClick={() => handleStatusChange('all')}
            >
              All
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleStatusChange('written_exam')}
            >
              Written Exam {writtenExamPassed ? '(Passed)' : ''}
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleStatusChange('aptitude_test')}
            >
              Aptitude Test {aptitudeTestPassed ? '(Passed)' : ''}
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleStatusChange('technical_interview')}
            >
              Technical Interview {technicalInterviewPassed ? '(Passed)' : ''}
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => handleStatusChange('hr_interview')}
            >
              HR Interview {hrInterviewPassed ? '(Passed)' : ''}
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="notice-board">
            <h2>All Marks</h2>
            <ul>
              {filteredNotices.map((notice) => (
                <li key={notice.id}>
                  <span className={`notice-title ${notice.status}`}>{notice.title}</span>
                  <span className="notice-date">{notice.date}</span>
                  <span className="notice-score">Score: {notice.score}</span>
                </li>
              ))}
            </ul>
            <div className="total-score">
              <p>Total Score: {totalScore}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Written Exam */}
          {applicationStatus === 'written_exam' && !writtenExamPassed && (
            <div className="upload-form">
              <Form>
                <Form.Group>
                  <Form.Label>Enter Written Exam Marks:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Written Exam Marks"
                    value={writtenExamMarks}
                    onChange={(e) => setWrittenExamMarks(e.target.value)}
                  />
                </Form.Group>
                <Button onClick={() => handleRoundPass('written_exam')}>
                  Pass Written Exam
                </Button>
                {successMessage && (
                  <Alert variant="success" className="success-message">
                    {successMessage}
                  </Alert>
                )}
              </Form>
            </div>
          )}

          {/* Aptitude Test */}
          {applicationStatus === 'aptitude_test' && !aptitudeTestPassed && (
            <div className="upload-form">
              <Form>
                <Form.Group>
                  <Form.Label>Enter Aptitude Test Marks:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Aptitude Test Marks"
                    value={aptitudeTestMarks}
                    onChange={(e) => setAptitudeTestMarks(e.target.value)}
                  />
                </Form.Group>
                <Button onClick={() => handleRoundPass('aptitude_test')}>
                  Pass Aptitude Test
                </Button>
                {successMessage && (
                  <Alert variant="success" className="success-message">
                    {successMessage}
                  </Alert>
                )}
              </Form>
            </div>
          )}

          {/* Technical Interview */}
          {applicationStatus === 'technical_interview' && !technicalInterviewPassed && (
            <div className="upload-form">
              <Form>
                <Form.Group>
                  <Form.Label>Enter Technical Interview Marks:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Technical Interview Marks"
                    value={technicalInterviewMarks}
                    onChange={(e) => setTechnicalInterviewMarks(e.target.value)}
                  />
                </Form.Group>
                <Button onClick={() => handleRoundPass('technical_interview')}>
                  Pass Technical Interview
                </Button>
                {successMessage && (
                  <Alert variant="success" className="success-message">
                    {successMessage}
                  </Alert>
                )}
              </Form>
            </div>
          )}

          {/* HR Interview */}
          {applicationStatus === 'hr_interview' && !hrInterviewPassed && (
            <div className="upload-form">
              <Form>
                <Form.Group>
                  <Form.Label>Enter HR Interview Marks:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter HR Interview Marks"
                    value={hrInterviewMarks}
                    onChange={(e) => setHrInterviewMarks(e.target.value)}
                  />
                </Form.Group>
                <Button onClick={() => handleRoundPass('hr_interview')}>
                  Pass HR Interview
                </Button>
                {successMessage && (
                  <Alert variant="success" className="success-message">
                    {successMessage}
                  </Alert>
                )}
              </Form>
            </div>
          )}

          {/* Submit Application Button */}
          {writtenExamPassed && aptitudeTestPassed && technicalInterviewPassed && hrInterviewPassed && !isApplicationSubmitted && (
            <div className="submit-button">
              <Button onClick={handleSubmitApplication}>
                Submit Application
              </Button>
            </div>
          )}

          {/* Application Submitted Message */}
          {isApplicationSubmitted && (
            <div className="application-submitted">
              <Alert variant="success" className="success-message">
                Congratulations! Your application has been successfully submitted.
              </Alert>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UploadMarks;
