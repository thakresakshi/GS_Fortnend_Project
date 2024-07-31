import React, {useState } from 'react';

const SearchedTalukavillage = () => {
  const [taluka, setTaluka] = useState('');
  const [village, setVillage] = useState('');
  const [data, setData] = useState([]);

  // Fetch data from the API with optional taluka and village filtering
  const fetchData = (taluka, village) => {
    let endpoint = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint

    if (taluka || village) {
      endpoint += '?';
      if (taluka) endpoint += `taluka=${taluka}&`;
      if (village) endpoint += `village=${village}`;
    }

    fetch(endpoint)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  // Handle taluka change
  const handleTalukaChange = (e) => {
    const selectedTaluka = e.target.value;
    setTaluka(selectedTaluka);
    fetchData(selectedTaluka, village);
  };

  // Handle village change
  const handleVillageChange = (e) => {
    const selectedVillage = e.target.value;
    setVillage(selectedVillage);
    fetchData(taluka, selectedVillage);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'left' }}>
      <h1>Search Grievances by Taluka and Village</h1>
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          placeholder="Enter Taluka" 
          value={taluka} 
          onChange={handleTalukaChange} 
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input 
          type="text" 
          placeholder="Enter Village" 
          value={village} 
          onChange={handleVillageChange} 
          style={{ padding: '10px', fontSize: '16px' }}
        />
      </div>
      <table style={{ borderCollapse: 'collapse', width: '80%', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Title</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Description</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Taluka</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Village</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.title}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.description}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.taluka}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.village}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchedTalukavillage;
