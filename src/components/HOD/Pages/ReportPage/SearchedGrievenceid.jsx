import React, { useState, useEffect } from 'react';

const SearchedGrievenceid = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from the API
  useEffect(() => {
    fetch('YOUR_API_ENDPOINT') // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter data based on search term
  const filteredData = data.filter((item) =>
    item.id.toString().includes(searchTerm)
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'left' }}>
      <h1>Search Grievances by ID</h1>
      <input
        type="text"
        placeholder="Search by ID..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: '10px', marginBottom: '20px', fontSize: '16px' }}
      />
      <table style={{ borderCollapse: 'collapse', width: '80%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Grievance</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.age}</td> {/* Assuming age represents grievance */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchedGrievenceid;
