import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import Class from "./Dashboard/Student";
import Course from "./Dashboard/Course";
import { Content, Header } from "antd/es/layout/layout";

function Router() {
  return (
    <>
      <Content className="py-5 px-8 ">
        <Header className="flex p-0 mb-8 justify-start items-center bg-transparent text-4xl font-semibold font-sans">
          <Link to="/">Dashboard</Link>
        </Header>
        <div>
          {
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/student" element={<Class />} />
              <Route path="/course" element={<Course />} />
              <Route
                path="/*"
                element={<h2 className="text-center">Page NOT FOUND</h2>}
              />
            </Routes>
          }
        </div>
      </Content>
    </>
  );
}

export default Router;
