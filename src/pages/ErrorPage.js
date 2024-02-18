import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-8 bg-gradient-to-r from-white to-blue-200">
      <h1 className="text-2xl lg:text-4xl font-bold text-center break-words">Oops, This page doesn't exist!!!</h1>
      <div>
        <Link to='/'>
        <button className="w-48 h-10 text-white bg-[#0f62fe] rounded-lg">Go Back</button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;
