import React, { useState } from "react";
import axios from "axios";
import login from "../../assets/img/8H4A08688.jpg(1).jpg";
import login1 from "../../assets/img/عالم الأعمال خلفية أبيض 21.png";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState("");
  function handlePasswoed(value: string) {
    setLoginPassword(value);
  }

  const usernameServer = "11183953";
  const password = "60-dayfreetrial";
  const email = "";
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const encodedCredentials = btoa("11183953:60-dayfreetrial");

    try {
      const response = await axios({
        url: "/login",
        method: "post",
        baseURL: "http://mahfoudsabbah-001-site1.jtempurl.com/",
        data: {
          email: "hamoud@gmail.com",
          password: loginPassword,
        },
        auth: {
          username: usernameServer,
          password: password,
        },
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });
      console.log("Login successful:", response.data);

      if (response.data.accessToken) {
        localStorage.setItem("accessToken", response.data.accessToken);
      }
      if (response.data.refreshToken) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
      if (response?.status === 200) {
        navigate("/admin-dashboard");
      } else {
        console.log("wrong password");
      }
    } catch (error) {
      console.log(error);
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
            <form action="" className="px-10 text-end" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="password"
                  className="block text-balck font-black text-lg  mt-1"
                >
                  كلمة المرور
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  dir="rtl"
                  placeholder="ادخل كلمة المرور ..."
                  required
                  value={loginPassword}
                  onChange={(e) => handlePasswoed(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white mt-2 border-2 border-[#797B7D] focus:bg-white focus:outline-none focus:text-[#818080] placeholder:text-[#818080]"
                />
              </div>
              <button
                type="button"
                className=" mt-10 w-full block shadow-[0_05px_20px_5px_rgba(204,169,114,0.3)] bg-black hover:bg-[#cca972] focus:bg-gray-100 text font-semibold rounded-lg px-4 py-3 outline-2 outline-gray-500"
              >
                <div className="flex items-center justify-center">
                  <button className="ml-4 text-white">تسجيل دخول</button>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
