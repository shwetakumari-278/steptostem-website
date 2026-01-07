import { CheckCircle } from "lucide-react";

export default function CurriculumCard({ data }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 grid md:grid-cols-3 gap-6">
      {/* LEFT */}
      <div>
        <p className="text-sm text-orange-500 font-semibold">
          Module {data.module}
        </p>
        <h3 className="text-xl font-bold mt-1">{data.title}</h3>
        <p className="text-gray-600 mt-3 text-sm leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* MIDDLE */}
      <div>
        <h4 className="font-semibold text-orange-500 mb-3">
          Key Learning Outcomes
        </h4>
        <ul className="space-y-2 text-sm">
          {data.outcomes.map((item: string, i: number) => (
            <li key={i} className="flex gap-2 items-start">
              <CheckCircle size={16} className="text-green-500 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="text-sm space-y-2">
        <p>
          <strong>Language:</strong> {data.language}
        </p>
        <p>
          <strong>Platform:</strong>{" "}
          <span className="text-blue-600">{data.platform}</span>
        </p>
        <p>
          <strong>{data.lessons}</strong>
        </p>
      </div>
    </div>
  );
}
