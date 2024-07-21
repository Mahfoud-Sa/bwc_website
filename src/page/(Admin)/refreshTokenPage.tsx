import React, { useState, useEffect } from "react";
import axios from "axios";
import login from "../../assets/img/8H4A08688.jpg(1).jpg";
import login1 from "../../assets/img/عالم الأعمال خلفية أبيض 21.png";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function RefreshTokenPage() {
  const navigate = useNavigate();
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken') || null); 

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `https://mahfoudsabbah-001-site1.jtempurl.com/?refreshToken`,
        { RefreshToken: refreshToken }, // Send refresh token in request body
        {
          headers: {
            Authorization: `Bearer ${
              localStorage.getItem("accessToken") || ""
            }`, // Include access token if available (optional depending on API)
          },
        }
      );
      console.log("refresh successful:", response.data);

      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
      if (response.data.refreshToken) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
      if (response?.status === 200) {
        navigate("/admin-dashboard");
      } else {
        toast.error("wrong Password");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login.");
    }
  };
  return (
    <div className="h-[100vh] w-full flex">
      <div className="w-[60%] h-full flex justify-center items-center">
        <img src={login} alt="" className=" h-[100%] w-[100%]" />
      </div>
      <div className="w-[40%] h-full flex justify-center items-center">
        <div className="w-[70%] h-[70%]">
          {/*  */}
          <div className="w-full h-[50%] flex justify-center">
            <img src={login1} alt="" className=" h-[100%] w-[100]" />
          </div>
          {/*  */}
          <div className="text-center mt-10">
            <h1 className="text-3xl mb-5">مرحبا بعودتك</h1>
            <form action="" className="px-10 text-end">
              <button
                type="button"
                className=" mt-10 w-full block shadow-[0_05px_20px_5px_rgba(204,169,114,0.3)] bg-black hover:bg-[#cca972] focus:bg-gray-100 text font-semibold rounded-lg px-4 py-3 outline-2 outline-gray-500"
              >
                <div></div>
                <div className="flex items-center justify-center">
                  <button className="ml-4 text-white" onClick={handleSubmit}>
                    تسجيل دخول
                  </button>
                  <Toaster />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
