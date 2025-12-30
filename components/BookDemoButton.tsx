"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookDemoButton() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    grade: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;

    // Phone: only digits, max 10
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-24 z-40
                    bg-white/90 backdrop-blur-md
                    border border-purple-200
                    text-purple-700 px-5 py-3 rounded-full
                    shadow-lg font-semibold text-sm
                    hover:scale-105 transition-all"
      >
        📘 Book Free Demo
      </button>

      {/* Popup Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                Book a Free Demo Class
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setError("");

                  if (form.phone.length !== 10) {
                    setError("Phone number must be exactly 10 digits");
                    return;
                  }

                  setLoading(true);

                  const formData = new URLSearchParams();
                  formData.append("name", form.name);
                  formData.append("countryCode", form.countryCode);
                  formData.append("phone", form.phone);
                  formData.append("grade", form.grade);

                  fetch(
                    "https://script.google.com/macros/s/AKfycbz_oxnd37QWdcMnMr62hd2nxhUtuhmzA3sfO-6aJ7JOsKGHzd1-gSGUsAK-F0-SH5yZsw/exec",
                    {
                      method: "POST",
                      body: formData, // 👈 NO headers
                    }
                  )
                    .then((res) => res.text())
                    .then((text) => {
                      const data = JSON.parse(text);

                      if (!data.success) {
                        throw new Error(data.error || "Backend error");
                      }

                      alert("Demo request submitted!");
                      setForm({
                        name: "",
                        countryCode: "+91",
                        phone: "",
                        grade: "",
                      });
                      setOpen(false);
                    })
                    .catch((err) => {
                      console.error(err);
                      setError("Something went wrong. Please try again.");
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                }}
                className="space-y-4"
              >
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Student Name"
                  required
                  className="w-full p-3 border rounded-lg"
                />

                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="p-3 border rounded-lg bg-white"
                  >
                    <option value="+91">🇮🇳 India (+91)</option>
                    <option value="+1">🇺🇸 USA (+1)</option>
                    <option value="+44">🇬🇧 UK (+44)</option>
                    <option value="+61">🇦🇺 Australia (+61)</option>
                    <option value="+971">🇦🇪 UAE (+971)</option>
                    <option value="+65">🇸🇬 Singapore (+65)</option>
                    <option value="+92">🇵🇰 Pakistan (+92)</option>
                    <option value="+880">🇧🇩 Bangladesh (+880)</option>
                    <option value="+94">🇱🇰 Sri Lanka (+94)</option>
                  </select>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit Phone Number"
                    required
                    className="flex-1 p-3 border rounded-lg"
                  />
                </div>

                <input
                  name="grade"
                  value={form.grade}
                  onChange={handleChange}
                  placeholder="Class / Grade (e.g. 6, 7, 8)"
                  required
                  className="w-full p-3 border rounded-lg"
                />

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-lg font-semibold text-white
                    ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
                    }
                `}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>

              <button
                onClick={() => setOpen(false)}
                className="block mx-auto mt-4 text-gray-500"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
