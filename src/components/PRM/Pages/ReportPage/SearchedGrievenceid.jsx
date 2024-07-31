import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Pages/GrievanceTable.css'; // Add CSS for styling the table

const GrievanceTable = () => {
  const [grievances, setGrievances] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGrievance, setSelectedGrievance] = useState(null);
  const [departments] = useState(['air', 'water', 'fire', 'land']);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const fetchGrievances = async () => {
    try {
      const response = await axios.get('http://localhost:8082/grievance/getAllGrivance');
      setGrievances(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      console.error('Error fetching grievances:', err);
    }
  };

  const handleStatusChange = async (grievanceId, status) => {
    try {
      await axios.put(`http://localhost:8082/grievance/updateStatus/${grievanceId}`, {
        status,
        department: status === 'Forward' ? selectedDepartment : null
      });
      // Refresh grievances after update
      fetchGrievances();
      setSelectedGrievance(null); // Reset the selected grievance
      setSelectedDepartment(''); // Reset the selected department
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
                <button onClick={() => handleStatusChange(grievance.grievanceId, 'Forward')}>Forward</button>
                <button onClick={() => handleStatusChange(grievance.grievanceId, 'Reject')}>Reject</button>
                <button onClick={() => handleStatusChange(grievance.grievanceId, 'Scrap')}>Scrap</button>
                {selectedGrievance === grievance.grievanceId && (
                  <div className="forward-options">
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                      <option value="">Select Department</option>
                      {departments.map((dept, index) => (
                        <option key={index} value={dept}>{dept}</option>
                      ))}
                    </select>
                    <button onClick={() => handleStatusChange(grievance.grievanceId, 'Forward')}>Confirm Forward</button>
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
