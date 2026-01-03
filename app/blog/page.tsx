import Header from "@/components/Header";
import Link from "next/link";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-10">Blog</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h2 className="text-xl font-semibold group-hover:text-purple-600 transition">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mt-2 text-sm">{blog.excerpt}</p>

                  <p className="mt-4 text-xs text-gray-500">
                    {blog.author} • {blog.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
