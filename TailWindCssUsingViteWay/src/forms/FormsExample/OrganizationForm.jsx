import React, { useState } from "react";

const OrganizationForm = () => {
  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [employeeCount, setEmployeeCount] = useState(50);
  const [services, setServices] = useState([]);
  const [isCertified, setIsCertified] = useState("");

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setServices([...services, value]);
    } else {
      setServices(services.filter((service) => service !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { orgName, orgType, employeeCount, services, isCertified });

    setOrgName("");
    setOrgType("");
    setEmployeeCount(50);
    setServices([]);
    setIsCertified("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Organization Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Organization Name */}
          <div>
            <label className="block text-gray-600 font-medium">Organization Name:</label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="Enter organization name"
              required
              className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Organization Type (Radio Buttons) */}
          <div>
            <label className="block text-gray-600 font-medium">Organization Type:</label>
            <div className="space-x-4">
              <input
                type="radio"
                name="orgType"
                value="Private"
                checked={orgType === "Private"}
                onChange={(e) => setOrgType(e.target.value)}
              />{" "}
              Private
              <input
                type="radio"
                name="orgType"
                value="Government"
                checked={orgType === "Government"}
                onChange={(e) => setOrgType(e.target.value)}
                className="ml-4"
              />{" "}
              Government
              <input
                type="radio"
                name="orgType"
                value="NGO"
                checked={orgType === "NGO"}
                onChange={(e) => setOrgType(e.target.value)}
                className="ml-4"
              />{" "}
              NGO
            </div>
          </div>

          {/* Services Offered (Checkbox) */}
          <div>
            <label className="block text-gray-600 font-medium">Services Offered:</label>
            <div className="space-y-1">
              <input
                type="checkbox"
                value="Software Development"
                checked={services.includes("Software Development")}
                onChange={handleCheckboxChange}
              />{" "}
              Software Development
              <br />
              <input
                type="checkbox"
                value="Consulting"
                checked={services.includes("Consulting")}
                onChange={handleCheckboxChange}
              />{" "}
              Consulting
              <br />
              <input
                type="checkbox"
                value="Cybersecurity"
                checked={services.includes("Cybersecurity")}
                onChange={handleCheckboxChange}
              />{" "}
              Cybersecurity
            </div>
          </div>

          {/* Employee Count (Range) */}
          <div>
            <label className="block text-gray-600 font-medium">
              Number of Employees: {employeeCount}
            </label>
            <input
              type="range"
              min="10"
              max="1000"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Certification Status (Radio Buttons) */}
          <div>
            <label className="block text-gray-600 font-medium">Is Certified?</label>
            <div className="space-x-4">
              <input
                type="radio"
                name="isCertified"
                value="Yes"
                checked={isCertified === "Yes"}
                onChange={(e) => setIsCertified(e.target.value)}
              />{" "}
              
              Yes
              <input
                type="radio"
                name="isCertified"
                value="No"
                checked={isCertified === "No"}
                onChange={(e) => setIsCertified(e.target.value)}
                className="ml-4"
              />{" "}
              No
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationForm;
