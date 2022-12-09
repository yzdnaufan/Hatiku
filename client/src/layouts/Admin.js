import React from "react";
import { Routes, Route, Navigate, Outlet} from "react-router-dom";

import {TooltipComponent} from "@syncfusion/ej2-react-popups"
import {FiUsers} from "react-icons/fi"

import { useStateContext } from "../contexts/ContextProvider";

// components
import {AdminNavbar, Sidebar} from "../components";
// views
import {UserManagement, Dataset, Dashboard, DataForm} from "../views/admin"

export default function Admin() {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();


  const stateStyle = activeMenu ?( {
    sidebar : "w-72 h-screen bg-white fixed pl-4",
    navbar : "md:ml-72"
  } ): ({
    sidebar : "w-0",
    navbar : "flex-2"
  })

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
      <div className={`${stateStyle.sidebar}
      sidebar pt-3 dark:bg-secondary-dark-bg transition-all ease-linear duration-300 delay-75`}>
        <Sidebar/>
      </div>

      <div className={
        ` dark:bg-main-bg bg-main-bg w-full min-h-screen ${stateStyle.navbar }`
      }>
        <div className="fixed md:static navbar w-full"> 
          <AdminNavbar />
        
        </div>
      
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full m-2">
          <Routes>
            <Route path="dashboard"  element={<Dashboard/>} />
            <Route path="users"  element={<DataForm/>} />
            <Route path="datasets"  element={<Dataset/>} />
            <Route path="*" element={<Navigate to={'/404'}/>} />
            <Route path="" element={<Navigate to={'/admin/dashboard'}/>} />
          </Routes>
          {/* <FooterAdmin />  */}
        </div>
      </div>
    </div>
    <Outlet/>
    </>
  );
}
