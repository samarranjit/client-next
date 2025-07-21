import { Metadata } from "next";
import { Suspense } from "react";
import NewsArticleContent from "../NewsArticleContent";
import Loader from "@/components/Loader";
import { getNewsById } from "@/utils/getNewsById";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getNewsById(id);

  // if (!article) return notFound();

  return {
    title: `${article?.heading} | The Cho Lab`,
    description: article?.body.join(" ").slice(0, 160),
    openGraph: {
      title: `${article?.heading} | The Cho Lab`,
      description: article?.body.join(" ").slice(0, 160),
      type: "article",
      url: `https://cholab.science/news/${id}`,
      images: [
        {
          url: article?.mainImage || "/StaticImages/BGRESEARCH.jpg",
          width: 1200,
          height: 630,
          alt: article?.heading || "News Article",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article?.heading} | The Cho Lab`,
      description: article?.body.join(" ").slice(0, 160),
      images: [article?.mainImage || "/StaticImages/BGRESEARCH.jpg"],
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
