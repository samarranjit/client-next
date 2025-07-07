"use client";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import { useNewsPosts } from "@/hooks/useNewsPosts";
import { NewsItem } from "@/types";

export default function NewsContent() {
  // const { Data } = useContext(allContexts);
  const { NewsPosts } = useNewsPosts();
  // Sort news in descending order by published date
  const sortedNews =
    NewsPosts && NewsPosts
      ? [...NewsPosts].sort((a: NewsItem, b: NewsItem) => {
          // Handle multiple possible date field names
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB.getTime() - dateA.getTime(); // Descending order (newest first)
        })
      : [];

  console.log("Sorted News:", sortedNews);

  return (
    <>
      <Navbar />
      <div className="relative top-10 md:top-[10px] lg:top-[0] max-w-[1600px] mx-auto pt-[60px] min-h-[100vh]">
        <div>
          <h2 className="text-3xl text-center p-2">
            <section className="border-b-tertiary border-b-[2px] inline p-2">
              Latest News
            </section>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-7 justify-evenly gap-1 md:gap-10 lg:gap-20 width-[100%] mb-[2rem] items-center">
          {sortedNews?.map((item: NewsItem) => {
            return <NewsCard key={item._id} prop={item} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
