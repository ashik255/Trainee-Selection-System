import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import axios from "axios";
import "./ApplicationTable.css"

const rowsPerPage = 4; // Number of rows to display per page

const ApplicationTable = () => {
  const [data, setData] = useState([]);
  const [selectedTech, setSelectedTech] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/admin/circular/getAllCircular"
        );
        const transformedData = response.data.data.flatMap((circular) =>
          circular.applicants.map((applicant) => ({
            avatar: applicant.photo,
            name: `${applicant.firstName} ${applicant.lastName}`,
            email: applicant.user.email,
            title: circular.title,
            status: applicant.role?.roleName || "none",
            gender: applicant.gender,
            degreeName: applicant.degreeName,
            cgpa: applicant.cgpa,
            UniversityName: applicant.institute,
            passingYear: applicant.passingYear,
          }))
        );
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter data based on the selected technology and current page
  const getFilteredData = () => {
    let filteredData = data;

    if (selectedTech !== "") {
      filteredData = data.filter((tdata) => tdata.title === selectedTech);
    }

    return filteredData;
  };

  // Get the current page's data
  const filteredData = getFilteredData();
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleStatusToggle = (index) => {
    const updatedData = [...data];
    updatedData[index].status = updatedData[index].status === "approved" ? "none" : "approved";
    setData(updatedData);
  };

  return (
    <div>
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
              <option value="MERN">MERN</option>
              <option value="JAVA">JAVA</option>
              <option value="SQA">SQA</option>
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
                <th>Title</th>
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
                  <td>{tdata.title}</td>
                  <td>{tdata.degreeName}</td>
                  <td>{tdata.UniversityName}</td>
                  <td>{tdata.gender}</td>
                  <td>{tdata.cgpa}</td>
                  <td>{tdata.passingYear}</td>
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

