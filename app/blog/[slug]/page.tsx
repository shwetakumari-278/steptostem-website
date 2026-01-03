import Header from "@/components/Header";
import { blogs } from "@/data/blogs";
import BlogContent from "@/components/BlogContent";
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return null;

  return (
    <>
      <Header />

      <section className="bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>

          <p className="text-gray-500 mb-10">
            {blog.author} • {blog.date}
          </p>

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full rounded-2xl shadow-xl mb-14"
          />

          <BlogContent html={blog.content} />
        </div>
      </section>
    </>
  );
}
