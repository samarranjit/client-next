"use client";
import { NewsItem } from "@/types";
import NewsCard from "../../components/NewsCard";
import { useNewsPosts } from "@/hooks/useNewsPosts";

function News() {
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
  return (
    <div className="p-7 my-2 md:p-[65px] md:my-0 flex flex-col max-w-[1904px] mx-auto">
      <p className="text-tertiary text-xl">Latest from the Lab</p>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 width-[100%] justify-evenly">
        {sortedNews?.slice(0, 3).map((item: NewsItem) => {
          return <NewsCard key={item._id} prop={item} />;
        })}
      </div>
    </div>
  );
}

export default News;
