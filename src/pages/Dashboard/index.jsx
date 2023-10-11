import React from "react";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";
// import GraphLine from '../../components/Graphes/Wave'

import {
  ApartmentOutlined,
  BarChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useCollectionLength } from "../../config/CollectionLength";

function Index() {
  return (
    <>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 justify-center text-center">
            <Link to="/student" className="p-4 sm:w-1/2 w-full">
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
                  {useCollectionLength("students")}
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
            <Link to="/course" className="p-4 sm:w-1/2 w-full">
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
                  {useCollectionLength("courses")}
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
            
          </div>
          <div className="grid md:grid-cols-5 gap-6 mt-8 w-full">
            <div className="flex flex-col justify-center items-center shadow-[0_0_4px_rgba(0,0,0,0.3)] p-4 md:col-span-3 rounded-md">
              <Line
                data={{
                  labels: [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                  datasets: [
                    {
                      label: "Students Added",
                      data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 48],
                      fill: false,
                      borderColor: "rgb(75, 192, 192)",
                      tension: 0.1,
                    },
                  ],
                }}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
            <div className="flex flex-col justify-center items-center shadow-[0_0_4px_rgba(0,0,0,0.3)] p-4 md:col-span-2 rounded-md">
              <Doughnut
                data={{
                  labels: ["In-Progress", "Completed", "Upcomming"],
                  datasets: [{ label: "Course", data: [10, 30, 50] }],
                }}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <GraphLine /> */}
    </>
  );
}

export default Index;
