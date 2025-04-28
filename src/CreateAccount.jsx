import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

const CreateAccount = () => {
  const [agency, setAgency] = useState("Yes");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-80 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Create your <br />
          <span>PopX account</span>
        </h1>

        <form className="space-y-4">
          <div>
            <label className="text-xs font-medium text-purple-600">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium text-purple-600">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="9156***"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium text-purple-600">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="doe@gmail.com"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium text-purple-600">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="text-xs font-medium text-purple-600">
              Company name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium text-gray-700 mb-2">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  checked={agency === "Yes"}
                  onChange={() => setAgency("Yes")}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2 text-sm text-gray-700">Yes</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={agency === "No"}
                  onChange={() => setAgency("No")}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2 text-sm text-gray-700">No</span>
              </label>
            </div>
          </div>
<Link to="/Finalpage">
          <button
            type="submit"
            className="w-full py-2 mt-6 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors"
          >
            Create Account
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
