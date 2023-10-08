import React from "react";
import { Link } from "react-router-dom";

// import GraphLine from '../../components/Graphes/Wave'

import {
  ApartmentOutlined,
  BarChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
// import Layout from '../../components/Layout';

function Index() {
  return (
    <>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 justify-center text-center">
            <Link to="/student" className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className={`${true === "light" && "border-2"} ${
                  true === "dark" && "shadow-slate-500"
                } shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl`}
                style={{
                  backgroundColor: true === "dark" ? "rgb(46 49 55)" : "",
                  color: true === "dark" ? "white" : "",
                }}
              >
                <div
                  className={` ${
                    true === "light" ? "text-slate-600" : "text-slate-50"
                  }  w-12 h-12 mb-3 inline-block`}
                  viewBox="0 0 24 24"
                >
                  <TeamOutlined
                    style={{ fontSize: "55px", color: "rgb(51 65 85)" }}
                  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: true === "dark" ? "white" : "" }}
                >
                  342
                </h2>
                <p
                  className={` ${
                    true === "dark" ? "text-slate-50" : "text-slate-700"
                  }  font-bold`}
                  style={{ color: true === "dark" ? "white" : "" }}
                >
                  Total Students
                </p>
              </div>
            </Link>
            <Link to="/course" className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className={`${true === "light" && "border-2"} ${
                  true === "dark" && "shadow-slate-500"
                } shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl`}
                style={{
                  backgroundColor: true === "dark" ? "rgb(46 49 55)" : "",
                  color: true === "dark" ? "white" : "",
                }}
              >
                <div
                  className={` ${
                    true === "light" ? "text-slate-600" : "text-slate-50"
                  }  w-12 h-12 mb-3 inline-block`}
                  viewBox="0 0 24 24"
                >
                  <ApartmentOutlined
                    style={{ fontSize: "55px", color: "rgb(51 65 85)" }}
                  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: true === "dark" ? "white" : "" }}
                >
                  12
                </h2>
                <p
                  className={` ${
                    true === "dark" ? "text-slate-50" : "text-slate-700"
                  }  font-bold`}
                  style={{ color: true === "dark" ? "white" : "" }}
                >
                  Total Courses
                </p>
              </div>
            </Link>
            <Link to="/attendence" className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className={` ${true === "light" && "border-2"} ${
                  true === "dark" && "shadow-slate-500"
                }  shadow-[0_0_10px_rgba(0,0,0,0.3)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl`}
                style={{
                  backgroundColor: true === "dark" ? "rgb(46 49 55)" : "",
                  color: true === "dark" ? "white" : "",
                }}
              >
                <div
                  className={` ${
                    true === "light" ? "text-slate-600" : "text-slate-50"
                  }  w-12 h-12 mb-3 inline-block`}
                  viewBox="0 0 24 24"
                >
                  <BarChartOutlined
                    style={{ fontSize: "55px", color: "rgb(51 65 85)" }}
                  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black fonts1"
                  style={{ color: true === "dark" ? "white" : "" }}
                >
                  189
                </h2>
                <p
                  className={` ${
                    true === "dark" ? "text-slate-50" : "text-slate-700"
                  }  font-bold`}
                  style={{ color: true === "dark" ? "white" : "" }}
                >
                  Today's Attendent
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* <GraphLine /> */}
    </>
  );
}

export default Index;