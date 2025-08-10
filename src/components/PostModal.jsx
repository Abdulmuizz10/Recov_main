import React, { useState, useContext } from "react";
import { X, ImagePlus, ChevronsUpDown, Check } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../context/AuthContext/AuthContext";
import PostContext from "../context/PostContext/PostContext"; // update path as needed

const PostModal = ({ isOpen, onClose }) => {
  const { user } = useContext(AuthContext);
  const { dispatch, posts } = useContext(PostContext);

  const categoryOptions = [
    { value: "", label: "Select Category" },
    { value: "Books", label: "Books" },
    { value: "Electronics", label: "Electronics" },
    { value: "Clothing", label: "Clothing" },
    { value: "Accessories", label: "Accessories" },
    { value: "Documents", label: "Documents" },
    { value: "Stationery", label: "Stationery" },
    { value: "Others", label: "Others" },
  ];

  const lostStatusOptions = [
    { value: true, label: "Lost" },
    { value: false, label: "Found" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const [selectedStatus, setSelectedStatus] = useState(lostStatusOptions[0]);
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    itemName: "",
    location: "",
    description: "",
    category: "",
    isLostItem: true,
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.itemName ||
      !formData.location ||
      !formData.description ||
      !formData.category ||
      !image
    ) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    const newPost = {
      id: posts?.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1,
      user: user.id,
      postedBy: `${user?.firstName} ${user?.lastName}`,
      title: formData.itemName,
      description: formData.description,
      image: image,
      location: formData.location,
      dateLost: new Date().toISOString().split("T")[0],
      category: formData.category,
      isLostItem: formData.isLostItem,
      isResolved: false,
      comments: [],
    };

    dispatch({ type: "CREATE_POST", payload: newPost });

    // Reset form and close modal
    setFormData({
      itemName: "",
      location: "",
      description: "",
      category: "",
      isLostItem: true,
    });
    setSelectedCategory(categoryOptions[0]);
    setSelectedStatus(lostStatusOptions[0]);
    setImage(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 h-screen w-screen flex items-center justify-center">
          <div
            className="absolute z-0 inset-0 bg-black/60 backdrop-blur-sm h-full w-full flex items-center justify-center"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-[90%] md:w-[60%] max-h-[90vh] overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-2xl px-6 py-3 shadow-2xl before:absolute before:inset-0 before:rounded-2xl before:border before:border-cyan-400/5 before:blur-lg before:opacity-20 before:pointer-events-none"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                Report Lost Or found Item
              </h2>
              <button onClick={onClose}>
                <X className="text-white hover:text-red-500 transition" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="itemName"
                placeholder="Item Name"
                value={formData.itemName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-1"
              />

              <input
                type="text"
                name="location"
                placeholder="Last Known Location or Found Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-1"
              />

              {/* Lost or Found status */}
              <Listbox
                value={selectedStatus}
                onChange={(value) => {
                  setSelectedStatus(value);
                  setFormData({ ...formData, isLostItem: value.value });
                }}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white/10 py-2 pl-4 pr-10 text-left text-white/80 shadow-inner border border-white/20 backdrop-blur-md focus:outline-none focus:ring-1">
                    {selectedStatus.label}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronsUpDown className="h-4 w-4 text-white/60" />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-20 mt-2 w-full rounded-md bg-[#0f141e] border border-white/10 text-white/80 shadow-xl ring-1 ring-black/10 focus:outline-none">
                    {lostStatusOptions.map((option) => (
                      <Listbox.Option
                        key={option.label}
                        value={option}
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
                            className={`flex justify-between ${
                              selected ? "font-semibold" : "font-normal"
                            }`}
                          >
                            {option.label}
                            {selected && (
                              <Check className="h-4 w-4 text-cyan-400" />
                            )}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              {/* Category dropdown */}
              <Listbox
                value={selectedCategory}
                onChange={(value) => {
                  setSelectedCategory(value);
                  setFormData({ ...formData, category: value.value });
                }}
              >
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white/10 py-2 pl-4 pr-10 text-left text-white/80 shadow-inner border border-white/20 backdrop-blur-md focus:outline-none focus:ring-1">
                    {selectedCategory.label}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronsUpDown className="h-4 w-4 text-white/60" />
                    </span>
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-20 mt-2 w-full rounded-md bg-[#0f141e] border border-white/10 text-white/80 shadow-xl ring-1 ring-black/10 focus:outline-none">
                    {categoryOptions.map((option) => (
                      <Listbox.Option
                        key={option.value}
                        value={option}
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
                            className={`flex justify-between ${
                              selected ? "font-semibold" : "font-normal"
                            }`}
                          >
                            {option.label}
                            {selected && (
                              <Check className="h-4 w-4 text-cyan-400" />
                            )}
                          </span>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              <textarea
                name="description"
                placeholder="Describe the item..."
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 h-18 resize-none rounded bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-1"
              />

              <label className="flex items-center justify-center gap-3 px-4 py-3 bg-white/10 hover:bg-white/20 text-white/70 rounded-md cursor-pointer border border-white/20">
                <ImagePlus size={20} />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {image && (
                <div className="mt-4">
                  <img
                    src={image}
                    alt="Preview"
                    className="w-full rounded-md object-cover border border-white/10"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 mt-4 rounded-md bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
              >
                Submit Report
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PostModal;
