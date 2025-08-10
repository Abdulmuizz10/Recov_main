import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { AuthSignUp } from "../context/AuthContext/AuthApiCalls";

const SignUp = ({ setLoading }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const [firstName = "", lastName = ""] = fullName.trim().split(" ");
    const user = { firstName, lastName, email, password };

    AuthSignUp(user, dispatch, navigate, setLoading);
  };

  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#05080F] to-[#0a0f1c] text-white">
      {/* Floating Stars Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.5px] animate-pulse" />

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 relative z-10">
        {/* Glowing blob decoration */}
        <div className="absolute w-[600px] h-[600px] bg-[#1a8cff] rounded-full blur-3xl opacity-20 animate-blob1 mix-blend-screen top-[-100px] right-[-150px] pointer-events-none" />
        <div className="w-full max-w-md p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl space-y-8 z-10">
          <div className="text-center space-y-1">
            <h2 className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
              Create an Account
            </h2>
            <p className="text-white/70">Join the Recov community</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div>
              <label className="block text-sm text-white/60 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-1 backdrop-blur-md"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-white/60 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-1 backdrop-blur-md"
                placeholder="you@example.com"
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

            {/* Terms */}
            <div className="text-sm text-white/60">
              By signing up, you agree to our{" "}
              <a href="#" className="text-cyan-300 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-cyan-300 hover:underline">
                Privacy Policy
              </a>
              .
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-full shadow-md hover:shadow-cyan-500/50 transition duration-300"
            >
              Sign Up
            </button>

            {/* Already have an account? */}
            <p className="text-center text-sm text-white/70">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-300 hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
