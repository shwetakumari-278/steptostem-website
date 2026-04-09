import { notFound } from "next/navigation";
import { locations } from "@/data/locations";
import CityClient from "./CityClient";

import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import CourseOfferBar from "@/components/CourseOfferBar";
export function generateStaticParams() {
  const params: {
    country: string;
    state: string;
    city: string;
  }[] = [];

  Object.entries(locations).forEach(([countrySlug, country]) => {
    Object.entries(country.states).forEach(([stateSlug, state]) => {
      state.cities.forEach((city) => {
        params.push({
          country: countrySlug,
          state: stateSlug,
          city: city.toLowerCase().replace(/\s+/g, "-"),
        });
      });
    });
  });

  return params;
}

type Props = {
  params: {
    country: string;
    state: string;
    city: string;
  };
};

export default function CityPage({ params }: Props) {
  const { country, state, city } = params;

  const countryData = locations[country as keyof typeof locations];
  if (!countryData) notFound();

  const stateData = (
    countryData.states as Record<string, { name: string; cities: string[] }>
  )[state];
  if (!stateData) notFound();

  const cityName = stateData.cities.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === city
  );
  if (!cityName) notFound();

  return (
    <>
      <Header />
      <CourseOfferBar
      course="all our courses"
      gradient="from-violet-600 to-pink-500"
    />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          {
            label: countryData.name,
            href: `/locations/${country}`,
          },
          {
            label: stateData.name,
            href: `/locations/${country}/${state}`,
          },
          { label: cityName },
        ]}
      />

      <CityClient cityName={cityName} />
    </>
  );
}
