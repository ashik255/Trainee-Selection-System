import React, { useRef } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import QRCode from "qrcode.react";
import pic from "../assets/images/users/ashik.png";
import "./AdmitCard.css"; // Create AdmitCard.css for custom styles

const AdmitCard = () => {
  const containerRef = useRef(null);

  const generatePdf = async () => {
    const input = containerRef.current;

    try {
      const canvas = await html2canvas(input);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("admit_card.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };


  return (
    <div>
    <Container className="p-4 pdf-container" ref={containerRef}>
      <div className="text-center  style={{backgroundColor:'#FAFFAF'}}">
        <h4>Youth Skill Development Training, Bjit Academy</h4>
        <p>Address: House-1, Road-2E Baridhara J Block, Dhaka 1212</p>
      </div>
      <h5 className="mb-4 text-center">ADMIT CARD</h5>
      <Row>
        <h5 className="mb-4 text-center">WRITTEN EXAMINATION</h5>
        <Col>
          <p>ROLL: 3300116</p>
          <p>CLASS: THREE (3)</p>
          <p>SHIFT: FEEDER</p>
          <p>APPLICANT'S NAME: SALWA JAWAD SALFEE</p>
          <p>FATHER'S NAME: MD. JAHANGIR HOSSAIN</p>
          <p>MOTHER'S NAME: SALIMA SULTANA</p>
          <p>EXAM CENTER: MOHAMMADPUR GOVT HIGH SCHOOL, DHAKA</p>
          <p>EXAM DATE: 17/12/2015</p>
          <p>EXAM DURATION: 10AM TO 11AM</p>
          <p>USERNAME (UASL): john_doe123</p>
        </Col>
        <Col className="text-center">
          <p>USER ID: 222DC7DH</p>
          <Image src={pic} alt="Admit Card Image" fluid id="pdf-image" />
        </Col>
      </Row>
      <div className="qr-code">
        <QRCode value="https://example.com" size={100} />
      </div>
      <div className="admit-card-footer">
        <p className="footer-heading">Instructions:</p>
        <ul>
          <li>Bring this admit card and a valid ID proof to the exam center.</li>
          <li>Arrive at least 30 minutes before the exam start time.</li>
          <li>Electronic devices are not allowed in the exam hall.</li>
          <li>Follow the exam supervisor's instructions during the exam.</li>
        </ul>
      </div>
      
    </Container>
    <button className="btn mt-4 btn-primary" onClick={generatePdf}>
        Generate PDF
      </button>
    </div>
  );
};

export default AdmitCard;
