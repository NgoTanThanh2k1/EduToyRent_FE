import LoginBG from "../../assets/bg.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <img
        src={LoginBG}
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <div className="bg-gray-100 bg-opacity-80 flex flex-col justify-center items-center w-full max-w-md mx-auto p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center">
            {/* <img className="w-[230px]" src={Logo2} alt="Logo" /> */}
          </div>
          <h1 className="text-2xl font-semibold mb-2">Đăng Nhập</h1>
          <div className="mb-4 w-full">
            <label htmlFor="username" className="block text-gray-600">
              Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              //value={username}
              // onChange={(e) => handleInputChange(e, "username")}
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="password" className="block text-gray-600">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              //   value={password}
              //   onChange={(e) => handleInputChange(e, "password")}
              //   onKeyPress={(e) => {
              //     if (e.key === "Enter") {
              //       e.preventDefault();
              //       handleLogin();
              //     }
              //   }}
            />
          </div>
          <div className="mb-2 w-full">
            <label className="block text-gray-600">Vai trò</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="user"
                name="role"
                // value="user"
                // checked={role === "user"}
                // onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor="user" className="mr-4">
                Người dùng
              </label>
              <input
                type="radio"
                id="chef"
                name="role"
                // value="chef"
                // checked={role === "chef"}
                // onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor="chef">Nhà cung cấp</label>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-gray-600">
              Chưa có tài khoản?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Đăng ký tại đây
              </span>
            </p>
          </div>

          <div className="flex justify-center items-center">
            <p className="text-gray-600">
              Đăng ký làm nhà cung cấp?{" "}
              <span
              // className="text-blue-500 cursor-pointer"
              // onClick={() => navigate("/registerchef")}
              >
                Đăng ký tại đây
              </span>
            </p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            // onClick={handleLogin}
          >
            Đăng Nhập
          </button>
          <div className="flex justify-center items-end mt-4">
            <p className="text-center">
              Copyright&copy; 2024 EduToyRent Competition
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
