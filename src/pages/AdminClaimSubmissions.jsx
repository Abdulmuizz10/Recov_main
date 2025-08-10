import React, { useContext } from "react";
import { Listbox } from "@headlessui/react";
import { Calendar, CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import ClaimContext from "../context/ClaimContext/ClaimContext";

const AdminClaimSubmissions = () => {
  const { claims, dispatch } = useContext(ClaimContext);

  const statusOptions = [
    { label: "Pending", value: false },
    { label: "Approved", value: true },
  ];

  const handleStatusChange = (claimId) => {
    dispatch({ type: "TOGGLE_APPROVED_STATUS", payload: claimId });
  };

  return (
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-white mb-8">Claim Submissions</h2>

      <div className="space-y-6">
        {claims?.map((claim) => (
          <div
            key={claim.id}
            className={`w-full border rounded-2xl px-5 py-8 backdrop-blur-md transition ${
              claim.isApproved
                ? "border-green-400/30 hover:shadow-green-400/20"
                : "border-white/10 hover:shadow-cyan-500/20"
            } bg-white/5 duration-300`}
            style={{ animation: "glow 4s infinite ease-in-out" }}
          >
            <div className="flex flex-col md:flex-row items-start  gap-6">
              {/* Left Section */}
              <div className="flex-1 space-y-2 text-white">
                <h4 className="text-lg font-bold text-cyan-400">
                  {claim.claimBy}
                </h4>
                <p className="text-white/80 text-sm">{claim.description}</p>
                <div className="text-xs text-white/60">📍 {claim.location}</div>
                <div className="text-xs text-white/60 flex items-center gap-1">
                  <Calendar size={14} />
                  {claim.claimDate}
                </div>

                <div className="w-full mt-4">{}</div>
              </div>

              {/* Right Select */}
              <div className="ml-auto w-full sm:w-60">
                <Listbox
                  value={claim.isApproved}
                  onChange={() => handleStatusChange(claim.id)}
                >
                  <div className="relative w-full sm:w-60">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-md bg-white/10 py-2 pl-4 pr-10 text-left text-white/80 shadow-inner border border-white/10 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition">
                      {
                        statusOptions.find(
                          (option) => option.value === claim.isApproved
                        )?.label
                      }
                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronsUpDownIcon className="h-5 w-5 text-white/60" />
                      </span>
                    </Listbox.Button>

                    <Listbox.Options className="absolute z-50 mt-2 w-full rounded-md bg-[#0a0f1c] backdrop-blur-md border border-white/10 text-white/80 shadow-lg ring-1 ring-black/10 focus:outline-none">
                      {statusOptions.map((option) => (
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
            </div>
          </div>
        ))}
      </div>

      {claims?.length === 0 && (
        <p className="text-center text-white/60 mt-10">
          No claims submitted yet.
        </p>
      )}
    </section>
  );
};

export default AdminClaimSubmissions;
