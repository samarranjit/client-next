"use client";
import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import Footer from "@/components/Footer";
import { useNewsPosts } from "@/hooks/useNewsPosts";
import { NewsItem } from "@/types";
import { Spin } from "antd";

export default function NewsContent() {
  const {
    NewsPosts,
    isLoading,
    isLoadingMore,
    loadMoreNews,
    hasMoreNews,
    displayedCount,
    totalCount,
  } = useNewsPosts();

  return (
    <>
      <Navbar />
      <div className="relative top-10 md:top-[10px] lg:top-[0] max-w-[1600px] mx-auto pt-[60px] min-h-[100vh] mb-[150px] md:mb-[0px]">
        <div>
          <h2 className="text-3xl text-center p-2">
            <section className="border-b-tertiary border-b-[2px] inline p-2">
              Latest News
            </section>
          </h2>
        </div>

        {isLoading ? (
          <div className="h-[80vh] items-center justify-center flex p-5 mb-[50px]">
            <Spin className="font-bold text-2xl" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-7 justify-evenly gap-1 md:gap-10 lg:gap-20 width-[100%] mb-[2rem] items-center">
              {NewsPosts?.map((item: NewsItem) => {
                return <NewsCard key={item._id} prop={item} />;
              })}
            </div>

            {/* Load More Button */}
            {hasMoreNews && NewsPosts && NewsPosts.length > 0 && (
              <div className="flex justify-center mt-0 mb-[50px] md:mb-12 ">
                <button
                  onClick={loadMoreNews}
                  disabled={isLoadingMore}
                  type="button"
                  className="px-8 py-5 w-[275px] bg-secondary text-white border border-secondary hover:bg-transparent hover:border-2 hover:text-secondary transition-all cursor-pointer touch-manipulation text-lg font-medium  rounded-full duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoadingMore ? "Loading..." : "Load More News"}
                </button>
              </div>
            )}

            {/* No more news message */}
            {!hasMoreNews && displayedCount > 6 && totalCount > 6 && (
              <div className="text-center text-gray-500 mt-8 mb-12 p-3 bg-gray-50 rounded-lg text-sm max-w-md mx-auto">
                All news loaded ({totalCount} total)
              </div>
            )}

            {/* No news available message */}
            {NewsPosts && NewsPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg">No news available</p>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
