"use client";

import BookDemoButton from "@/components/BookDemoButton";

export default function CourseOfferBar({
  course,
  gradient,
}: {
  course: string;
  gradient: string;
}) {
  return (
    <div
      className={`sticky top-20 z-40 bg-gradient-to-r ${gradient} text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm md:text-base font-medium text-center md:text-left">
          🎉 <b>New Year Special:</b> First <b>100 enrollments</b> get{" "}
          <b>50% scholarship</b> on {course}. Limited seats available!
        </p>

        {/* Uses SAME demo modal */}
        <div className="shrink-0">
          <button
            onClick={() => window.dispatchEvent(new Event("open-demo"))}
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
          >
            🎓 Book 10 Free Demo Classes
          </button>
        </div>
      </div>
    </div>
  );
}
