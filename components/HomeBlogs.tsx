"use client";

import Link from "next/link";
import { blogs } from "@/data/blogs";
import Image from "next/image";

export default function HomeBlogs() {
  // show 6 blogs (2 rows)
  const latestBlogs = blogs.slice(0, 6);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background (same family as FAQ but different image) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/asset/theme6.jpg"
          alt="Blog Background"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display">
            Learn with Our <span className="gradient-text">Latest Blogs</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {latestBlogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {blog.excerpt}
                </p>

                <p className="text-xs text-gray-500">
                  {blog.author} • {blog.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-14">
          <Link
            href="/blog"
            className="inline-block text-purple-600 font-medium hover:underline text-lg"
          >
            View all blogs →
          </Link>
        </div>
      </div>
    </section>
  );
}
