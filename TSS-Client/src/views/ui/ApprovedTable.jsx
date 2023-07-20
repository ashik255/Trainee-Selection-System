import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const rowsPerPage = 5;

class ApprovedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { approvedData } = this.props;
    const { currentPage } = this.state;

    // Check if approvedData is defined, otherwise provide an empty array
    const data = approvedData || [];
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(data.length / rowsPerPage);

    return (
      <div>
        {/* <ApprovedTable approvedData={tableData} ></ApprovedTable> */}
        <Card className="custom-card">
          <CardBody>
            <CardTitle className="text-center" tag="h5">
              Approved Applications
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Overview of Approved Applications
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
                  <tr key={index} className="border-top">
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
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
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
                      onClick={() => this.handlePageChange(page)}
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
  }
}

export default ApprovedTable;
