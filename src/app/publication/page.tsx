import { Metadata } from "next";
import { Suspense } from "react";
import PublicationContent from "@/app/publication/PublicationContent";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Publications | The Cho Lab",
  description:
    "Explore publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science.",
  keywords:
    "research publications, Cho Lab, Texas State University, San Marcos, hydrology, climate science, water resources, environmental research, lab achievements, research publications, Cho Lab news, Eunsang Cho, hydrology research, climate change updates, water resources research, environmental science news, new findings, scientific articles, peer-reviewed papers, hydrology publications, climate research publications, water sustainability research, environmental science publications, academic publications, research articles, scientific research, hydrology and climate science, water resources publications, environmental research publications",
  openGraph: {
    title: "Publications | The Cho Lab",
    description:
      "Explore publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science.",
    type: "website",
    url: "https://cholab.science/publication",
  },
  alternates: {
    canonical: "https://cholab.science/publication",
  },
  twitter: {
    card: "summary",
    title: "Publications | The Cho Lab",
    description:
      "Browse publications from Dr. Eunsang Cho and his team members at The Cho Lab, advancing research in hydrology, water resources, and climate science.",
    images: ["https://cholab.science/ChoLabLogo.png"],
  },
};

export default function PublicationPage() {
  return (
    <Suspense fallback={<Loader />}>
      <PublicationContent />
    </Suspense>
  );
}
