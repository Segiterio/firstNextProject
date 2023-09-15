"use client";
import Card from "@/components/card";
import Header from "@/components/header";
import MobileSideBar from "@/components/mobileSideBar";
import Sidebar from "@/components/sidebar";
import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { LuTags } from "react-icons/lu";
import { AiFillLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { cardData } from "@/types/interfaces";
import Chart from "@/components/chart";
import Donat from "@/components/donat";
import Template from "@/components/Template";

const Dashboard = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const cardArr: cardData[] = [
    {
      id: 1,
      Icon: BsFillCameraFill,
      value: 2129430,
      iconBgColor: "bg-green-500",
      title: "Total revenuse",
      increment: +2.5,
    },
    {
      id: 2,
      Icon: LuTags,
      value: 1520,
      iconBgColor: "bg-[#DEBF85]",
      title: "Total transactions",
      increment: +2.5,
    },
    {
      id: 3,
      Icon: AiFillLike,
      value: 9172,
      iconBgColor: "bg-[#ECA4A4]",
      title: "Total Likes",
      increment: +2.5,
    },
    {
      id: 4,
      Icon: FiUsers,
      value: 9172,
      iconBgColor: "bg-[#A9B0E5]",
      title: "Total Users",
      increment: +2.5,
    },
  ];
  return (
    <div className="bg-[#F8FAFF]">
      {showSideBar && <MobileSideBar setShowSideBar={setShowSideBar} />}

      <div className="flex laptop:gap-10 laptop:p-6 p-4 gap-5 max-w-7xl mx-auto border">
        <div className="hidden laptop:block ">
          <Sidebar />
        </div>
        <div className="w-full">
          <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          <div className="grid gap-5 grid-cols-2 tablet:grid-cols-4 mt-4">
            {cardArr.map((data) => (
              <Card data={data} key={data.id} />
            ))}
          </div>
             <Chart />
             <div className="mt-4 grid laptop:grid-cols-2 gap-5">
                <Donat />
                <Template />
             </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
