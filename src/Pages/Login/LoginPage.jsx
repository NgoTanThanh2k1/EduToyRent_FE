import LoginBG from "../../assets/bg.png";
import { useNavigate } from "react-router-dom";
import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleSuccess = (response) => {
    try {
      const decoded = jwtDecode(response.credential); // Giải mã JWT từ Google để lấy thông tin người dùng
      console.log(decoded); // Hiển thị dữ liệu đã giải mã, xử lý theo ý bạn
      // Điều hướng sau khi đăng nhập thành công
      navigate("/");
    } catch (error) {
      console.error("JWT Decode Error:", error);
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Login failed:", error); // Xử lý lỗi khi đăng nhập thất bại
  };

  return (
    <GoogleOAuthProvider clientId="746956711747-sjibai61a311v1ej9q0esii9ch03r6es.apps.googleusercontent.com">
      <div className="relative">
        <img
          src={LoginBG}
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="flex justify-center items-center min-h-screen relative z-10">
          <div className="bg-gray-100 bg-opacity-80 flex flex-col justify-center items-center w-full max-w-md mx-auto p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-semibold mb-6">Đăng Nhập</h1>
            <form className="w-full">
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
                />
              </div>
              <div className="mb-6 w-full">
                <label htmlFor="password" className="block text-gray-600">
                  Mật khẩu
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  autoComplete="off"
                />
              </div>

              {/* Nút Google Login */}
              <div className="flex justify-center mb-4">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
                  text="signin_with"
                  width="250px"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-2"
              >
                Đăng Nhập
              </button>
            </form>
            <div className="flex justify-center items-end mt-6">
              <p className="text-center text-gray-600">
                Copyright&copy; 2024 EduToyRent Competition
              </p>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
