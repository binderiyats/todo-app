import React from "react";
import { Header } from "../components/layouts/Header";
import { Sidebar } from "../components/layouts/Sidebar";
import { Outlet } from "react-router-dom";

export const MainLayouts = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="content">
        <Outlet />
      </main>
    </>
  );
};
