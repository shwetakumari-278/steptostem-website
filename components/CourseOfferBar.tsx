"use client";

export default function CourseOfferBar({
  course,
  gradient,
}: {
  course: string;
  gradient: string;
}) {
  return (
    <div className={`sticky top-20 z-40 bg-gradient-to-r ${gradient} text-white`}>
      <div className="w-full px-6 py-2.5 flex items-center justify-center gap-4">
        <p className="text-sm font-medium whitespace-nowrap">
          🌸 <b>April Special:</b> Get <b>50% OFF</b> on {course} this academic season — <b>Limited seats!</b>
        </p>
        <button
          onClick={() => window.dispatchEvent(new Event("open-demo"))}
          className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:scale-105 transition whitespace-nowrap shrink-0"
        >
          🎓 Book Free Demo
        </button>
      </div>
    </div>
  );
}