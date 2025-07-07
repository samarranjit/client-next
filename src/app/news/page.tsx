import { Metadata } from "next";
import { Suspense } from "react";
import NewsContent from "./NewsContent";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "News | The Cho Lab",
  description:
    "Latest news and updates from the Cho Lab at Texas State University. Stay informed about our research, publications, achievements, and events.",
  keywords:
    "Research News, Cho Lab, Texas State University, San Marcos, updates, hydrology, climate science, water sustainability, environmental research, lab achievements, research publications, Cho Lab news, Eunsang Cho, hydrology research, climate change updates, water resources research, environmental science news",
  openGraph: {
    title: "News | The Cho Lab",
    description:
      "Latest news and updates from the Cho Lab at Texas State University. Stay informed about our research, publications, achievements, and events.",
    type: "website",
    url: "https://cholab.science/news",
  },
  alternates: {
    canonical: "https://cholab.science/news",
  },
};

export default function NewsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <NewsContent />
    </Suspense>
  );
}
