import {Space, Table, Typography } from "antd";
import { useEffect,} from "react";
import { getTotalPendingemp} from "../../API/index";

function TotalPending() {
useEffect(() => {
  // Fetch the total Pending data 
  getTotalPendingemp().then((res) => {
     
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Total Pending</Typography.Title>
      <Table
        
        columns={[
        //  put coloumn name here
        ]}
        
      ></Table>
    </Space>
  );
}
export default TotalPending;
