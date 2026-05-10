import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email: form.email,
        password: form.password,
      });

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-screen flex">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 bg-[#f5f5f5] flex items-center justify-center">
        <div className="w-[380px]">

          <h1 className="text-3xl font-bold mb-2">WELCOME BACK</h1>
          <p className="text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Email */}
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-xl border bg-gray-100 focus:outline-none"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                name="password"
                placeholder="********"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 p-3 rounded-xl border bg-gray-100 focus:outline-none"
                required
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>
              <span className="cursor-pointer">Forgot password</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            {/* Google */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 border py-3 rounded-xl bg-white"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>
          </form>

          <p className="text-sm text-center mt-5">
            Don’t have an account?{" "}
            <span className="text-red-500 cursor-pointer">
              Sign up for free!
            </span>
          </p>

        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-1/2 hidden md:block">
        <img
          src="/login-pic.png"
          alt="login visual"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}