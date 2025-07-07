import { Metadata } from "next";
import { Suspense } from "react";
import NewsArticleContent from "../NewsArticleContent";
import Loader from "@/components/Loader";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  // In a real app, you'd fetch the article data here to generate dynamic metadata
  return {
    title: "News Article | The Cho Lab",
    description:
      "Latest news article from the Cho Lab at Texas State University.",
    openGraph: {
      title: "News Article | The Cho Lab",
      description:
        "Latest news article from the Cho Lab at Texas State University.",
      type: "article",
      url: `https://cholab.science/news/${id}`,
    },
    alternates: {
      canonical: `https://cholab.science/news/${id}`,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<Loader />}>
      <NewsArticleContent id={id} />
    </Suspense>
  );
}
