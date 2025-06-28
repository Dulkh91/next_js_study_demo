"use client";
import { useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Registration failed.");
        return;
      }

      alert("Registration successful!");
      // Optionally redirect: router.push("/login");
    } catch (err) {
      setError(`"An error occurred. Please try again." ${err}`);
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
          action="POST"
          onSubmit={handleSubmit}
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
          {/*  Email    */}
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
              {error &&(<span className=" text-red-600 text-sm">{error}</span>)}
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
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
