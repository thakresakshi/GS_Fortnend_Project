import { Space, Table, Typography } from "antd";
import { useEffect, } from "react";
import { getTotalRejectemp, } from "../../API/index";

function TotalReject() {
  // Fetch the totalReject data 
useEffect(() => {
    
    getTotalRejectemp().then((res) => {
      
      
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Reject</Typography.Title>
      <Table
        columns={[
          // put coloumn name here
          ]}
        
      ></Table>
    </Space>
  );
}
export default TotalReject;
