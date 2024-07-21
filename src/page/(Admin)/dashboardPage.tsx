import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "../../components/(Admin)/navBar";
import SideNab from "../../components/(Admin)/sideNab";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DashboardPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();

  const isLoggedIn = localStorage.getItem("accessToken");
  useEffect(() => {
    if (isLoggedIn) {
      toast.success("You are logged in successfully!");
    }
    if (!isLoggedIn) {
      navigate("/NoAccess");
    }
  }, []);

  return (
    <>
      {dir === "ltr" ? (
        <div className="h-[100vh] w-full box-border">
          <Toaster />
          <div className="h-[10vh] w-full flex">
            <NavBar />
          </div>
          <div className="w-full h-[90vh] flex">
            <aside className=" w-[15%] h-full ">
              <SideNab />
            </aside>
            <div className=" w-[85%] h-full bg-slate-700"></div>
          </div>
        </div>
      ) : (
        <div className="h-[100vh] w-full box-border">
          <Toaster />
          <div className="h-[10vh] w-full flex">
            <NavBar />
          </div>
          <div className="w-full h-[90vh] flex">
            <aside className=" w-[15%] h-full ">
              <SideNab />
            </aside>
            <div className=" w-[85%] h-full bg-slate-700"></div>
          </div>
        </div>
      )}
    </>
  );
}
