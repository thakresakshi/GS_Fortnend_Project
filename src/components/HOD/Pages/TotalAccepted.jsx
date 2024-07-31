import React, { useEffect } from 'react'
import { Space, Table, Typography } from 'antd';
import {  getTotalAccepthod } from '../../API/index';

function TotalAccept()  {
  useEffect(() => {
     // Fetch the total accepted data
    getTotalAccepthod().then((res) => {
      });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Accepted</Typography.Title>
      <Table
        columns={[

          // put coloumn name here 
          ]}
        
      ></Table>
    </Space>
  );
}

export default TotalAccept;