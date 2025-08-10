import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import PostModal from "../components/PostModal";

const Home = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const testimonials = [
    {
      name: "Amaka I.",
      quote:
        "I found my missing backpack in under 24 hours. Incredible service and such kind people!",
    },
    {
      name: "Tunde O.",
      quote:
        "Used this site to return a laptop I found. Everything was smooth and secure.",
    },
    {
      name: "Fatima B.",
      quote:
        "Honestly didn’t think I’d see my wallet again, but this site made it happen. 10/10.",
    },
    {
      name: "Chinedu M.",
      quote:
        "Returned a phone I found in a mall — loved how anonymous and safe the whole process felt.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const { name, quote } = testimonials[index];

  const faqs = [
    {
      q: "Is Recov free?",
      a: "Yes, the platform is completely free to use for reporting and searching.",
    },
    {
      q: "Is my data safe?",
      a: "Your contact details are protected and only shared if a match is found.",
    },
    {
      q: "What kind of items can I report?",
      a: "Anything from phones, bags, IDs, pets, keys, and even sentimental items.",
    },
  ];

  const [openIndex, setOpenIndex] = useState();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans bg-white text-gray-900">
      <PostModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#05080F] to-[#0a0f1c] overflow-hidden px-6 py-12 text-white">
        {/* Glowing Animated Blobs */}
        <div className="absolute w-[600px] h-[600px] bg-cyan-400 rounded-full blur-3xl opacity-20 animate-blob1 mix-blend-screen top-[-100px] left-[-150px] pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full blur-2xl opacity-20 animate-blob2 mix-blend-screen bottom-[-120px] right-[-100px] pointer-events-none" />
        <div className="absolute w-[300px] h-[300px] bg-violet-600 rounded-full blur-2xl opacity-15 animate-blob3 mix-blend-screen top-[40%] left-[50%] pointer-events-none" />

        {/* Floating Stars Overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.5px] animate-pulse" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl text-center space-y-6 c-space">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight drop-shadow-[0_0_15px_rgba(0,255,255,0.35)]">
            Find What’s Lost. Reconnect <br />
            With What Matters.
          </h1>
          <p className="text-lg sm:text-xl text-white/80">
            Our smart network helps thousands recover lost belongings faster
            than ever.
          </p>
          <div className="flex justify-center gap-4">
            {user ? (
              <button
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-200"
                onClick={() => setModalOpen(true)}
              >
                Report a lost or found item
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 px-6 rounded-full shadow-lg transition duration-200">
                  Get Started
                </button>
              </Link>
            )}
            <button className="hidden sm:flex bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-full backdrop-blur-md transition duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="relative py-24 bg-gradient-to-b from-[#0a0f1c] to-[#05080F] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10 c-space">
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-14 drop-shadow-[0_0_10px_rgba(0,255,255,0.25)]">
            What Makes Us Unique
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2C8 2 5 5.5 5 9.5c0 5 7 12.5 7 12.5s7-7.5 7-12.5C19 5.5 16 2 12 2z"
                    />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                ),
                title: "Real-Time Location Alerts",
                desc: "Be instantly notified when a matching item is found near you.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l6.16-3.422A12.042 12.042 0 0121 16.944V19a1 1 0 01-1 1h-4.5"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14L5.84 10.578A12.042 12.042 0 003 16.944V19a1 1 0 001 1h4.5"
                    />
                  </svg>
                ),
                title: "Secure Community Match",
                desc: "Connect safely with people who found or lost items.",
              },
              {
                icon: (
                  <svg
                    className="w-12 h-12 text-violet-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10l4.553-2.276a1 1 0 000-1.448L15 4M9 14l-4.553 2.276a1 1 0 000 1.448L9 20M15 10L9 14M15 10v10M9 14V4"
                    />
                  </svg>
                ),
                title: "Smart Matching System",
                desc: "AI-powered item matching for faster reunions.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md transition-transform hover:shadow-xl hover:-translate-y-2 duration-300 ease-in-out"
              >
                <div className="mb-6 flex justify-center">{icon}</div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-white/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}

      <section
        id="how-it-works"
        className="relative py-28 bg-gradient-to-b from-[#05080F] to-[#0a0f1c] text-white overflow-hidden"
      >
        {/* Static background glow shapes */}
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-cyan-400 opacity-10 rounded-full blur-[150px] z-0 pointer-events-none" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[600px] h-[600px] bg-pink-500 opacity-10 rounded-full blur-[150px] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto c-space">
          <h3 className="text-4xl sm:text-5xl font-extrabold text-center mb-20 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
            How It Works
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-6 grid-rows-[repeat(3,_minmax(180px,_1fr))] gap-6 auto-rows-auto">
            {/* Report */}
            <div className="relative group col-span-3 row-span-2 rounded-3xl overflow-hidden transition-all duration-300">
              <div className="absolute -top-10 -left-10 w-60 h-60 bg-cyan-400 opacity-0 group-hover:opacity-30 blur-3xl rounded-full transition duration-500 pointer-events-none" />
              <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-lg p-6 h-full rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30">
                <h4 className="text-xl font-bold text-cyan-400 mb-2">
                  Step 1: Report
                </h4>
                <p className="text-white/80 text-sm">
                  Upload details of your lost or found item including photos,
                  descriptions, and last known location.
                </p>
                <div className="mt-4 text-xs text-white/50">
                  📍 Real-time GPS optional
                </div>
              </div>
            </div>

            {/* AI Match */}
            <div className="relative group col-span-3 row-span-1 rounded-3xl overflow-hidden transition-all duration-300">
              <div className="absolute top-[-20px] right-[-20px] w-56 h-56 bg-pink-500 opacity-0 group-hover:opacity-30 blur-3xl rounded-full transition duration-500 pointer-events-none" />
              <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-md p-6 h-full rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-pink-500/30">
                <h4 className="text-lg font-semibold text-pink-400 mb-1">
                  Step 2: Match
                </h4>
                <p className="text-white/80 text-sm">
                  Our AI scans submissions to detect item similarities & connect
                  possible matches within seconds.
                </p>
              </div>
            </div>

            {/* AI Visual */}
            <div className="relative group col-span-3 row-span-1 rounded-3xl overflow-hidden transition-all duration-300">
              <div className="absolute bottom-[-20px] left-[-20px] w-56 h-56 bg-cyan-400 opacity-0 group-hover:opacity-30 blur-3xl rounded-full transition duration-500 pointer-events-none" />
              <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-md p-6 h-full rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30">
                <h4 className="text-lg font-semibold text-cyan-400 mb-1">
                  Step 2.5: AI Visual
                </h4>
                <p className="text-white/80 text-sm">
                  A confidence indicator updates in real-time to show how likely
                  a match is — powered by our smart learning engine.
                </p>
              </div>
            </div>

            {/* Reunite */}
            <div className="relative group col-span-2 row-span-2 rounded-3xl overflow-hidden transition-all duration-300">
              <div className="absolute top-[30%] left-[30%] w-44 h-44 bg-violet-500 opacity-0 group-hover:opacity-25 blur-3xl rounded-full transition duration-500 pointer-events-none" />
              <div className="relative z-10 bg-white/5 border border-white/10 backdrop-blur-lg p-6 h-full rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-violet-500/30">
                <h4 className="text-xl font-bold text-violet-400 mb-2">
                  Step 3: Reunite
                </h4>
                <p className="text-white/80 text-sm">
                  Confirm match and safely meet the person who found your item.
                  Or receive guidance to pick it up.
                </p>
                <div className="mt-4 text-xs text-white/50">
                  🛡️ Secure handoff. Verified by system.
                </div>
              </div>
            </div>

            {/* Highlight */}
            <div className="relative group col-span-4 row-span-2 rounded-3xl overflow-hidden transition-all duration-300">
              <div className="absolute top-[-10%] right-[-10%] w-72 h-72 bg-white opacity-0 group-hover:opacity-10 blur-[100px] rounded-full transition duration-700 pointer-events-none" />
              <div className="relative z-10 bg-gradient-to-r from-cyan-400 via-pink-400 to-violet-500 p-6 h-full rounded-3xl shadow-xl text-white text-center flex flex-col justify-center hover:shadow-2xl transition">
                <h4 className="text-xl font-bold mb-2">
                  Lost. Found. Reunited.
                </h4>
                <p className="text-white/90 text-sm">
                  One network. Infinite chances to get back what matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="relative py-28 bg-gradient-to-b from-[#0a0f1c] to-[#05080f] text-white overflow-hidden"
      >
        {/* Glowing Background Shapes */}
        <div className="absolute top-[-100px] left-[-150px] w-[400px] h-[400px] bg-cyan-500 opacity-10 rounded-full blur-[150px] z-0 pointer-events-none" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-pink-500 opacity-10 rounded-full blur-[160px] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto text-center c-space">
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-12 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
            Real Stories
          </h3>

          {/* Testimonial Card */}
          <div className="relative bg-white/5 border border-white/10 backdrop-blur-md px-10 py-20 rounded-3xl shadow-xl transition duration-500 overflow-hidden">
            {/* Floating glow on hover */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400 opacity-0 group-hover:opacity-20 blur-3xl rounded-full transition duration-500 pointer-events-none" />

            <p className="italic text-white/90 text-lg sm:text-xl mb-6 animate-fade-in">
              “{quote}”
            </p>
            <p className="text-cyan-400 font-bold text-base animate-fade-in">
              — {name}
            </p>

            {/* Navigation */}
            <div className="flex justify-center gap-6 mt-8">
              <button
                onClick={prev}
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition flex items-center gap-2"
              >
                <ChevronLeft size={20} /> Prev
              </button>
              <button
                onClick={next}
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition flex items-center gap-2"
              >
                Next <ChevronRight size={20} />
              </button>
            </div>

            {/* Dot Indicator */}
            <div className="mt-6 flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-cyan-400 scale-125 shadow-md shadow-cyan-400"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="relative py-28 bg-gradient-to-b from-[#0a0f1c] to-[#05080f] text-white overflow-hidden"
      >
        {/* Glowing Background Blobs */}
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-cyan-400 opacity-10 blur-[150px] rounded-full z-0 pointer-events-none" />
        <div className="absolute bottom-[-100px] right-[-150px] w-[500px] h-[500px] bg-pink-500 opacity-10 blur-[160px] rounded-full z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto text-center c-space">
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-12 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
            FAQs
          </h3>

          <div className="space-y-4 text-left">
            {faqs.map(({ q, a }, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md p-6 transition-all duration-300 group"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="font-semibold text-lg text-white transition">
                    {q}
                  </span>
                  <span className="text-cyan-400">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "mt-3 max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/80 text-sm">{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center bg-gradient-to-b from-[#0a0f1c] to-[#05080f]  text-white overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-cyan-400 rounded-full blur-3xl opacity-20 animate-blob1 mix-blend-screen top-[-100px] left-[-150px] pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500 rounded-full blur-2xl opacity-20 animate-blob2 mix-blend-screen bottom-[-120px] right-[-100px] pointer-events-none" />
        <div className="absolute w-[300px] h-[300px] bg-violet-600 rounded-full blur-2xl opacity-15 animate-blob3 mix-blend-screen top-[40%] left-[50%] pointer-events-none" />

        {/* Floating Stars Overlay */}
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,_#ffffff22_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.5px] animate-pulse" />

        {/* Glassy Overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[6px] z-[1] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl c-space">
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
            Don’t Wait. Start Your Search Today.
          </h3>
          <p className="text-lg sm:text-xl text-white/80 mb-8">
            Join thousands who’ve already been reunited with what they lost.
          </p>

          {user ? (
            <button
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition duration-300"
              onClick={() => setModalOpen(true)}
            >
              Report lost or found items Now
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-cyan-500/50 transition duration-300">
                Get started
              </button>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
