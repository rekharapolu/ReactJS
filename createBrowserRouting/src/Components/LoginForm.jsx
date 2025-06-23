import { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-black p-6 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-white text-2xl font-semibold text-center mb-3">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Email Input */}
          <div className="relative">
            <label className="text-gray-400 block mb-1">Email</label>
            <div className="flex items-center bg-gray-800 rounded border border-gray-600 p-2">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="w-full bg-transparent text-white focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="text-gray-400 block mb-1">Password</label>
            <div className="flex items-center bg-gray-800 rounded border border-gray-600 p-2">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="w-full bg-transparent text-white focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500 transition"
          >
            Login
          </button>

          {/* Sign Up Redirect */}
          <p className="text-center text-gray-400 mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-yellow-400">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
