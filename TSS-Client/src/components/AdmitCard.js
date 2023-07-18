import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import pic from "../assets/images/users/ashik.png"
const AdmitCard = () => {
  // Styles for the PDF
//   useEffect(() => {
    const generatePdf = async () => {
      const input = document.getElementById("pdf-container");

      try {
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL({pic});
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("admit_card.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
      }
    };

    // generatePdf();
//   }, []);
  return (

     <Container className="p-4" id="pdf-container">
      <div className="text-center bg-info">
        <h4>Youth Skill Development Training, Bjit Academy</h4>
        <p>Address: House-1, Road-2E Baridhara J Block, Dhaka 1212</p>
      </div>
      <h5 className="mb-4 text-center">ADMIT CARD </h5>
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
        </Col>
        <Col className="text-center">
          <p>USER ID: 222DC7DH</p>
          <Image
            src={pic}
            alt="Admit Card Image"
            fluid
            id="pdf-image"
          />
        </Col>
      </Row>
      <button className="btn btn-primary" onClick={generatePdf}>
//           Generate PDF
//         </button>
    </Container>
  );
};

export default AdmitCard;


// import React, { useEffect } from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import pic from "../assets/images/users/ashik.png"
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// // import jsPDF from "jspdf";

// const AdmitCard = () => {

    
    
//         // Function to generate the PDF
//         const generatePdf = async () => {
//           const input = document.getElementById("pdf-container");
    
//           try {
//             const canvas = await html2canvas(input);
//             const imgData = canvas.toDataURL({pic});
//             const pdf = new jsPDF("p", "mm", "a4");
//             pdf.addImage(imgData, "PNG", 5, 5, 200, 0);
//             pdf.save("admit_card.pdf");
//           } catch (error) {
//             console.error("Error generating PDF:", error);
//           }
//         };
//         useEffect(() => {
//         // Call the PDF generation function when the component mounts
//         generatePdf();
//       }, []);
//     return (
//         <Container className="p-4">
//                 <div className="text-center bg-info">
//                 <h4>Youth Skill Development Training, Bjit Academy</h4>
//                 <p>Address: House-1, Road-2E Baridhara J Block, Dhaka 1212</p>
//                 <div  >
//                 </div>
//             </div>
//             <h5 className="mb-4 text-center">ADMIT CARD </h5>
//                 <Row>
//                 <h5 className="mb-4 text-center">WRITTEN EXAMINATION</h5>
//             <Col>

//                 <p>ROLL: 3300116 </p>
//                 <p>CLASS: THREE (3)</p>
//                 <p>SHIFT: FEEDER</p>
//                 <p>APPLICANT'S NAME: SALWA JAWAD SALFEE</p>
//                 <p>FATHER'S NAME: MD. JAHANGIR HOSSAIN</p>
//                 <p>MOTHER'S NAME: SALIMA SULTANA</p>
//                 <p>EXAM CENTER: MOHAMMADPUR GOVT HIGH SCHOOL, DHAKA</p>
//                 <p>EXAM DATE: 17/12/2015</p>
//                 <p>EXAM DURATION: 10AM TO 11AM</p>
//                 </Col>
//             <Col className="text-center">
//                 <p>
//                 USER ID: 222DC7DH
//                 </p>
//                 <Image src={pic} alt="Admit Card Image" fluid />
//             </Col>
//         </Row>
//         <div className="text-center mt-4">
//         <button className="btn btn-primary" onClick={generatePdf}>
//           Generate PDF
//         </button>
//       </div>
    
//     </Container >
//   );
// };

// export default AdmitCard;
