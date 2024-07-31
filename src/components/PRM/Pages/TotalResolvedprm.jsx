import React, { useState, useEffect } from 'react';
import { Space, Table, Typography, Button, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

const TotalResolved = () => {
  const [status, setStatus] = useState(''); // State to store the selected status
  const [data, setData] = useState([]); // State to store the fetched data
  const [loading, setLoading] = useState(false); // State to manage loading state

  useEffect(() => {
    if (status) {
      fetchGrievances();
    }
  }, [status]);

  const fetchGrievances = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8082/prm/grievances/status`, {
        params: { status },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching grievances:', error);
    }
    setLoading(false);
  };

  const columns = [
    { title: 'Grievance ID', dataIndex: 'grievanceId', key: 'grievanceId' },
    { title: 'Aadhar No', dataIndex: 'aadharNo', key: 'aadharNo' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Full Name', dataIndex: 'fullName', key: 'fullName' },
    { title: 'Grievance', dataIndex: 'grievance', key: 'grievance' },
    { title: 'Mobile', dataIndex: 'mobile', key: 'mobile' },
    { title: 'Tehsil Name', dataIndex: 'tehsilName', key: 'tehsilName' },
    { title: 'Village Name', dataIndex: 'villageName', key: 'villageName' },
    { title: 'Forwarded To Dept', dataIndex: 'forwardedToDept', key: 'forwardedToDept' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Resolved</Typography.Title>
      <Space direction="horizontal">
        <Select
          placeholder="Select Status"
          style={{ width: 200 }}
          onChange={(value) => setStatus(value)}
        >
          <Option value="done">Resolved</Option>
          <Option value="pending">Pending</Option>
          <Option value="rejected">Rejected</Option>
        </Select>
        <Button type="primary" onClick={fetchGrievances}>
          Fetch Grievances
        </Button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="grievanceId"
      />
    </Space>
  );
};

export default TotalResolved;
