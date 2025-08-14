import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { AuthLogin } from "../context/AuthContext/AuthApiCalls";

const Login = ({ setLoading }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = { email, password };
    AuthLogin(user, dispatch, navigate, setLoading);
  };

  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#05080F] to-[#0a0f1c] text-white">
      {/* Floating Stars Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.5px] animate-pulse" />

      <div className="w-full md:w-1/2 flex items-center justify-center relative z-10">
        {/* Glowing blob decoration */}
        <div className="absolute w-[600px] h-[600px] bg-cyan-400 rounded-full blur-3xl opacity-20 animate-blob1 mix-blend-screen top-[-100px] left-[-150px] pointer-events-none" />

        <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl space-y-8 z-10">
          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              Welcome Back
            </h2>
            <p className="text-white/70">Login to your Recov account</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm text-white/60 mb-1">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-1 backdrop-blur-md"
                placeholder="email@gmail.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-white/60 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-1 backdrop-blur-md"
                placeholder="••••••••"
              />
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm text-white/70">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 text-cyan-400" />
                <span>Remember me</span>
              </label>
              <Link
                to="/forget-password"
                className="text-cyan-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full shadow-md hover:shadow-cyan-500/50 transition duration-300"
            >
              Log In
            </button>

            {/* Sign up */}
            <p className="text-center text-sm text-white/70">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="text-cyan-300 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
