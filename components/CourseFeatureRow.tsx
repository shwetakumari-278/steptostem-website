import { BarChart, Video, Award, Clock, Layers } from "lucide-react";

export default function CourseFeatureRow({ course }: { course: any }) {
  const FEATURE_ICON_COLOR: Record<string, string> = {
    "ai-ml": "text-purple-500",
    "web-dev": "text-blue-500",
    "game-design": "text-green-500",
    "app-development": "text-orange-500",
  };

  const featureIconColor =
    FEATURE_ICON_COLOR[course?.id ?? ""] || "text-blue-500";

  return (
    <div className="mt-8 rounded-xl bg-white border px-6 py-5">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
        <Feature
          icon={<BarChart className={featureIconColor} />}
          title="Suitable for"
          value="Grade 3–12"
        />
        <Feature
          icon={<Video className={featureIconColor} />}
          title="Program Delivery"
          value="Online"
        />
        <Feature
          icon={<Award className={featureIconColor} />}
          title="Certification by"
          value="STEM.org"
        />
        <Feature
          icon={<Clock className={featureIconColor} />}
          title="Duration"
          value="3–6 Months"
        />
        <Feature
          icon={<Layers className={featureIconColor} />}
          title="Program"
          value="50+ activities & projects"
        />
      </div>
    </div>
  );
}

function Feature({ icon, title, value }: any) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs text-gray-600">{value}</p>
      </div>
    </div>
  );
}
