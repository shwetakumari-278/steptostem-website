import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { studentProjects } from "@/data/studentProjects";

export default function StudentProjectsPreview() {
  const featuredProjects = studentProjects.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50" />
      <div className="absolute left-[-120px] top-10 z-0 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 z-0 h-80 w-80 rounded-full bg-pink-200/50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-purple-700">
              Student Projects
            </p>
            <h2 className="text-4xl font-extrabold leading-[1.32] tracking-normal text-gray-950 md:text-5xl md:leading-[1.24]">

              Real projects built by STEMxLearning students
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore websites, tools, and creative projects built by students
              during live coding and AI classes.
            </p>
          </div>

          <Link
            href="/student-projects/"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:shadow-xl"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[1.5rem] border border-white bg-white/85 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-purple-100">
  <img
    src={project.image}
    alt={`${project.title} student project`}
    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
  />
</div>


              <div className="p-6">
                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                  {project.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-950">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-purple-700">
                  Open project
                  <ExternalLink size={15} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
