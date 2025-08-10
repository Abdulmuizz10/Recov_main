import React from "react";

const AdminHome = () => {
  return (
    <section className="mb-20 flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10 shadow-md">
          <h3 className="text-lg font-semibold text-cyan-300">Total Reports</h3>
          <p className="text-3xl mt-2 font-bold">31</p>
          <p className="text-sm text-white/50 mt-1">+3 this week</p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10 shadow-md">
          <h3 className="text-lg font-semibold text-pink-400">
            Resolved Items
          </h3>
          <p className="text-3xl mt-2 font-bold">14</p>
          <p className="text-sm text-white/50 mt-1">+12 today</p>
        </div>
        <div className="bg-[#1a1a1a] rounded-lg p-4 border border-white/10 shadow-md">
          <h3 className="text-lg font-semibold text-yellow-300">
            Pending Claims
          </h3>
          <p className="text-3xl mt-2 font-bold">128</p>
          <p className="text-sm text-white/50 mt-1">-8 since yesterday</p>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-[#121212] p-6 rounded-xl border border-white/10 shadow-inner">
        <h2 className="text-xl font-semibold text-white mb-4">
          Recent Lost Item Submissions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[
            {
              name: "Blue Backpack",
              date: "2 hours ago",
              location: "Science Block",
            },
            { name: "iPhone 12", date: "Today", location: "Library" },
            {
              name: "Set of Keys",
              date: "Yesterday",
              location: "Cafeteria",
            },
            {
              name: "Water Bottle",
              date: "3 days ago",
              location: "Gym Hall",
            },
            {
              name: "Laptop Charger",
              date: "5 days ago",
              location: "Room 2B",
            },
            {
              name: "Leather Wallet",
              date: "1 week ago",
              location: "Parking Lot",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-4 bg-[#1e1e1e] rounded-lg border border-white/10 hover:border-cyan-400 transition"
            >
              <h4 className="text-white font-semibold">{item.name}</h4>
              <p className="text-white/50 text-sm">{item.date}</p>
              <p className="text-white/60 text-sm italic">{item.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-[#121212] p-6 rounded-xl border border-white/10">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Recent Activity
        </h2>
        <ul className="space-y-3 text-sm text-white/80">
          <li>
            ✅ Jane Doe claimed a "Leather Wallet" from the Security Office.
          </li>
          <li>📥 A "Calculator" was submitted by Mr. Adams (Math Dept).</li>
          <li>📍 Item "Silver Ring" marked as found in the school garden.</li>
          <li>👤 New admin added: Ms. Binta – Head of Discipline.</li>
          <li>⚠️ Reported lost item "HP Laptop" flagged for review.</li>
        </ul>
      </div>
    </section>
  );
};

export default AdminHome;
