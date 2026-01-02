import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { locations } from "@/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";

export function generateStaticParams() {
  const params: { country: string; state: string }[] = [];

  Object.entries(locations).forEach(([countrySlug, country]) => {
    Object.keys(country.states).forEach((stateSlug) => {
      params.push({
        country: countrySlug,
        state: stateSlug,
      });
    });
  });

  return params;
}

type Props = {
  params: {
    country: string;
    state: string;
  };
};

export default function StatePage({ params }: Props) {
  const { country: countrySlug, state: stateSlug } = params;

  const country = locations[countrySlug as keyof typeof locations];
  if (!country) notFound();

  const stateRecord = country.states as Record<
    string,
    { name: string; cities: string[] }
  >;

  const state = stateRecord[stateSlug];

  if (!state) notFound();

  return (
    <>
      <Header />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: country.name, href: `/locations/${countrySlug}` },
          { label: state.name },
        ]}
      />

      <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Cities in <span className="gradient-text">{state.name}</span>
          </h1>

          <p className="text-center text-gray-600 mb-12">
            Select your city to explore courses and programs
          </p>

          {/* Cities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {state.cities.map((city) => {
              const citySlug = city.toLowerCase().replace(/\s+/g, "-");

              return (
                <Link
                  key={city}
                  href={`/locations/${countrySlug}/${stateSlug}/${citySlug}`}
                >
                  <div className="cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-center border hover:scale-[1.03]">
                    <h2 className="text-2xl font-bold mb-2">{city}</h2>
                    <p className="text-gray-600">Explore StepToSTEM programs</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
