import React from "react";

const items = [
  {
    id: 1,
    title: "HP Laptop",
    description: "Silver 15-inch HP Pavilion lost in the library.",
    image: "https://source.unsplash.com/featured/?laptop",
    location: "Library",
    dateLost: "2025-07-01",
    category: "Electronics",
    isLostItem: true,
  },
  {
    id: 2,
    title: "Blue Hoodie",
    description: "Left behind in the cafeteria after lunch.",
    image: "https://source.unsplash.com/featured/?hoodie",
    location: "Cafeteria",
    dateLost: "2025-07-05",
    category: "Clothing",
    isLostItem: true,
  },
  {
    id: 3,
    title: "Backpack",
    description: "Black Nike backpack lost during football practice.",
    image: "https://source.unsplash.com/featured/?backpack",
    location: "Sports Field",
    dateLost: "2025-07-03",
    category: "Accessories",
    isLostItem: true,
  },
  {
    id: 4,
    title: "Calculator",
    description: "Casio fx-991EX lost in math lab.",
    image: "https://source.unsplash.com/featured/?calculator",
    location: "Math Lab",
    dateLost: "2025-07-06",
    category: "Electronics",
    isLostItem: true,
  },
  {
    id: 5,
    title: "Student ID Card",
    description: "Lost near parking lot B, blue lanyard attached.",
    image: "https://source.unsplash.com/featured/?idcard",
    location: "Parking Lot B",
    dateLost: "2025-07-04",
    category: "Documents",
    isLostItem: true,
  },
  {
    id: 6,
    title: "Graphing Notebook",
    description: "Left in physics class after lab session.",
    image: "https://source.unsplash.com/featured/?notebook",
    location: "Physics Hall",
    dateLost: "2025-07-02",
    category: "Stationery",
    isLostItem: true,
  },
  {
    id: 7,
    title: "Wireless Earbuds",
    description: "White Samsung Galaxy Buds lost near the library entrance.",
    image: "https://source.unsplash.com/featured/?earbuds",
    location: "Library Entrance",
    dateLost: "2025-07-07",
    category: "Electronics",
    isLostItem: true,
  },
  {
    id: 8,
    title: "Scarf",
    description: "Red patterned scarf misplaced in common room.",
    image: "https://source.unsplash.com/featured/?scarf",
    location: "Student Lounge",
    dateLost: "2025-07-08",
    category: "Clothing",
    isLostItem: false,
  },
  {
    id: 9,
    title: "Wrist Watch",
    description: "Black digital sports watch lost after gym session.",
    image: "https://source.unsplash.com/featured/?watch",
    location: "Gym",
    dateLost: "2025-07-09",
    category: "Accessories",
    isLostItem: true,
  },
  {
    id: 10,
    title: "USB Drive",
    description: "32GB black USB with important files left in computer lab.",
    image: "https://source.unsplash.com/featured/?usb",
    location: "Computer Lab",
    dateLost: "2025-07-10",
    category: "Others",
    isLostItem: false,
  },
  {
    id: 11,
    title: "Leather Wallet",
    description: "Brown leather wallet found near bookstore.",
    image: "https://source.unsplash.com/featured/?wallet",
    location: "Bookstore",
    dateLost: "2025-07-11",
    category: "Accessories",
    isLostItem: false,
  },
  {
    id: 12,
    title: "iPhone 14",
    description: "White iPhone left on charging station.",
    image: "https://source.unsplash.com/featured/?iphone",
    location: "Study Lounge",
    dateLost: "2025-07-12",
    category: "Electronics",
    isLostItem: true,
  },
  {
    id: 13,
    title: "Gym Bag",
    description: "Black Adidas bag with clothes and water bottle.",
    image: "https://source.unsplash.com/featured/?gymbag",
    location: "Locker Room",
    dateLost: "2025-07-13",
    category: "Accessories",
    isLostItem: true,
  },
  {
    id: 14,
    title: "Textbook",
    description: "Calculus textbook forgotten in reading room.",
    image: "https://source.unsplash.com/featured/?textbook",
    location: "Reading Room",
    dateLost: "2025-07-14",
    category: "Books",
    isLostItem: true,
  },
  {
    id: 15,
    title: "Bluetooth Speaker",
    description: "Small JBL speaker found near fountain area.",
    image: "https://source.unsplash.com/featured/?speaker",
    location: "Fountain",
    dateLost: "2025-07-15",
    category: "Electronics",
    isLostItem: false,
  },
  {
    id: 16,
    title: "Sunglasses",
    description: "Black Ray-Ban shades left near food truck.",
    image: "https://source.unsplash.com/featured/?sunglasses",
    location: "Campus Center",
    dateLost: "2025-07-16",
    category: "Accessories",
    isLostItem: true,
  },
  {
    id: 17,
    title: "Lab Coat",
    description: "White lab coat with name tag found in corridor.",
    image: "https://source.unsplash.com/featured/?labcoat",
    location: "Science Building",
    dateLost: "2025-07-17",
    category: "Clothing",
    isLostItem: false,
  },
  {
    id: 18,
    title: "Camera",
    description: "Canon DSLR camera missing after event.",
    image: "https://source.unsplash.com/featured/?camera",
    location: "Auditorium",
    dateLost: "2025-07-18",
    category: "Electronics",
    isLostItem: true,
  },
  {
    id: 19,
    title: "Math Notes",
    description: "Notebook labeled MTH201 found under chair.",
    image: "https://source.unsplash.com/featured/?notes",
    location: "Lecture Hall",
    dateLost: "2025-07-19",
    category: "Stationery",
    isLostItem: false,
  },
  {
    id: 20,
    title: "Green Water Bottle",
    description: "Left in gym after morning session.",
    image: "https://source.unsplash.com/featured/?waterbottle",
    location: "Fitness Center",
    dateLost: "2025-07-20",
    category: "Accessories",
    isLostItem: true,
  },
  {
    id: 21,
    title: "Headphones",
    description: "Lost my Sony over-ear headphones at the library.",
    image: "https://source.unsplash.com/featured/?headphones",
    location: "Library",
    dateLost: "2025-07-21",
    category: "Electronics",
    isLostItem: true,
  },
  {
    id: 22,
    title: "Drawing Pad",
    description: "Art sketch pad found beside lecture desk.",
    image: "https://source.unsplash.com/featured/?sketchpad",
    location: "Art Room",
    dateLost: "2025-07-22",
    category: "Stationery",
    isLostItem: false,
  },
  {
    id: 23,
    title: "Shoes",
    description: "Pair of white sneakers misplaced near the track.",
    image: "https://source.unsplash.com/featured/?shoes",
    location: "Running Track",
    dateLost: "2025-07-23",
    category: "Clothing",
    isLostItem: true,
  },
  {
    id: 24,
    title: "Laptop Charger",
    description: "Black HP charger found without tag.",
    image: "https://source.unsplash.com/featured/?charger",
    location: "Library 3rd Floor",
    dateLost: "2025-07-24",
    category: "Electronics",
    isLostItem: false,
  },
  {
    id: 25,
    title: "Earphones Case",
    description: "Red AirPods case missing after class.",
    image: "https://source.unsplash.com/featured/?airpods",
    location: "Engineering Block",
    dateLost: "2025-07-25",
    category: "Accessories",
    isLostItem: true,
  },
  {
    id: 26,
    title: "ID Tag",
    description: "Medical student ID badge found near clinic.",
    image: "https://source.unsplash.com/featured/?badge",
    location: "Medical Center",
    dateLost: "2025-07-26",
    category: "Documents",
    isLostItem: false,
  },
  {
    id: 27,
    title: "Handbag",
    description: "Leather brown handbag left in bus.",
    image: "https://source.unsplash.com/featured/?handbag",
    location: "Shuttle Stop",
    dateLost: "2025-07-27",
    category: "Accessories",
    isLostItem: true,
  },
  {
    id: 28,
    title: "Pen Set",
    description: "Montblanc pen set found on office desk.",
    image: "https://source.unsplash.com/featured/?pen",
    location: "Admin Building",
    dateLost: "2025-07-28",
    category: "Stationery",
    isLostItem: false,
  },
  {
    id: 29,
    title: "Clipboard",
    description: "Blue clipboard with forms lost near auditorium.",
    image: "https://source.unsplash.com/featured/?clipboard",
    location: "Main Auditorium",
    dateLost: "2025-07-29",
    category: "Stationery",
    isLostItem: true,
  },
  {
    id: 30,
    title: "Smartwatch",
    description: "Apple Watch SE left near vending machine.",
    image: "https://source.unsplash.com/featured/?smartwatch",
    location: "Cafeteria",
    dateLost: "2025-07-30",
    category: "Electronics",
    isLostItem: false,
  },
];

const AdminLostItems = () => {
  const lostItems = items.filter((item) => item.isLostItem);

  return (
    <section className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Lost Items</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {lostItems.map((item) => (
          <div
            key={item.id}
            className=" rounded-2xl border border-white/10 hover:shadow-cyan-500/20 hover:-translate-y-1 transition"
          >
            <img
              src={"/assets/mkx.jpg"}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {item.category}
                </span>
              </div>
              <p className="text-sm line-clamp-2">{item.description}</p>
              <div className="text-sm text-gray-500">
                <span className="block">📍 {item.location}</span>
                <span className="block">📅 {item.dateLost}</span>
              </div>
              <button className="mt-3 w-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition rounded-md py-2">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {lostItems.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No lost items found.</p>
      )}
    </section>
  );
};

export default AdminLostItems;
