import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
// import user1 from "../../assets/images/users/user1.jpg";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import "./ApplicationTable.css" // Import the CSS file for custom styling
import ApprovedTable from "./ApprovedTable";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
    isApproved: false,
  },
  {
    avatar: user2,
    name: "John Doe",
    email: "johndoe@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
    isApproved: true,
  },
  {
    avatar: user3,
    name: "Alice Smith",
    email: "alice.smith@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
    isApproved: false,
  },
  {
    avatar: user4,
    name: "Bob Johnson",
    email: "bob.johnson@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
    isApproved: true,
  },
  {
    avatar: user5,
    name: "Emma Lee",
    email: "emma.lee@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
    isApproved: true,
  },
];

const rowsPerPage = 5; // Number of rows to display per page

const ApplicationTable = () => {
  const [selectedTech, setSelectedTech] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

  //   const fetchData = async () => {
  //     try {
  //       const url = selectedTech ? `/api/applications?tech=${selectedTech}` : "/api/applications";
  //       const response = await fetch(url);
  //       const data = await response.json();
  //       setFilteredData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [selectedTech]);

    // Filter data based on the selected technology
    const filteredData = tableData.filter(
      (tdata) => selectedTech === "" || tdata.project === selectedTech
    );
    setFilteredData(filteredData);
  }, [selectedTech]);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  // Get the current page's data
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleStatusToggle = (index) => {
    const updatedData = [...filteredData];
    updatedData[index].status = updatedData[index].status === "approved" ? "none" : "approved";
    setFilteredData(updatedData);
  }

  return (
    <div>
      {/* <ApprovedTable approvedData={tableData} ></ApprovedTable> */}
      <Card className="custom-card">
        <CardBody>
          <div className="custom-select-wrapper">
            {/* Wrap the select element with a custom wrapper */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="custom-select"
            >
              <option value="">All</option>
              <option value="Flexy React">Flexy React</option>
              <option value="Lading pro React">Lading pro React</option>
              <option value="Elite React">Elite React</option>
              <option value="Ample React">Ample React</option>
            </select>
            <div className="custom-select-arrow"></div>
            {/* Custom arrow icon */}
          </div>
          <CardTitle className="text-center" tag="h5">
            Application List
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Application
          </CardSubtitle>

          <Table className="custom-table" responsive borderless>
            <thead>
              <tr>
                <th>Applicant</th>
                <th>Degree name</th>
                <th>University Name</th>
                <th>Gender</th>
                <th>Cgpa</th>
                <th>Passing Year</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((tdata, index) => (
                <tr key={index} className="border-top" onClick={() => handleStatusToggle(index)}>
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                  <td>3.50</td>
                  <td>2029</td>
                  <td>
                  
            {tdata.status === "approved" ? (
              <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
            ) : (
              <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
            )}
          </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <nav className="pagination">
            <ul>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <li key={page}>
                  <button
                    className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </CardBody>
      </Card>
    </div>
    
  );
};

export default ApplicationTable;

/* ApplicationTable.css */

/* ... existing styles ... */
