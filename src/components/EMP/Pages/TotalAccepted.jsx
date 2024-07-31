import React, { useEffect } from 'react'
import { Space, Table, Typography } from 'antd';
import {  getTotalAcceptemp } from '../../API/index';

function TotalAccept()  {
  useEffect(() => {
   // Fetch the total Accepted data 
    getTotalAcceptemp().then((res) => {
      
      
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Accepted</Typography.Title>
      <Table
        columns={[

          // put the coloumn name
          ]}
        
      ></Table>
    </Space>
  );
}

export default TotalAccept ;