import React, { useState } from "react";

const EmployeeRegistrationForm = () => {
  const initialState = {
    fullName: "",
    email: "",
    gender: "",
    skills: [],
    dob: "",
    experience: "",
  };

  const [fullName, setFullName] = useState(initialState.fullName);
  const [email, setEmail] = useState(initialState.email);
  const [gender, setGender] = useState(initialState.gender);
  const [skills, setSkills] = useState(initialState.skills);
  const [dob, setDob] = useState(initialState.dob);
  const [experience, setExperience] = useState(initialState.experience);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { fullName, email, gender, skills, dob, experience });

    // Reset all fields after submission
    setFullName(initialState.fullName);
    setEmail(initialState.email);
    setGender(initialState.gender);
    setSkills(initialState.skills);
    setDob(initialState.dob);
    setExperience(initialState.experience);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">Employee Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 font-medium">Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              required
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Gender (Radio) */}
          <div>
            <label className="block text-gray-600 font-medium">Gender:</label>
            <div className="space-x-4">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              /> Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
                className="ml-4"
              /> Female
            </div>
          </div>

          {/* Skills (Checkbox) */}
          <div>
            <label className="block text-gray-600 font-medium">Skills:</label>
            <div className="space-y-1">
              <input
                type="checkbox"
                value="Java"
                checked={skills.includes("Java")}
                onChange={handleCheckboxChange}
              /> Java
              <br />
              <input
                type="checkbox"
                value="Python"
                checked={skills.includes("Python")}
                onChange={handleCheckboxChange}
              /> Python
              <br />
              <input
                type="checkbox"
                value="React"
                checked={skills.includes("React")}
                onChange={handleCheckboxChange}
              /> React
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-600 font-medium">Date of Birth:</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Experience (Number) */}
          <div>
            <label className="block text-gray-600 font-medium">Years of Experience:</label>
            <input
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeRegistrationForm;
