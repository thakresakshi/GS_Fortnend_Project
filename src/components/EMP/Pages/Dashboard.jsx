import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleFilled,
  FileTextOutlined,
 
  
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import { useEffect } from "react";
import { getTotalPendingemp } from "../../API/index";
import "./Dashboard.css"
import { Link } from "react-router-dom";


function Dashboard() {
  return ( <>
   <div className="page-container">
    <div className="Dashboard">
    <Space size={20} direction="vertical" style={{ width: "100%" }}>
      
      <Typography.Title level={4} style={{ textAlign: "center" }}>
      EMP Dashboard
      </Typography.Title>

      {/* Row for Dashboard Cards */}
      
      <Space direction="horizontal" wrap style={{ justifyContent: "center" }}>
        <DashboardCard 
          icon={
            <ClockCircleOutlined
              style={{
                color: "orange",
                backgroundColor: "rgba(255, 165, 0, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<Link to="/TotalPending">Total Pending</Link>}
          value={15}
        />
        <DashboardCard
  icon={
    <CheckCircleOutlined
      style={{
        color: "green",
        backgroundColor: "rgba(0, 255, 0, 0.1)",
        borderRadius: 20,
        fontSize: 24,
        padding: 8,
      }}
    />
  }
  title={<Link to="/TotalResolved">Total Resolved</Link>}
  value={5}
  
/>

        <DashboardCard
          icon={
            <CheckCircleOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<Link to="/TotalAccept">Total Accept</Link>}
          value={5}
        />
       
        <DashboardCard
          icon={
            <CloseCircleFilled
              style={{
                color: "red",
                backgroundColor: "rgba(255, 0, 0, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<Link to="/TotalReject">Total Reject</Link>}
          value={0}
        />
       
        </Space>
        
      </Space>
      </div>
     

      <div className="Report">
      <Space size={20} direction="vertical" style={{ width: "100%" }}>

      <Typography.Title level={4} style={{ textAlign: "center" }}>
        Reports
      </Typography.Title>
      <Space direction="horizontal" wrap style={{ justifyContent: "center" }}>
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "Orange",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<Link to="/AllGrievences">All Grievences</Link>}
          value={10}
        />
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<Link to="/AcceptReject">Accept/Reject grievances</Link>}
          value={10}
        />
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "orange",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<Link to="/SearchedDate">Searched by Date</Link>}
          value={10}
        />
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<Link to="/SearchedTalukavillage">Searched by Taluka & village</Link>}
          value={10}
        />
        <DashboardCard
          icon={
            <FileTextOutlined
              style={{
                color: "orange",
                backgroundColor: "rgba(128, 0, 128, 0.1)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={<Link to="/SearchedGrievenceid">Searched by Greivence Id</Link>}
          value={10}
        />
      </Space>

      <RecentGrievances />
    </Space>
    </div>
    </div>
    </>
  );
  
}
function DashboardCard({ title, value, icon }) {
  return (
    <Card style={{ minWidth: 200 }}>
      <Space direction="horizontal" align="center">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

function RecentGrievances() {
  useEffect(() => {
    getTotalPendingemp().then((res) => {
      // Handle response
    });
  }, []);

  
}

export default Dashboard;



































































































