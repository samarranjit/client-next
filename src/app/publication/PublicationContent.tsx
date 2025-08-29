"use client";

import Navbar from "../../components/Navbar";
import PublicationCard from "./PublicationCard";
import Footer from "../../components/Footer";
import { PublicationItem } from "../../types/index"; // Adjust the import path as necessary
import { usePublicationsPosts } from "@/hooks/usePublicationsPosts";
import { Spin } from "antd";

function Publication() {
  // const { Data } = useContext(allContexts);
  const { PublicationsPosts, isLoading } = usePublicationsPosts();
  // Group publications by year
  const groupedPublications: Record<string, PublicationItem[]> | null =
    PublicationsPosts &&
    PublicationsPosts?.reduce(
      (acc: Record<string, PublicationItem[]>, item: PublicationItem) => {
        // Only process items with a "Published" status
        if (item.status === "Published" && item.date) {
          const year = new Date(item.date).getFullYear().toString(); // Extract year from date
          if (!acc[year]) acc[year] = [];
          acc[year].push(item);
        }
        return acc;
      },
      {}
    );

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPublications ?? {}).sort(
    (a, b) => Number(b) - Number(a)
  );

  const publicationsJsonLd = PublicationsPosts?.map((pub: PublicationItem) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: pub.title,
    author: {
      "@type": "Person",
      name: "Eunsang Cho",
    },
    datePublished: new Date(pub.date).getFullYear(),
    isPartOf: {
      "@type": "Periodical",
      name: pub.journal,
    },
    url: pub.link,
    image: pub.imgUrl,
    description: pub.details,
    doi: pub.doi, // Include DOI if available
  }));

  return (
    <div className="relative">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsJsonLd) }}
      />

      <Navbar />

      <div className="publications-div relative bg-white text-secondary p-5 md:p-7 top-0 md:top-[60px]">
        <h2 className="flex justify-center text-center p-2 md:p-3 text-secondary text-xl font-semibold md:text-2xl">
          <section className="inline border-b-[2px] border-tertiary p-2 md:p-auto pb-3">
            Eunsang Cho publications and links to papers
          </section>
        </h2>
        <div className="h-full w-full flex flex-col">
          <h2 className="items-center justify-center text-center text-xl w-full p-2 md:p-auto">
            Follow Dr. Cho on :
          </h2>
          <div className="cards flex flex-col gap-y-5 justify-center items-center md:flex-row md:flex-wrap my-5 md:justify-evenly md:gap-y-0">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://scholar.google.co.kr/citations?user=G6CX5wsAAAAJ&hl=en"
              className="p-3 md:py-2 md:px-5 google-scholar text-secondary cursor-pointer border-secondary border-[2.5px] flex w-[70%] md:w-auto justify-center font-semibold hover:bg-secondary hover:text-primary transition duration-500"
            >
              Google Scholar
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.researchgate.net/profile/Eunsang-Cho"
              className="p-3 md:py-2 md:px-5 research-gate text-tertiary cursor-pointer border-tertiary border-[2.5px] flex w-[70%] md:w-auto justify-center font-semibold hover:bg-tertiary hover:text-primary transition duration-500"
            >
              ResearchGate
            </a>
          </div>
        </div>

        <div className="in-revision pt-8 m-2 p-2 md:mx-7 md:p-auto justify-center items-start flex-col text-center">
          <h2 className="w-full md:w-[15%] lg:w-[100%] text-xl md:text-2xl text-center mx-auto">
            In Revision/ Preprint:
          </h2>
          <div className="border-b-[2px] border-b-secondary w-[50%] md:w-[15%] lg:w-[15%] mx-auto"></div>
          {isLoading ? (
            <div className="h-half items-center justify-center flex p-5">
              <Spin />
            </div>
          ) : (
            <div className="publication-cards p-1 md:p-5 w-full md:w-[90%] flex flex-col justify-center mx-auto px-0">
              {PublicationsPosts &&
                PublicationsPosts?.slice()
                  .reverse()
                  .map((item: PublicationItem) =>
                    item.status === "Review" ? (
                      <PublicationCard
                        key={item._id}
                        sequence={item.publication_sequence}
                        title={item.title}
                        details={item.details}
                        link={item.link}
                        imgUrl={item.imgUrl}
                        doi={item.doi} // Include DOI if available
                      />
                    ) : null
                  )}
            </div>
          )}
        </div>

        <div className="border-b-[2px] border-tertiary h-[5px]"></div>

        <div className="published py-5 px-0 m-1 md:px-8 md:mx-7 justify-center items-start flex-col">
          <h2 className="w-full md:w-[12%] lg:w-[100%] text-xl md:text-2xl mx-auto text-center">
            Published :
          </h2>
          <div className="border-b-[2px] border-b-secondary w-[50%] md:w-[15%] lg:w-[20q%] mx-auto"></div>
          {isLoading ? (
            <div className="h-screen itesm-center justify-center flex p-5">
              <Spin />
            </div>
          ) : (
            <div className="publication-cards w-full px-0 md:px-5">
              {sortedYears.map((year) => (
                <div key={year} className="justify-center item-center">
                  <div className="year-group mb-5 flex flex-col justify-center pt-7">
                    <h3 className="text-2xl font-semibold mb-3 w-full md:w-[15%] items-center">
                      {year} :
                    </h3>
                    <div className="publication-cards w-full md:w-[90%] flex flex-col justify-center mx-auto">
                      {groupedPublications
                        ? groupedPublications[year]?.map(
                            (item: PublicationItem) => (
                              <PublicationCard
                                key={item._id}
                                sequence={item.publication_sequence}
                                title={item.title}
                                details={item.details}
                                link={item.link}
                                imgUrl={item.imgUrl}
                                doi={item.doi} // Include DOI if available
                              />
                            )
                          )
                        : ""}
                    </div>
                  </div>
                  <div className="h-[2.5px] inline-block ma-auto bg-gray-200 w-[80%] justify-center items-center"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Publication;
