import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleFilled,
  FileTextOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Typography } from "antd";
import "./Dashboard.css";

import { Link } from "react-router-dom";


function Dashboardprm() {
  return (
    <>
      <div className="page-container">
        <div className="Dashboard">
          <Space size={20} direction="vertical" style={{ width: "100%" }}>
            <Typography.Title level={4} style={{ textAlign: "center" }}>
              PRM Dashboard
            </Typography.Title>

            <Space
              direction="horizontal"
              wrap
              style={{ justifyContent: "center" }}
            >
              <DashboardCard
                icon={
                  <ClockCircleOutlined
                    style={{
                      color: "orange",
                      backgroundColor: "rgba(0,255,0,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={<Link to="/mainprm/TotalPendingprm">Total Pending</Link>}
                value={15}
              />
              <DashboardCard
                icon={
                  <CheckCircleOutlined
                    style={{
                      color: "green",
                      backgroundColor: "rgba(0,255,0,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={<Link to="/mainprm/TotalResolvedprm">check baised on status</Link>}
                value={5}
              />
              <DashboardCard
                icon={
                  <SendOutlined
                    style={{
                      color: "orange",
                      backgroundColor: "rgba(0,255,0,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={<Link to="/mainprm/TotalForwardedprm">Total Forwarded</Link>}
                value={5}
              />
              <DashboardCard
                icon={
                  <CloseCircleFilled
                    style={{
                      color: "red",
                      backgroundColor: "rgba(0,255,0,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={<Link to="/mainprm/TotalRejectprm">Total Reject</Link>}
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
            <Space
              direction="horizontal"
              wrap
              style={{ justifyContent: "center" }}
            >
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
                title={<Link to="/mainprm/AllGrievencesprm">All Grievences</Link>}
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
                title={<Link to="/mainprm/ResolveGrievencesprm">Resolve Grievences</Link>}
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
                title={<Link to="/mainprm/SearchedDateprm">Searched by Date</Link>}
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
                title={
                  <Link to="/mainprm/SearchedTalukavillageprm">
                    Searched by Taluka & village
                  </Link>
                }
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
                title={
                  <Link to="/mainprm/SearchedGrievenceidprm">Searched by Greivence Id</Link>
                }
                value={10}
              />
            </Space>
          </Space>
        </div>
      </div>
    </>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default Dashboardprm;
