import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import PostContext from "../context/PostContext/PostContext"; // adjust path if different
import { Listbox } from "@headlessui/react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import ClaimModal from "../components/ClaimModal";

const PostDetails = () => {
  const { id } = useParams();
  const { posts, dispatch } = useContext(PostContext);
  const [activeTab, setActiveTab] = useState("view");
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [sortOrder, setSortOrder] = useState("desc");
  const [modalOpen, setModalOpen] = useState(false);

  const postId = parseInt(id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return (
      <section className="min-h-screen flex justify-center items-center bg-gradient-to-b from-[#05080F] to-[#0a0f1c] text-white px-6 py-20 sm:py-28">
        <p>Post not found.</p>
      </section>
    );
  }

  const sortedComments = [...(post.comments || [])].sort((a, b) =>
    sortOrder === "asc"
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    dispatch({
      type: "ADD_COMMENT",
      payload: {
        postId: post.id,
        name: formData.name,
        text: formData.message,
      },
    });

    setFormData({ name: "", message: "" });
    setActiveTab("view");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#05080F] to-[#0a0f1c] text-white py-20 sm:py-28">
      <ClaimModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        post={post}
      />
      <div className="max-w-7xl w-full mx-auto space-y-20 c-space my-10 sm:my-6">
        {/* Detail Card */}
        <div className="min-h-[50vh] xl:min-h-[70vh] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg p-6 md:p-10 flex flex-col xl:flex-row gap-10 relative">
          <div className="absolute top-[-150px] left-[-100px] w-[300px] h-[300px] bg-cyan-400 opacity-10 blur-[160px] rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.5px] animate-pulse" />

          <div className="w-full xl:w-1/2 z-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 md:h-full object-cover rounded-xl border border-white/10 shadow-md"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between z-10">
            <div>
              <h1 className="text-5xl font-bold text-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                {post.title}
              </h1>
              <p className="text-white/90 mb-4">{post.description}</p>
              <div className="space-y-2 text-sm text-white/70">
                <p>
                  <span className="text-white/50">📁 Category:</span>{" "}
                  {post.category}
                </p>
                <p>
                  <span className="text-white/50">📍 Location:</span>{" "}
                  {post.location}
                </p>
                <p>
                  <span className="text-white/50">🗓️ Date Lost:</span>{" "}
                  {post.dateLost}
                </p>
                <p>
                  <span className="text-white/50">👤 Posted by:</span>{" "}
                  {`${post.postedBy}` || "Unknown"}
                </p>
              </div>
            </div>

            <button
              className="mt-8 w-full md:w-auto bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 px-6 rounded-full shadow-md hover:shadow-cyan-500/50 transition duration-300 cursor-pointer"
              onClick={() => setModalOpen(true)}
            >
              Claim Item
            </button>
          </div>
        </div>

        {/* Tabbed Comment Section */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 md:p-8">
          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md transition font-semibold ${
                activeTab === "view"
                  ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500"
                  : "text-white/70 border border-transparent hover:border-white/10"
              }`}
              onClick={() => setActiveTab("view")}
            >
              View Comments
            </button>
            <button
              className={`px-4 py-2 rounded-md transition font-semibold ${
                activeTab === "add"
                  ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500"
                  : "text-white/70 border border-transparent hover:border-white/10"
              }`}
              onClick={() => setActiveTab("add")}
            >
              Add Comment
            </button>
          </div>

          {/* View Comments */}
          {activeTab === "view" ? (
            <>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <h2 className="text-xl font-bold text-cyan-400">
                  Student Comments
                </h2>
                <Listbox value={sortOrder} onChange={setSortOrder}>
                  <div className="relative w-full sm:w-60">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white/10 py-2 pl-4 pr-10 text-left text-white/80 shadow-inner border border-white/10 backdrop-blur-md focus:outline-none focus:ring-1">
                      {sortOrder === "desc" ? "Newest First" : "Oldest First"}
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronsUpDownIcon className="h-5 w-5 text-white/60" />
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-2 w-full rounded-md bg-[#0a0f1c] backdrop-blur-md border border-white/10 text-white/80 shadow-lg ring-1 ring-black/10 focus:outline-none">
                      <Listbox.Option
                        value="desc"
                        className="px-4 py-2 cursor-pointer hover:bg-cyan-500/10"
                      >
                        Newest First
                      </Listbox.Option>
                      <Listbox.Option
                        value="asc"
                        className="px-4 py-2 cursor-pointer hover:bg-cyan-500/10"
                      >
                        Oldest First
                      </Listbox.Option>
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>

              <div className="space-y-6">
                {sortedComments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:shadow-cyan-500/20 transition"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-cyan-400">
                        {comment.name}
                      </h4>
                      <span className="text-xs text-white/50">
                        🗓️ {new Date(comment.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-white/80">{comment.text}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            // Add Comment Form
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm text-white/70">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/10 text-white/80 rounded-md py-2 px-4 backdrop-blur-md focus:outline-none focus:ring-1"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm text-white/70">
                  Comment
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white/10 border border-white/10 text-white/80 rounded-md py-2 px-4 backdrop-blur-md focus:outline-none focus:ring-1"
                  rows="4"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 px-6 rounded-full shadow-md hover:shadow-cyan-500/50 transition duration-300"
              >
                Submit Comment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
