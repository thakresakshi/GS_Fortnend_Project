import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GrievanceTable.css'; // Add CSS for styling the table

const GrievanceTable = () => {
  const [grievances, setGrievances] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [departments, setDepartments] = useState(['air', 'water', 'fire', 'land']);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [status, setStatus] = useState('');

  const fetchGrievances = async () => {
    try {
      const response = await axios.get('http://localhost:8082/prm/grievances/getAll');
      setGrievances(response.data.filter(grievance => !grievance.status && !grievance.forwardedToDept));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error('Error fetching grievances:', err);
    }
  };

  const handleStatusChange = async (grievanceId, newStatus) => {
    try {
      const department = newStatus === 'Forward' ? selectedDepartment : null;
      await axios.put(`http://localhost:8082/prm/grievances/${grievanceId}/status`, {
        status: newStatus,
        forwardedToDept: department
      });
      // Refresh grievances after update
      fetchGrievances();
    } catch (err) {
      setError(err.message);
      console.error('Error updating status:', err);
    }
  };

  useEffect(() => {
    fetchGrievances();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Grievances</h1>
      <table>
        <thead>
          <tr>
            <th>Grievance ID</th>
            <th>Date</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Tehsil Name</th>
            <th>Village Name</th>
            <th>Address</th>
            <th>Grievance</th>
            <th>Aadhar No</th>
            <th>Actions</th>
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
              <td>{grievance.grievance}</td>
              <td>{grievance.aadharNo}</td>
              <td>
                <button onClick={() => setSelectedGrievance(grievance.grievanceId)}>Update Status</button>
                {selectedGrievance === grievance.grievanceId && (
                  <div className="update-status">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="">Select Status</option>
                      <option value="Forward">Forward</option>
                      <option value="Done">Done</option>
                      <option value="Scrap">Scrap</option>
                    </select>
                    {status === 'Forward' && (
                      <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept, index) => (
                          <option key={index} value={dept}>{dept}</option>
                        ))}
                      </select>
                    )}
                    <button onClick={() => handleStatusChange(grievance.grievanceId, status)}>Confirm</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GrievanceTable;
