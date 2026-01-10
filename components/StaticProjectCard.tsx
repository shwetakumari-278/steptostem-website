type StaticProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tag?: string;
};

export default function StaticProjectCard({
  title,
  description,
  image,
  tag,
}: StaticProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-lg transition">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover"
        />

        {tag && (
          <span className="absolute top-3 left-3 text-xs font-semibold bg-purple-600 text-white px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
