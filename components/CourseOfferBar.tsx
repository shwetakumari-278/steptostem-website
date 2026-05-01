"use client";

export default function CourseOfferBar({
  course,
  gradient,
}: {
  course: string;
  gradient: string;
}) {
  return (
    <div className={`sticky top-20 z-[9999]  bg-gradient-to-r ${gradient} text-white`}>
      <div className="w-full px-4 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        <p className="text-sm font-medium text-center">
          🚀 <b>AI Summer Camp Offer:</b> Get <b>50% OFF</b> on {course} — Create Animations, websites & AI projects this summer! 🌞 <b>Limited seats!</b>
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