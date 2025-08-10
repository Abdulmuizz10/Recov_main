import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/admin/home" },
  { name: "Lost Items", path: "/admin/lost" },
  { name: "Found Items", path: "/admin/found" },
  { name: "Submissions", path: "/admin/submissions" },
  { name: "Resolved", path: "/admin/resolved" },
  { name: "Settings", path: "/admin/settings" },
];

const AdminLayouts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed z-40 inset-y-0 left-0 w-64 bg-[#111] border-r border-white/10 transition-transform duration-300 md:static md:flex-shrink-0`}
      >
        <div className="h-full flex flex-col p-6 space-y-6">
          <Link to={"/"} className="flex items-center gap-2">
            <img src={"/assets/R2.png"} alt="" className="w-12 h-10" />
            <h2 className="text-2xl font-bold text-white">Recov</h2>
          </Link>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md transition ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/60 hover:bg-white/10"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-grow ml-0">
        {/* Topbar */}
        <header className="flex items-center justify-between px-6 md:pl-10 md:pr-[52px] py-4 border-b border-white/10 bg-[#0d0d0d]">
          <button
            className="md:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
          <input
            type="text"
            placeholder="Search lost items..."
            className="w-3/5 md:w-1/2 px-4 py-2 rounded-md bg-[#1a1a1a] border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-1"
          />
          <button className="px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-200 flex items-center gap-2 justify-center">
            + <p className="hidden md:flex">Report Item</p>
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-grow p-6 md:p-10 bg-black space-y-8 overflow-y-auto h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayouts;
