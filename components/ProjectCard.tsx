export default function ProjectCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden cursor-default">
      {/* Image */}
      <div className="h-40 w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
}
