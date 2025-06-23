import { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-black p-6 rounded-lg shadow-lg w-[500px]">
        <h2 className="text-white text-2xl font-semibold text-center mb-3">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          
          <div className="relative">
            <label className="text-gray-400 block mb-1">Enter Name</label>
            <div className="flex items-center bg-gray-800 rounded border border-gray-600 p-2">
              <AiOutlineUser className="text-gray-400 mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                className="w-full bg-transparent text-white focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-gray-400 block mb-1">Email</label>
            <div className="flex items-center bg-gray-800 rounded border border-gray-600 p-2">
              <AiOutlineMail className="text-gray-400 mr-2" />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full bg-transparent text-white focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-gray-400 block mb-1">Password</label>
            <div className="flex items-center bg-gray-800 rounded border border-gray-600 p-2">
              <AiOutlineLock className="text-gray-400 mr-2" />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="w-full bg-transparent text-white focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-gray-400 block mb-1">Select Role</label>
            <select
              name="role"
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="relative">
            <label className="text-gray-400 block mb-1">Avatar</label>
            <div className="flex items-center bg-gray-800 rounded border border-gray-600 p-2">
              <FaUserCircle className="text-gray-400 mr-2" />
              <input
                type="text"
                name="avatar"
                placeholder="Enter Avatar URL"
                className="w-full bg-transparent text-white focus:outline-none"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-gray-400 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-400">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
