"use client";

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { getNewsById } from "@/utils/getNewsById"; // Adjust the import path as needed
import { NewsItem } from "@/types";
// import axiosInstance from "@/lib/axiosInstance";

interface NewsArticleProps {
  id: string;
}

interface AxiosError {
  response?: {
    status: number;
  };
}

function isAxiosError(error: unknown): error is AxiosError {
  return (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    typeof (error as Record<string, unknown>).response === "object" &&
    (error as Record<string, unknown>).response !== null &&
    "status" in
      ((error as Record<string, unknown>).response as Record<string, unknown>)
  );
}

export default function NewsArticleContent({ id }: NewsArticleProps) {
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setIsLoading(true);
        const response = getNewsById(id);
        setArticle(response || null);
      } catch (error: unknown) {
        console.error("Error fetching article:", error);
        // If article not found, Next.js will show 404
        if (isAxiosError(error) && error.response?.status === 404) {
          notFound();
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <Loader />
        </div>
        <Footer />
      </>
    );
  }

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article?.heading,
    image: article?.mainImage,
    url: `https://cholab.science/news/${id}`,
    datePublished: article?.date,
    author: {
      "@type": "Person",
      name: "Eunsang Cho",
    },
    description: article?.body?.[0]?.slice(0, 150),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white  pt-10 md:pt-2">
        <div className="container max-w-[1775px] mx-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-5">
            {/* Article Header */}
            <header className="text-center mb-8 sm:mb-12 lg:mb-16 md:mt-5">
              <h1 className="text-xl md:text-2xl lg:text-3xl  font-light text-secondary leading-tight mb-4 px-2">
                {article?.heading}
              </h1>
              <div className="w-12 sm:w-16 lg:w-20 h-0.5 bg-tertiary mx-auto"></div>
            </header>

            {/* Article Content */}
            <article className="space-y-12 sm:space-y-10 lg:space-y-12">
              {/* Featured Image */}
              {article.mainImage && (
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl xl:h-[32rem]">
                  <img
                    src={article.mainImage}
                    alt={article.heading}
                    loading="lazy"
                    width={1920}
                    height={1080}
                    className="w-full aspect-video lg:aspect-[16/10] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>
              )}

              {/* Article Body */}
              <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl prose-gray max-w-none">
                <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                  <div>
                    Date:{" "}
                    {article?.date
                      ? new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Unknown"}
                  </div>
                  {article?.body?.map((paragraph, index) => (
                    <div
                      key={index}
                      className="prose dark:prose-invert max-w-4xl mx-auto text-gray-700 leading-relaxed font-light tracking-wide text-base sm:text-lg lg:text-xl"
                    >
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight, rehypeRaw]}
                        components={{
                          img: ({ ...props }) => (
                            <img
                              {...props}
                              alt={`${article?.heading}img_${index}`}
                              className="block mx-auto w-[75%] my-4 rounded-md shadow-md"
                              loading="lazy"
                            />
                          ),
                          a: ({ ...props }) => (
                            <a
                              {...props}
                              target="_blank"
                              rel="noopener noreferrer"
                              className=""
                            />
                          ),
                        }}
                      >
                        {paragraph}
                      </ReactMarkdown>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Other Images Section */}
            {article &&
              article?.otherImage?.length &&
              article?.otherImage?.length > 0 && (
                <div className="mt-10 sm:mt-12 lg:mt-16">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold mb-4 py-2 inline-block border-b-2 border-b-tertiary">
                      Other Images:
                    </h2>
                  </div>
                  <div className="bg- rounded-lg">
                    <Carousel
                      showArrows={true}
                      className="!h-full"
                      showStatus={false}
                      showIndicators={true}
                      showThumbs={false}
                      infiniteLoop={true}
                      autoPlay={true}
                      interval={3000}
                      transitionTime={500}
                      stopOnHover={true}
                      dynamicHeight={false}
                      emulateTouch={true}
                      swipeable={true}
                      // style={{ backgroundImage: `url(${article?.mainImage})` }}
                    >
                      {article?.otherImage.map((img, index) => (
                        <div
                          key={index}
                          className="h-[27rem] flex items-center justify-center"
                        >
                          <img
                            className="max-w-full max-h-full w-auto h-auto object-contain"
                            src={img}
                            loading="lazy"
                            alt={`${article?.heading}img-${index}`}
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>
                </div>
              )}

            {/* Decorative Element */}
            <div className="mt-6 sm:mt-14 lg:mt-16 text-center">
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
