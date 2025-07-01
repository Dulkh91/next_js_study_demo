"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Sign in failed.");
        return;
      }

      // Store token in localStorage (or use cookies for better security)
      localStorage.setItem("token", data.token);

      alert("Sign in successful!");
      router.push('/')
      
      // Optionally redirect: router.push("/login");
    } catch (err) {
      setError(`An error occurred. Please try again. ${err}`);
    }
  };

  return (
    <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 border rounded-sm md:w-1/4 w-full">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign In
        </h1>
        <form
          className="space-y-4 md:space-y-6"
          action="POST"
          onSubmit={handleSubmit}
        >
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

            {/* Check error login */}
            {error &&(<span className=" text-red-600 text-sm">{error}</span>)}
          <button
            type="submit"
            className="w-full  focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center cursor-pointer border border-0.5"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
