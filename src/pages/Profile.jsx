import React, { useContext, useState } from "react";
import {
  LogOut,
  Calendar,
  User,
  CheckIcon,
  ChevronsUpDownIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Listbox } from "@headlessui/react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { AuthLogOut } from "../context/AuthContext/AuthApiCalls";
import PostContext from "../context/PostContext/PostContext";

const Profile = ({ setLoading }) => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const { posts } = useContext(PostContext);

  const handleLogOut = () => {
    setLoading(true);
    AuthLogOut(navigate, dispatch, setLoading);
  };

  // const posts = [
  //   {
  //     id: 1,
  //     title: "HP Laptop",
  //     description: "Silver HP laptop lost in the library.",
  //     location: "Library",
  //     dateLost: "2025-07-01",
  //     category: "Electronics",
  //   },
  //   {
  //     id: 2,
  //     title: "Blue Hoodie",
  //     description: "Forgotten in the cafeteria.",
  //     location: "Cafeteria",
  //     dateLost: "2025-07-03",
  //     category: "Clothing",
  //   },
  //   {
  //     id: 3,
  //     title: "Student ID",
  //     description: "Dropped near Parking Lot C.",
  //     location: "Parking Lot C",
  //     dateLost: "2025-07-05",
  //     category: "Documents",
  //   },
  //   {
  //     id: 4,
  //     title: "Casio Calculator",
  //     description: "Lost during physics class in Room 204.",
  //     location: "Science Building",
  //     dateLost: "2025-07-06",
  //     category: "Electronics",
  //   },
  //   {
  //     id: 5,
  //     title: "Leather Wallet",
  //     description: "Brown wallet with initials 'A.M.' left on a bench.",
  //     location: "Main Quad",
  //     dateLost: "2025-07-02",
  //     category: "Accessories",
  //   },
  //   {
  //     id: 6,
  //     title: "iPhone 13",
  //     description: "Black iPhone with cracked screen dropped near gym.",
  //     location: "Sports Complex",
  //     dateLost: "2025-07-04",
  //     category: "Electronics",
  //   },
  //   {
  //     id: 7,
  //     title: "USB Drive",
  //     description: "8GB Kingston drive with thesis files inside.",
  //     location: "Computer Lab",
  //     dateLost: "2025-06-30",
  //     category: "Electronics",
  //   },
  //   {
  //     id: 8,
  //     title: "Green Water Bottle",
  //     description: "Lost during morning yoga session.",
  //     location: "Recreation Center",
  //     dateLost: "2025-07-03",
  //     category: "Accessories",
  //   },
  //   {
  //     id: 9,
  //     title: "Textbook: Calculus I",
  //     description: "Left behind after study group session.",
  //     location: "Library - Study Room B",
  //     dateLost: "2025-07-05",
  //     category: "Documents",
  //   },
  // ];

  const sortOptions = [
    { value: "desc", label: "Newest First" },
    { value: "asc", label: "Oldest First" },
  ];

  const [sortOrder, setSortOrder] = useState("desc");

  const sortedPosts = [...posts].sort((a, b) => {
    return sortOrder === "asc"
      ? new Date(a.dateLost) - new Date(b.dateLost)
      : new Date(b.dateLost) - new Date(a.dateLost);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#05080F] to-[#0a0f1c] text-white relative overflow-hidden py-16 sm:py-20">
      {/* Neon Blobs */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-400 opacity-10 blur-[160px] rounded-full top-[-100px] left-[-100px] mix-blend-screen pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-10 blur-[130px] rounded-full bottom-[-80px] right-[-80px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto c-space">
        <h1 className="text-4xl sm:text-5xl font-bold text-left my-6">
          Profile
        </h1>
        {/* Profile Header */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-32 h-32 rounded-full border-4 border-cyan-400 bg-white/10 flex items-center justify-center shadow-lg">
            <User className="w-16 h-16 text-cyan-400" />
            {/* Or use a custom SVG instead of <User /> */}
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-3xl font-extrabold text-cyan-400 mb-1">
              {user?.firstName}
              {"  "}
              {user?.lastName}
            </h2>
            <p className="text-white/80">{user?.email}</p>
          </div>

          <button
            className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-md transition flex items-center gap-2"
            onClick={() => handleLogOut()}
          >
            <LogOut size={16} />
            Log Out
          </button>
        </div>

        {/* Post History */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <h3 className="text-2xl font-bold text-cyan-400">Post History</h3>
          <Listbox value={sortOrder} onChange={setSortOrder}>
            <div className="relative w-full sm:w-60">
              <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white/10 py-2 pl-4 pr-10 text-left text-white/80 shadow-inner border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition">
                {sortOptions.find((o) => o.value === sortOrder)?.label}
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronsUpDownIcon className="h-5 w-5 text-white/60" />
                </span>
              </Listbox.Button>

              <Listbox.Options className="absolute z-10 mt-2 w-full rounded-md bg-[#0a0f1c] backdrop-blur-md border border-white/10 text-white/80 shadow-lg ring-1 ring-black/10 focus:outline-none">
                {sortOptions.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option.value}
                    className={({ active }) =>
                      `cursor-pointer select-none px-4 py-2 ${
                        active
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "text-white/70"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={`${
                          selected ? "font-semibold" : "font-normal"
                        } flex justify-between`}
                      >
                        {option.label}
                        {selected && (
                          <CheckIcon className="h-4 w-4 text-cyan-400" />
                        )}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </Listbox>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sortedPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 hover:shadow-cyan-500/20 transition"
              style={{
                animation: "glow 4s infinite ease-in-out",
              }}
            >
              <h4 className="text-lg font-bold text-cyan-400 mb-2">
                {post.title}
              </h4>
              <p className="text-white/80 text-sm mb-2">{post.description}</p>
              <div className="text-xs text-white/60 mb-1">
                📍 {post.location}
              </div>
              <div className="text-xs text-white/60 flex items-center gap-1">
                <Calendar size={14} />
                {post.dateLost}
              </div>
              <span className="text-xs mt-2 inline-block text-pink-400 bg-white/10 px-2 py-1 rounded-full">
                {post.category}
              </span>
            </div>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <p className="text-center text-white/60 mt-10">No posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
