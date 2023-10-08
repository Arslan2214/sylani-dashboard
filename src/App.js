import React from "react";
import {
  ApartmentOutlined,
  BarChartOutlined,
  HomeOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import Router from './pages/Router';

import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const App = () => {

  const [collapsed, setCollapsed] = React.useState(false);
  return (
    <Layout hasSider>
      <div className=" hidden md:inline-block">

        <Sider trigger={null} collapsible
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            paddingTop: "50px",
            bottom: 0,
          }}
          collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          {!collapsed && <div className="text-white text-2xl my-2">Welcome, Admin</div>}
          <Menu
            theme="dark"
            mode="inline"
            style={{
              marginTop: "10px",
            }}
            defaultSelectedKeys={["4"]}
            items={[
              {
                key: "/",
                label: <Link to="/">Home</Link>,
                icon: <HomeOutlined />,
              },
              {
                key: "/student",
                label: <Link to="/student">Student</Link>,
                icon: <TeamOutlined />,
              },
              {
                key: "/course",
                label: <Link to="/course">Course</Link>,
                icon: <ApartmentOutlined />,
              },
              {
                key: "/attendence",
                label: <Link to="/attendence">Attendence</Link>,
                icon: <BarChartOutlined />,
              },
            ]}
          />
        </Sider>
      </div>
      <Layout
        className="site-layout ml-0 md:ml-[200px]"

      >
        {/* <Button 
        type="text"
          icon={collapsed ? <RightOutlined /> : <CloseOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            position: "fixed",
            top: 0,
            left: collapsed ? "5vh" : "20vh",
            zIndex: 1000,
            background: "skyblue",
            borderRadius: 0,
          }}
         /> */}

        {<Router />}
      </Layout>
    </Layout>
  );
};
export default App;
