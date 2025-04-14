import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App!</h1>
      <p className="text-lg mb-6">You are now logged in. Start exploring!</p>
      <Link
        to="/login"
        className="px-4 py-2 bg-[#D3D3FF] text-black rounded-lg font-bold"
      >
        Go to Login
      </Link>
    </div>
  );
}

export default Home;