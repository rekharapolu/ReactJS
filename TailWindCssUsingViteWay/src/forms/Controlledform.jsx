import React, { useState } from "react";

const ControlledForm = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [selectStack, setSelectStack] = useState("");
  let [selectedSkills, setSelectedSkills] = useState([]);

  let handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedSkills([...selectedSkills, value]); // Add skill if checked
    } else {
      setSelectedSkills(selectedSkills.filter((skill) => skill !== value)); // Remove if unchecked
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, selectStack, selectedSkills });
  };

  return (
    <>
      <h1>
        {username} {password} {selectStack} {selectedSkills.join(", ")}
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="user">Username</label>
        <input
          type="text"
          id="user"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          id="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label htmlFor="stack">Course</label>
        <select
          id="stack"
          value={selectStack}
          onChange={(e) => setSelectStack(e.target.value)}
        >
          <option value="Java Full Stack">Java Full Stack</option>
          <option value="Python Full Stack">Python Full Stack</option>
          <option value="Mern Full Stack">Mern Full Stack</option>
          <option value="Mean Full Stack">Mean Full Stack</option>
        </select>
        <br />

        <label>Skills:</label>
        <br />
        <input
          type="checkbox"
          value="HTML"
          checked={selectedSkills.includes("HTML")}
          onChange={handleCheckboxChange}
        />
        HTML
        <br />
        <input
          type="checkbox"
          value="CSS"
          checked={selectedSkills.includes("CSS")}
          onChange={handleCheckboxChange}
        />
        CSS
        <br />
        <input
          type="checkbox"
          value="JavaScript"
          checked={selectedSkills.includes("JavaScript")}
          onChange={handleCheckboxChange}
        />
        JavaScript
        <br />
        <input
          type="checkbox"
          value="React"
          checked={selectedSkills.includes("React")}
          onChange={handleCheckboxChange}
        />
        React
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ControlledForm;
