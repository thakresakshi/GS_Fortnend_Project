import React, { useState, useEffect } from 'react';
import { getTotalPendinghod } from '../../API/index'; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css';

const GrievanceTable = () => {
  const [grievances, setGrievances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTotalPendinghod();
        setGrievances(data);
        console.log(data)
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="container mt-5 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="container mt-5 text-center text-danger">Error: {error.message}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Grievance List</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Grievance ID</th>
            <th>Date</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Tehsil Name</th>
            <th>Village Name</th>
            <th>Address</th>
            <th>Aadhar No</th>
            <th>Grievance</th>
          </tr>
        </thead>
        <tbody>
          {grievances.map((grievance) => (
            <tr key={grievance.grievanceId}>
              <td>{grievance.grievanceId}</td>
              <td>{grievance.date ? new Date(grievance.date).toLocaleString() : 'N/A'}</td>
              <td>{grievance.fullName}</td>
              <td>{grievance.email}</td>
              <td>{grievance.mobile}</td>
              <td>{grievance.tehsilName}</td>
              <td>{grievance.villageName}</td>
              <td>{grievance.address}</td>
              <td>{grievance.aadharNo}</td>
              <td>{grievance.grievance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GrievanceTable;
