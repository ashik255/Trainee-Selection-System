import React, { useState } from "react";
import QRCode from "qrcode.react";
import {QrReader} from "react-qr-reader";

const QRCodeGeneratorAndScanner = () => {
  const [qrCodeData, setQrCodeData] = useState("");
  const [scanSuccess, setScanSuccess] = useState(false);

  const handleChange = (e) => {
    setQrCodeData(e.target.value);
  };

  const handleScan = (data) => {
    if (data) {
      setQrCodeData(data);
      setScanSuccess(true);
    }
  };

  const handleError = (error) => {
    console.error("Error scanning QR code:", error);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          
          <div className="text-center mb-4">
            <QRCode value={qrCodeData} size={200} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="text-center">
            {scanSuccess ? (
              <h4>Scan Success! Data: {qrCodeData}</h4>
            ) : (
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "100%" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGeneratorAndScanner;



// import React, { useState } from "react";
// import QRCode from "qrcode.react";
// import axios from "axios";

// const QrCodeGenerator = () => {
//   const [inputData, setInputData] = useState("");
//   const [qrCodeData, setQrCodeData] = useState("");

//   const handleChange = (e) => {
//     setInputData(e.target.value);
//   };

//   const generateQRCode = () => {
//     setQrCodeData(inputData);
//   };

//   const fetchDataFromApi = async () => {
//     try {
//       const response = await axios.get("your_api_url_here");
//       const apiData = response.data; // Update this based on your API response structure
//       setInputData(apiData);
//       setQrCodeData(apiData);
//     } catch (error) {
//       console.error("Error fetching data from API:", error);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6">
//           <div className="form-group">
//             <label htmlFor="dataInput">Enter Data:</label>
//             <input
//               type="text"
//               id="dataInput"
//               className="form-control"
//               value={inputData}
//               onChange={handleChange}
//             />
//           </div>
//           <button className="btn btn-primary mr-2" onClick={generateQRCode}>
//             Generate QR Code
//           </button>
//           <button className="btn btn-secondary" onClick={fetchDataFromApi}>
//             Fetch Data from API
//           </button>
//         </div>
//         <div className="col-md-6 text-center">
//           <div className="qr-code-container">
//             <QRCode value={qrCodeData} size={200} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QrCodeGenerator;