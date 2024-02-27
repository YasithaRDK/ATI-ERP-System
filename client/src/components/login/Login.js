import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="flex justify-center w-screen h-screen backdrop-blur-md"
      style={{
        backgroundImage: `url("./login.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center mt-10 space-y-32">
        <h1 className="w-full py-4 text-3xl font-semibold text-center text-white bg-black bg-opacity-75 rounded-2xl">
          Sri Lanka Advanced Technological Education - Anuradhapura
        </h1>
        <div className="grid grid-cols-2 gap-28">
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#5a51d6] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Faculty</h1>

            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center w-32 h-10 text-lg text-white transition-all duration-200 bg-blue-500 rounded-lg hover:scale-110"
            >
              Login
            </Link>
          </div>
          <div className="h-96 w-96 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#d65158] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold">Student</h1>
            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center w-32 h-10 text-lg text-white transition-all duration-200 bg-blue-500 rounded-lg hover:scale-110"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
