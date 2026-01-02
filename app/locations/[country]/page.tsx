import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { locations } from "@/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  return Object.keys(locations).map((country) => ({
    country,
  }));
}

type Props = {
  params: {
    country: string;
  };
};

export default function CountryPage({ params }: Props) {
  const countrySlug = params.country;
  const country = locations[countrySlug as keyof typeof locations];

  if (!country) {
    notFound();
  }

  return (
    <>
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: country.name },
        ]}
      />

      <nav className="container mx-auto px-6 pt-6 text-sm text-gray-500">
        <span className="hover:underline cursor-pointer">Home</span>
        <span className="mx-2">/</span>
        <span className="hover:underline cursor-pointer">Locations</span>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">{country.name}</span>
      </nav>

      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          <section className="py-20 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              Step 2 of 3
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              States in <span className="gradient-text">{country.name}</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your state to view available cities and programs.
            </p>
          </section>

          <p className="text-center text-gray-600 mb-12">
            Choose your state to explore cities and courses
          </p>
          <section className="py-24 bg-white/60 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(country.states).map(([stateSlug, state]) => (
                  <Link
                    key={stateSlug}
                    href={`/locations/${countrySlug}/${stateSlug}`}
                  >
                    <div
                      className="
                        cursor-pointer
                        bg-white/80 backdrop-blur-sm
                        rounded-2xl p-8
                        shadow-lg
                        hover:-translate-y-1
                        hover:shadow-xl
                        transition-all duration-300
                        text-center
                        border
                    "
                    >
                      <h2 className="text-2xl font-bold mb-2">{state.name}</h2>
                      <p className="text-gray-600">
                        {state.cities.length}+ cities
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
