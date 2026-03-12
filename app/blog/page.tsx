import Header from "@/components/Header";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STEMxLearning Blog | Coding, AI & Technology Learning for Students",
  description:
    "Explore the STEMxLearning blog for insights on coding, AI, technology education, and digital skills for students. Practical guides and ideas to help young learners build real understanding and confidence with technology.",
  alternates: {
    canonical: "https://www.stemxlearning.com/blog",
  },
};
export default function BlogPage() {
  return (
    <>
      <Header />

      <section className="relative overflow-hidden py-24">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme5.jpg"
            alt="Blog background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-purple-50/60 to-blue-50/70" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-14 font-display">
            Blog
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden border border-gray-100/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-semibold group-hover:text-purple-600 transition">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <p className="mt-5 text-xs text-gray-500">
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
