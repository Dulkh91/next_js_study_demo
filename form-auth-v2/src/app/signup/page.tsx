// src/app/signup/page.tsx
'use client'

import React from "react";
import { useState } from "react";

const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>(""); // For username
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>(""); // Add state for success message

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages

    // Client-side validation: Ensure email and password are not empty
    if (!email || !password || !name) { // Also check name
        setError('ឈ្មោះអ្នកប្រើប្រាស់ អ៊ីមែល និងពាក្យសម្ងាត់ត្រូវបានទាមទារ។');
        return; // Stop execution if validation fails
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }), // Send name as well
      });

      // Check if the response was successful before trying to parse JSON
      if (!response.ok) {
        // If response is not OK, it might send plain text error or non-JSON
        const errorText = await response.text(); // Read as plain text
        try {
          const errorData = JSON.parse(errorText); // Try to parse as JSON if it was intended to be JSON
          setError(errorData.error || "Registration failed with an unknown error.");
        } catch (jsonError) {
          // If it's not valid JSON, use the raw text as the error message
          setError(errorText || "Registration failed due to a server error.");
        }
        return;
      }

      // If response is OK, it should be valid JSON
      const data = await response.json();
      setSuccessMessage(data.message || "Registration successful! You can now log in."); // Use message from API
      
      // Optionally clear form fields after successful registration
      setEmail("");
      setPassword("");
      setName(""); // Clear name field too

      // Optionally redirect: router.push("/login"); // If using useRouter, uncomment and import useRouter
    } catch (err) {
      console.error("Error during signup fetch:", err);
      setError(`មានបញ្ហាក្នុងការភ្ជាប់ទៅ server ។`);
    }
  };

  return (

      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border rounded-sm md:w-1/4 w-full">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit} // 'action="POST"' is not typically needed with onSubmit in React
          >
            {/* User Name */}
            <div>
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* Email    */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center cursor-pointer border border-0.5"
            >
              Create an account
            </button>
            {error &&(<span className=" text-red-600 text-sm">{error}</span>)} {/* Display error message */}
            {successMessage && (<span className=" text-green-600 text-sm">{successMessage}</span>)} {/* Display success message */}
          </form>
        </div>
      </div>
  );
}
 
export default SignUpPage;
