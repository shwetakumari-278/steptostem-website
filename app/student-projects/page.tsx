import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import BookDemoButton from "@/components/BookDemoButton";
import { studentProjects } from "@/data/studentProjects";

const pageUrl = "https://www.stemxlearning.com/student-projects/";

export const metadata: Metadata = {
  title: "Student Projects | Websites & AI Projects Built at STEMxLearning",
  description:
    "Explore real student projects built at STEMxLearning, including websites, tools, creative pages, and project-based coding work by kids and teens.",
  alternates: {
    canonical: pageUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Student Projects Built at STEMxLearning",
      url: pageUrl,
      description:
        "A showcase of websites, tools, and creative projects built by STEMxLearning students.",
      isPartOf: {
        "@type": "WebSite",
        name: "STEMxLearning",
        url: "https://www.stemxlearning.com/",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.stemxlearning.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Student Projects",
          item: pageUrl,
        },
      ],
    },
  ],
};

export default function StudentProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Header />

      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 text-gray-950">
        <section className="px-6 pb-16 pt-36">
          <div className="mx-auto max-w-7xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
              Student Projects
            </p>

            <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.18] tracking-normal md:text-6xl">
              Websites and creative projects built by STEMxLearning students
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              A curated showcase of student-built websites, tools, and creative
              projects created during live 1:1 coding and AI classes.
            </p>

            <div className="mt-9 inline-flex">
              <BookDemoButton
                course="General Enquiry"
                variant="inline"
                label="Book a Free Demo Class"
              />
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {studentProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-[1.5rem] border border-white bg-white/85 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden bg-purple-100">
                  <img
                    src={project.image}
                    alt={`${project.title} student project`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                    {project.category}
                  </span>

                  <h2 className="mt-4 text-xl font-bold text-gray-950">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {project.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-purple-700">
                    View live project
                    <ExternalLink size={15} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-white/85 p-8 text-center shadow-sm md:p-12">
            <h2 className="text-3xl font-extrabold leading-[1.2] md:text-4xl">
              What students learn while building these projects
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:grid-cols-3">
              {[
                "Planning a project idea",
                "Designing page layouts",
                "Using AI tools responsibly",
                "Building real websites",
                "Deploying projects online",
                "Explaining their work clearly",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-purple-50 px-5 py-4 text-sm font-semibold text-purple-800"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-sm leading-6 text-gray-500">
              Student projects are shared with permission. We avoid displaying
              private student details and focus on the learning outcome and
              project work.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
