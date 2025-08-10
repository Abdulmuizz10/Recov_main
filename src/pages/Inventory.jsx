import React, { useContext, useState } from "react";
import { Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import PostContext from "../context/PostContext/PostContext";

// const items = [
//   {
//     id: 1,
//     title: "HP Laptop",
//     description: "Silver 15-inch HP Pavilion lost in the library.",
//     image: "https://source.unsplash.com/featured/?laptop",
//     location: "Library",
//     dateLost: "2025-07-01",
//     category: "Electronics",
//     isLostItem: true,
//   },
//   {
//     id: 2,
//     title: "Blue Hoodie",
//     description: "Left behind in the cafeteria after lunch.",
//     image: "https://source.unsplash.com/featured/?hoodie",
//     location: "Cafeteria",
//     dateLost: "2025-07-05",
//     category: "Clothing",
//     isLostItem: true,
//   },
//   {
//     id: 3,
//     title: "Backpack",
//     description: "Black Nike backpack lost during football practice.",
//     image: "https://source.unsplash.com/featured/?backpack",
//     location: "Sports Field",
//     dateLost: "2025-07-03",
//     category: "Accessories",
//     isLostItem: true,
//   },
//   {
//     id: 4,
//     title: "Calculator",
//     description: "Casio fx-991EX lost in math lab.",
//     image: "https://source.unsplash.com/featured/?calculator",
//     location: "Math Lab",
//     dateLost: "2025-07-06",
//     category: "Electronics",
//     isLostItem: true,
//   },
//   {
//     id: 5,
//     title: "Student ID Card",
//     description: "Lost near parking lot B, blue lanyard attached.",
//     image: "https://source.unsplash.com/featured/?idcard",
//     location: "Parking Lot B",
//     dateLost: "2025-07-04",
//     category: "Documents",
//     isLostItem: true,
//   },
//   {
//     id: 6,
//     title: "Graphing Notebook",
//     description: "Left in physics class after lab session.",
//     image: "https://source.unsplash.com/featured/?notebook",
//     location: "Physics Hall",
//     dateLost: "2025-07-02",
//     category: "Stationery",
//     isLostItem: true,
//   },
//   {
//     id: 7,
//     title: "Wireless Earbuds",
//     description: "White Samsung Galaxy Buds lost near the library entrance.",
//     image: "https://source.unsplash.com/featured/?earbuds",
//     location: "Library Entrance",
//     dateLost: "2025-07-07",
//     category: "Electronics",
//     isLostItem: true,
//   },
//   {
//     id: 8,
//     title: "Scarf",
//     description: "Red patterned scarf misplaced in common room.",
//     image: "https://source.unsplash.com/featured/?scarf",
//     location: "Student Lounge",
//     dateLost: "2025-07-08",
//     category: "Clothing",
//     isLostItem: false,
//   },
//   {
//     id: 9,
//     title: "Wrist Watch",
//     description: "Black digital sports watch lost after gym session.",
//     image: "https://source.unsplash.com/featured/?watch",
//     location: "Gym",
//     dateLost: "2025-07-09",
//     category: "Accessories",
//     isLostItem: true,
//   },
//   {
//     id: 10,
//     title: "USB Drive",
//     description: "32GB black USB with important files left in computer lab.",
//     image: "https://source.unsplash.com/featured/?usb",
//     location: "Computer Lab",
//     dateLost: "2025-07-10",
//     category: "Others",
//     isLostItem: false,
//   },
//   {
//     id: 11,
//     title: "Leather Wallet",
//     description: "Brown leather wallet found near bookstore.",
//     image: "https://source.unsplash.com/featured/?wallet",
//     location: "Bookstore",
//     dateLost: "2025-07-11",
//     category: "Accessories",
//     isLostItem: false,
//   },
//   {
//     id: 12,
//     title: "iPhone 14",
//     description: "White iPhone left on charging station.",
//     image: "https://source.unsplash.com/featured/?iphone",
//     location: "Study Lounge",
//     dateLost: "2025-07-12",
//     category: "Electronics",
//     isLostItem: true,
//   },
//   {
//     id: 13,
//     title: "Gym Bag",
//     description: "Black Adidas bag with clothes and water bottle.",
//     image: "https://source.unsplash.com/featured/?gymbag",
//     location: "Locker Room",
//     dateLost: "2025-07-13",
//     category: "Accessories",
//     isLostItem: true,
//   },
//   {
//     id: 14,
//     title: "Textbook",
//     description: "Calculus textbook forgotten in reading room.",
//     image: "https://source.unsplash.com/featured/?textbook",
//     location: "Reading Room",
//     dateLost: "2025-07-14",
//     category: "Books",
//     isLostItem: true,
//   },
//   {
//     id: 15,
//     title: "Bluetooth Speaker",
//     description: "Small JBL speaker found near fountain area.",
//     image: "https://source.unsplash.com/featured/?speaker",
//     location: "Fountain",
//     dateLost: "2025-07-15",
//     category: "Electronics",
//     isLostItem: false,
//   },
//   {
//     id: 16,
//     title: "Sunglasses",
//     description: "Black Ray-Ban shades left near food truck.",
//     image: "https://source.unsplash.com/featured/?sunglasses",
//     location: "Campus Center",
//     dateLost: "2025-07-16",
//     category: "Accessories",
//     isLostItem: true,
//   },
//   {
//     id: 17,
//     title: "Lab Coat",
//     description: "White lab coat with name tag found in corridor.",
//     image: "https://source.unsplash.com/featured/?labcoat",
//     location: "Science Building",
//     dateLost: "2025-07-17",
//     category: "Clothing",
//     isLostItem: false,
//   },
//   {
//     id: 18,
//     title: "Camera",
//     description: "Canon DSLR camera missing after event.",
//     image: "https://source.unsplash.com/featured/?camera",
//     location: "Auditorium",
//     dateLost: "2025-07-18",
//     category: "Electronics",
//     isLostItem: true,
//   },
//   {
//     id: 19,
//     title: "Math Notes",
//     description: "Notebook labeled MTH201 found under chair.",
//     image: "https://source.unsplash.com/featured/?notes",
//     location: "Lecture Hall",
//     dateLost: "2025-07-19",
//     category: "Stationery",
//     isLostItem: false,
//   },
//   {
//     id: 20,
//     title: "Green Water Bottle",
//     description: "Left in gym after morning session.",
//     image: "https://source.unsplash.com/featured/?waterbottle",
//     location: "Fitness Center",
//     dateLost: "2025-07-20",
//     category: "Accessories",
//     isLostItem: true,
//   },
//   {
//     id: 21,
//     title: "Headphones",
//     description: "Lost my Sony over-ear headphones at the library.",
//     image: "https://source.unsplash.com/featured/?headphones",
//     location: "Library",
//     dateLost: "2025-07-21",
//     category: "Electronics",
//     isLostItem: true,
//   },
//   {
//     id: 22,
//     title: "Drawing Pad",
//     description: "Art sketch pad found beside lecture desk.",
//     image: "https://source.unsplash.com/featured/?sketchpad",
//     location: "Art Room",
//     dateLost: "2025-07-22",
//     category: "Stationery",
//     isLostItem: false,
//   },
//   {
//     id: 23,
//     title: "Shoes",
//     description: "Pair of white sneakers misplaced near the track.",
//     image: "https://source.unsplash.com/featured/?shoes",
//     location: "Running Track",
//     dateLost: "2025-07-23",
//     category: "Clothing",
//     isLostItem: true,
//   },
//   {
//     id: 24,
//     title: "Laptop Charger",
//     description: "Black HP charger found without tag.",
//     image: "https://source.unsplash.com/featured/?charger",
//     location: "Library 3rd Floor",
//     dateLost: "2025-07-24",
//     category: "Electronics",
//     isLostItem: false,
//   },
//   {
//     id: 25,
//     title: "Earphones Case",
//     description: "Red AirPods case missing after class.",
//     image: "https://source.unsplash.com/featured/?airpods",
//     location: "Engineering Block",
//     dateLost: "2025-07-25",
//     category: "Accessories",
//     isLostItem: true,
//   },
//   {
//     id: 26,
//     title: "ID Tag",
//     description: "Medical student ID badge found near clinic.",
//     image: "https://source.unsplash.com/featured/?badge",
//     location: "Medical Center",
//     dateLost: "2025-07-26",
//     category: "Documents",
//     isLostItem: false,
//   },
//   {
//     id: 27,
//     title: "Handbag",
//     description: "Leather brown handbag left in bus.",
//     image: "https://source.unsplash.com/featured/?handbag",
//     location: "Shuttle Stop",
//     dateLost: "2025-07-27",
//     category: "Accessories",
//     isLostItem: true,
//   },
//   {
//     id: 28,
//     title: "Pen Set",
//     description: "Montblanc pen set found on office desk.",
//     image: "https://source.unsplash.com/featured/?pen",
//     location: "Admin Building",
//     dateLost: "2025-07-28",
//     category: "Stationery",
//     isLostItem: false,
//   },
//   {
//     id: 29,
//     title: "Clipboard",
//     description: "Blue clipboard with forms lost near auditorium.",
//     image: "https://source.unsplash.com/featured/?clipboard",
//     location: "Main Auditorium",
//     dateLost: "2025-07-29",
//     category: "Stationery",
//     isLostItem: true,
//   },
//   {
//     id: 30,
//     title: "Smartwatch",
//     description: "Apple Watch SE left near vending machine.",
//     image: "https://source.unsplash.com/featured/?smartwatch",
//     location: "Cafeteria",
//     dateLost: "2025-07-30",
//     category: "Electronics",
//     isLostItem: false,
//   },
// ];

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Accessories",
  "Documents",
  "Stationery",
  "Others",
];

const Inventory = () => {
  const { posts } = useContext(PostContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItemCategory, setSelectedItemCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("all"); // all | lost | found
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = posts.filter((item) => {
    const matchesCategory =
      selectedItemCategory === "All" || item.category === selectedItemCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      selectedStatus === "all"
        ? true
        : selectedStatus === "lost"
        ? item.isLostItem === true
        : item.isLostItem === false;

    return matchesCategory && matchesSearch && matchesStatus;
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#05080F] to-[#0a0f1c] text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto c-space">
        <h1 className="text-4xl sm:text-5xl font-bold text-left my-6">
          Inventory
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <button
              className="md:hidden mb-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Filter size={18} />}
              Filters
            </button>

            <div
              className={`${
                mobileOpen ? "block" : "hidden"
              } md:block bg-white/5 py-4 px-2 rounded-xl border border-white/10 backdrop-blur-md`}
            >
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-md hover:bg-white/10 transition ${
                        selectedItemCategory === cat
                          ? "bg-white/10 text-cyan-400"
                          : "text-white/70"
                      }`}
                      onClick={() => {
                        setSelectedItemCategory(cat);
                        setMobileOpen(false);
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="flex-grow">
            {/* Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search items..."
                className="w-full p-3 rounded-xl bg-white/10 placeholder:text-white/60 text-white border border-white/10 focus:outline-none focus:ring-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Lost/Found Filter */}
            <div className="mb-6 flex flex-wrap gap-3">
              {["all", "lost", "found"].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border border-white/10 transition ${
                    selectedStatus === status
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 text-white/60 hover:bg-white/20"
                  }`}
                >
                  {status === "all"
                    ? "All Items"
                    : status === "lost"
                    ? "Lost Items"
                    : "Found Items"}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Link key={item.id} to={`/post-details/${item.id}`}>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 h-[340px] border border-white/10 hover:shadow-cyan-500/20 hover:-translate-y-1 transition">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[180px] object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-lg font-bold text-cyan-400 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="text-xs text-white/50 mb-1">
                      📍 {item.location}
                    </div>
                    <div className="text-xs text-white/50">
                      🗓️ {item.dateLost}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center text-white/60 mt-10">
                No items found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inventory;
