import React, { useState, useEffect } from 'react';
import { Space, Table, Typography } from 'antd';
import { getTotalForwardedprm } from '../../API';

const TotalForwarded = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the total forwarded data
    getTotalForwardedprm().then((res) => {
      setData(res); // Assuming res is an array of data from your API
      console.log(res)
      setLoading(false);
    }).catch((err) => {
      console.error('Error fetching total forwarded data:', err);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: 'grievanceId',
      dataIndex: 'grievanceId',
      key: 'grievanceId',
    },
    {
      title: 'grievance ',
      dataIndex: 'grievance',
      key: 'grievance',
    },
    {
      title: 'forwaded to dept ',
      dataIndex: 'forwardedToDept',
      key: 'forwardedToDept',
    },
  ];

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Forwarded</Typography.Title>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey={(res) => res.grievanceId} // Ensure you have a unique key for each row
      />
    </Space>
  );
};

export default TotalForwarded;
