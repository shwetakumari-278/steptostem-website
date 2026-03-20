"use client";

import { useState } from "react";
import { ChevronDown, CheckCircle } from "lucide-react";

export default function CurriculumAccordion({ module }: any) {
  const [open, setOpen] = useState(false);

  // SAFETY: normalize outcomes
  const outcomes: string[] = Array.isArray(module.outcomes)
    ? module.outcomes
    : [];

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left"
      >
        <div>
          {/* NEW SCRATCH FORMAT */}
          {module.goal ? (
            <>
              <p className="font-semibold text-base">{module.module}</p>
              <p className="text-sm text-gray-600 mt-1">
                <span className="font-medium">Goal:</span> {module.goal}
              </p>
            </>
          ) : (
            /* OLD FORMAT (OTHER COURSES) */
            <>
              <strong>{`${module.label ?? "Module"} ${module.module}:`}</strong>{" "}
<span>{module.title}</span>
            </>
          )}
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* BODY */}
      {open && (
        <div className="border-t px-5 py-4 space-y-4 text-sm">
          {/* OLD DESCRIPTION SUPPORT */}
          {module.description && (
            <p className="text-gray-600 leading-relaxed">
              {module.description}
            </p>
          )}

          {/* OUTCOMES / LESSONS */}
          {outcomes.length > 0 && (
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {outcomes.map((item: string, i: number) => (
                <li key={i} className="flex gap-2 items-start">
                  <CheckCircle size={14} className="text-green-500 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
