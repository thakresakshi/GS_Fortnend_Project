import React, { useEffect, useState } from 'react';

const SearchedDate = () => {
  const [data, setData] = useState([]);
  const [searchDate, setSearchDate] = useState('');

  // Fetch data from the API with optional date filtering
  const fetchData = (date) => {
    const endpoint = date ? `YOUR_API_ENDPOINT?date=${date}` : 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // Fetch all data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Handle date change
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setSearchDate(selectedDate);
    fetchData(selectedDate);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'left' }}>
      <input 
        type="date" 
        value={searchDate} 
        onChange={handleDateChange} 
        style={{ marginBottom: '20px', padding: '10px', fontSize: '16px', marginTop:'20px'}}
      />
      <table style={{ borderCollapse: 'collapse', width: '80%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchedDate;




// Make sure your API endpoint can handle date filtering via query parameters like ?
// date=YYYY-MM-DD. Adjust the endpoint and query parameter as needed based on your API's specifications.








