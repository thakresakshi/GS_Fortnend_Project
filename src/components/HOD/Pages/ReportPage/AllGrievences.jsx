import React, { useEffect, useState } from 'react';

const AllGrievances = () => {
  const [grievances, setGrievances] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch('YOUR_API_ENDPOINT') // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      .then(response => response.json())
      .then(data => setGrievances(data))
      .catch(error => console.error('Error fetching grievances:', error));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'left' }}>
      <h1>All Grievances</h1>
      <table style={{ borderCollapse: 'collapse', width: '80%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Title</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {grievances.map((grievance) => (
            <tr key={grievance.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{grievance.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{grievance.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{grievance.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{grievance.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllGrievances;
