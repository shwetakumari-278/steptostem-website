export default function ComingSoonCard({ title }: { title: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">🚀 {title}</h1>
        <p className="text-gray-600 mb-6">
          This course is currently under preparation.  
          We’re building something amazing for your child.
        </p>
        <p className="text-sm text-gray-400">
          Launching very soon ✨
        </p>
      </div>
    </div>
  );
}
