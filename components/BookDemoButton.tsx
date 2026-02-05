"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function BookDemoButton({
  course,
  variant = "floating",
  label,
}: {
  course: string;
  variant?: "floating" | "inline";
  label?: string;
}) {
  console.log("COURSE PROP =", course);

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    grade: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const openHandler = () => setOpen(true);

    window.addEventListener("open-demo", openHandler);
    return () => window.removeEventListener("open-demo", openHandler);
  }, []);

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
      {/* FLOATING BUTTON */}
      {variant === "floating" && (
        <motion.button
          onClick={() => setOpen(true)}
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.04, 1],
            boxShadow: [
              "0 0 0px rgba(168,85,247,0.0)",
              "0 0 25px rgba(168,85,247,0.35)",
              "0 0 0px rgba(168,85,247,0.0)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
      fixed bottom-6 right-6 z-50
      flex items-center gap-4
      px-5 py-4
      rounded-2xl
      bg-white/90 backdrop-blur-md
      border border-purple-200
      shadow-xl
      hover:shadow-2xl
      hover:scale-[1.02]
      transition-all
    "
        >
          {/* TEXT */}
          <div className="text-left">
            <p className="font-semibold text-gray-900">
              {label ?? "🎓 Book  Free Demo Classes"}
            </p>

            <p className="text-sm text-purple-600">
              No payment • Try before enrolling
            </p>
          </div>

          {/* CHATBOT IMAGE AS LOGO */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border">
            <img
              src="/asset/chatbot.jpg"
              alt="StepToSTEM Demo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.button>
      )}

      {/* INLINE / SIDEBAR BUTTON */}
      {variant === "inline" && (
        <button
          onClick={() => setOpen(true)}
          className="
      w-full
      px-6 py-4
      rounded-2xl
      bg-gradient-to-r from-purple-600 to-blue-600
      hover:from-purple-700 hover:to-blue-700
      text-white
      shadow-lg shadow-purple-400/40
      hover:shadow-purple-500/60
      transition-all duration-300
      text-center
    "
        >
          <div className="text-lg font-semibold leading-snug">
            {label ?? "Schedule Free Demo Classes"}
          </div>

          <div className="text-sm opacity-90 mt-1">
            No payment • Try before enrolling
          </div>
        </button>
      )}

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
                  formData.append("course", course);

                  fetch(
                    "https://script.google.com/macros/s/AKfycbyIDIe1grYj6m43mPX1J6w4-JLBtamfOSZOnz90ewl07Ug4STGY_a_cSti3hCudAxqqXg/exec",
                    {
                      method: "POST",
                      body: formData, // 👈 NO headers
                    },
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

                <div className="flex gap-2 w-full">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="w-32 p-3 border rounded-lg bg-white shrink-0"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+1">🇨🇦 +1</option>

                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+39">🇮🇹 +39</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+31">🇳🇱 +31</option>
                    <option value="+41">🇨🇭 +41</option>
                    <option value="+46">🇸🇪 +46</option>
                    <option value="+47">🇳🇴 +47</option>

                    <option value="+966">🇸🇦 +966</option>
                    <option value="+974">🇶🇦 +974</option>
                    <option value="+968">🇴🇲 +968</option>
                    <option value="+973">🇧🇭 +973</option>
                    <option value="+965">🇰🇼 +965</option>

                    <option value="+81">🇯🇵 +81</option>
                    <option value="+82">🇰🇷 +82</option>
                    <option value="+86">🇨🇳 +86</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+66">🇹🇭 +66</option>
                    <option value="+62">🇮🇩 +62</option>

                    <option value="+92">🇵🇰 +92</option>
                    <option value="+880">🇧🇩 +880</option>
                    <option value="+94">🇱🇰 +94</option>
                    <option value="+977">🇳🇵 +977</option>

                    <option value="+27">🇿🇦 +27</option>
                    <option value="+234">🇳🇬 +234</option>
                    <option value="+254">🇰🇪 +254</option>

                    <option value="+55">🇧🇷 +55</option>
                    <option value="+52">🇲🇽 +52</option>
                    <option value="+54">🇦🇷 +54</option>
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
