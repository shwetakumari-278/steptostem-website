import Header from "@/components/Header";
import { blogs } from "@/data/blogs";
import BlogContent from "@/components/BlogContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

 // wherever your blogs data is stored
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {

  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return {
      title: "Blog | STEMxLearning",
      description:
        "Insights on coding, AI, and technology learning for students and parents.",
      alternates: {
        canonical: "https://www.stemxlearning.com/blog",
      },
    };
  }

  return {
    title: `${blog.title} | STEMxLearning`,
    description: blog.excerpt,
    alternates: {
      canonical: `https://www.stemxlearning.com/blog/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | STEMxLearning`,
      description: blog.excerpt,
      url: `https://www.stemxlearning.com/blog/${blog.slug}`,
      siteName: "STEMxLearning",
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) notFound();

  return (
    <>
      <Header />

      <section className="relative overflow-hidden py-24">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <img
            src="/asset/theme6.jpg"
            alt="Blog reading background"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-purple-50/80" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-white/85 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              {blog.title}
            </h1>

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
        </div>
      </section>
    </>
  );
}
