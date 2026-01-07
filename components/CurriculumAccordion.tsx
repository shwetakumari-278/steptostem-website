"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

export default function CurriculumAccordion({ module }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* HEADER (SUMMARY) */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div>
          <strong>{`Module ${module.module}:`}</strong>{" "}
          <span>{module.title}</span>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* EXPANDED CONTENT */}
      {open && (
        <div className="border-t px-5 py-4 space-y-5 text-sm">
          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed">{module.description}</p>

          {/* OUTCOMES */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">
              What students will learn
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {module.outcomes.map((item: string, i: number) => (
                <li key={i} className="flex gap-2 items-start">
                  <CheckCircle size={14} className="text-green-500 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* META INFO */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-700">
              {module.language}
            </span>

            <span className="px-3 py-1 rounded-full bg-blue-50 text-xs text-blue-700">
              {module.platform}
            </span>

            <span className="px-3 py-1 rounded-full bg-purple-50 text-xs text-purple-700">
              {module.lessons}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
