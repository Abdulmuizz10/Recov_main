import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, User2, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { AuthLogOut } from "../context/AuthContext/AuthApiCalls";

const Navbar = ({ setLoading }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    setLoading(true);
    AuthLogOut(navigate, dispatch, setLoading);
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Inventory", to: "/inventory" },
  ];

  const Links = [
    { name: "Features", to: "#features" },
    { name: "How It Works", to: "#how-it-works" },
    { name: "Testimonials", to: "#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto pt-2 md:py-4 flex justify-between items-center text-white c-space">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-cyan-400 drop-shadow-md tracking-tight font-montserrat flex items-center gap-2 rounded-full"
        >
          <img src={"/assets/R2.png"} alt="" className="w-12 h-10" />
          Recov
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 font-medium text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="relative hover:text-cyan-400 transition"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {Links.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className="relative hover:text-cyan-400 transition"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-[-2px] left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* User section */}
        {user ? (
          <div className="relative flex items-center space-x-4">
            {user.isAdmin && (
              <Link
                to="/admin/home"
                className="text-sm hover:text-violet-400 transition font-medium"
              >
                Admin
              </Link>
            )}
            <div className="relative">
              <User2
                className="cursor-pointer hover:text-cyan-400 transition"
                onClick={() => setActive(!active)}
              />
              {active && (
                <div className="absolute right-0 mt-6 w-32 bg-white/10 backdrop-blur-md border border-white/10 text-sm text-white rounded-lg shadow-lg p-3 z-50 space-y-2">
                  <Link
                    to="/profile"
                    className="block hover:text-cyan-400 transition"
                    onClick={() => setActive(false)}
                  >
                    Profile
                  </Link>
                  <p
                    className="cursor-pointer hover:text-pink-400 transition"
                    onClick={() => handleLogOut()}
                  >
                    Log out
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden md:flex space-x-3 text-sm font-medium">
            <Link to="/login" className="hover:text-cyan-400 transition">
              Login
            </Link>
            <span>/</span>
            <Link to="/sign-up" className="hover:text-cyan-400 transition">
              Sign up
            </Link>
          </div>
        )}

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden px-6 pb-4 space-y-4 text-white bg-[#0a0f1c] transition-all duration-300 ${
          mobileMenuOpen
            ? "max-h-[50vh] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium hover:text-cyan-400 transition"
          >
            {link.name}
          </Link>
        ))}

        <div className="flex flex-col lg:flex-row">
          {Links.map((link) => (
            <a
              key={link.name}
              href={link.to}
              className="relative hover:text-cyan-400 transition"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {user ? (
          <>
            <Link
              to="/profile"
              className="block text-sm font-medium hover:text-cyan-400 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Profile
            </Link>
            <p
              className="block cursor-pointer text-sm font-medium hover:text-pink-400 transition"
              onClick={() => handleLogOut()}
            >
              Log out
            </p>
            {user.isAdmin && (
              <Link
                to="/admin/home"
                className="block text-sm font-medium hover:text-violet-400 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}
          </>
        ) : (
          <div className="flex gap-3 text-sm">
            <Link to="/login" className="hover:text-cyan-400 transition">
              Login
            </Link>
            <span>/</span>
            <Link to="/sign-up" className="hover:text-cyan-400 transition">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
