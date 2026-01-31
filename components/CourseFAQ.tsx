"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { courseFaqs, homeFaqs } from "@/data/courseFaqs";


type Props = {
  courseKey: string;
  title?: string;
};

export default function CourseFAQ({
  courseKey,
  title = "Frequently Asked Questions",
}: Props) {
 const faqs =
  courseKey === "home" ? homeFaqs : courseFaqs[courseKey] || [];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">{title}</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                isOpen ? "bg-white shadow-md border-pink-400" : "bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left font-medium"
              >
                {faq.question}
                <ChevronDown
                  className={`transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
