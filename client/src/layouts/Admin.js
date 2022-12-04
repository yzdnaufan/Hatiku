import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";

import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import {FiUsers} from "react-icons/fi"

// components
// import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import {UserManagement, DatasetManagement, Dashboard} from "../views/admin"

export default function Admin() {
  const dummyState = true;

  return (
    <>
    <div className=" flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{zIndex: '1000'}}>
        <TooltipComponent content="Profile Setting" position="top" offsetX={18}>
          <button type="button"
          style={{background:'blue', borderRadius:'50%'}} 
          className="text-3xl text-white p-2 hover:drop-shadow-xl hover:bg-light-gray">
            <FiUsers/>
          </button>
        </TooltipComponent>


      </div>
      <div className={`${dummyState? "w-72 h-screen bg-white fixed" : "w-0"} 
      sidebar pl-4 pt-4 dark:bg-secondary-dark-bg  `}>
        <Sidebar/>
      </div>

      <div className={
        ` dark:bg-main-bg bg-main-bg w-full min-h-screen ${dummyState? "md:ml-72" : "flex-2"}`
      }>
        <div className="fixed md:static navbar w-full"> 
          <AdminNavbar />
        
        </div>
      
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 bg-red-500 md:px-10 mx-auto w-full m-2">
          <Routes>
            <Route path="dashboard"  element={<Dashboard/>} />
            <Route path="users"  element={<UserManagement/>} />
            <Route path="datasets"  element={<DatasetManagement/>} />
            <Route path="*" element={<Navigate to={'/404'}/>} />
            <Route path="" element={<Navigate to={'/admin/dashboard'}/>} />
          </Routes>
          {/* <FooterAdmin />  */}
        </div>
      </div>
    </div>
    </>
  );
}
