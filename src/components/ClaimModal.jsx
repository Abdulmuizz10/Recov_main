import React, { useState, useContext } from "react";
import { X, ImagePlus, ChevronsUpDown, Check } from "lucide-react";
import { Listbox } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../context/AuthContext/AuthContext";
import ClaimContext from "../context/ClaimContext/ClaimContext";

const ClaimModal = ({ isOpen, onClose, post }) => {
  const { user } = useContext(AuthContext);
  const { dispatch, claims } = useContext(ClaimContext);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    location: "",
    description: "",
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

    if (!formData.location || !formData.description || !image) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    const newClaim = {
      id: claims?.length ? Math.max(...claims.map((c) => c.id)) + 1 : 1,
      user: user.id,
      claimBy: `${user?.firstName} ${user?.lastName}`,
      description: formData.description,
      image: image,
      location: formData.location,
      claimDate: new Date().toISOString().split("T")[0],
      isApproved: true,
      claimedItem: post,
      comments: [],
    };

    dispatch({ type: "CREATE_CLAIM", payload: newClaim });

    // Reset form and close modal
    setFormData({
      itemName: "",
      location: "",
      description: "",
      category: "",
    });
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
                Claim This Lost Or Found Item
              </h2>
              <button onClick={onClose}>
                <X className="text-white hover:text-red-500 transition" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="location"
                placeholder="The item Last Known Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-1"
              />

              {/* Lost or Found status */}

              <textarea
                name="description"
                placeholder="Why do you think the item is yours..."
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
                Submit Claim
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ClaimModal;
