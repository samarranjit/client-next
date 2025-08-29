"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MemberCard from "../../components/MemberCard";
import Loader from "../../components/Loader";
import { Button } from "antd";
import { TeamMember } from "@/types";
import { useTeamMembersDetails } from "@/hooks/useTeamMembersDetails";
import { FaExternalLinkAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("antd").then((m) => m.Modal), {
  ssr: false,
});
function OtherMember() {
  // For the modal:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeSection, setActiveSection] = useState("about");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // const { Data, showLoading }: AppContextType = useContext(allContexts);
  // console.log(Data?.team[0].img);

  const { data: memberDetails, isLoading } = useTeamMembersDetails();
  console.log("Member Details:", memberDetails);

  // Sorting the team data based on the "order" key
  const sortedTeam = memberDetails
    ?.slice()
    .sort((a: TeamMember, b: TeamMember) => a.order - b.order);

  return (
    <>
      <Modal
        title={null} // Remove default title for custom header
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable
        width="90vw"
        style={{ maxWidth: "900px" }}
        footer={null}
        className="member-modal"
      >
        {selectedMember && (
          <div className="p-0 overflow-hidden">
            {/* Header Section with improved layout */}
            <div className="bg-gradient-to-r from-slate-50 to-white p-6 md:p-8 border-b border-slate-100">
              <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                {/* Profile Image with better scaling */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto lg:mx-0 relative">
                    <Image
                      src={selectedMember.img || "/placeholder.svg"}
                      alt={selectedMember.name}
                      width={192}
                      height={192}
                      className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Member Info with better typography hierarchy */}
                <div className="flex-1 text-center lg:text-left space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                    {selectedMember.name}
                  </h2>
                  <p className="text-lg md:text-xl text-secondary font-medium">
                    {selectedMember.position}
                  </p>
                  <p className="text-slate-600 leading-relaxed max-w-2xl text-sm md:text-base">
                    {selectedMember.desc}
                  </p>

                  {/* Social Links with better styling */}
                  {selectedMember.linkedin && (
                    <div className="pt-2">
                      <Button
                        type="default"
                        size="middle"
                        className="bg-secondary text-primary hover:bg-secondary/90 transition-colors px-6 py-2 h-auto font-semibold rounded-lg shadow-sm"
                      >
                        <Link
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          LinkedIn
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Tabs with improved UX */}
            <div className="bg-white border-b border-slate-100 px-6 md:px-8 overflow-x-auto">
              <div className="flex gap-0 min-w-max md:min-w-0 md:justify-center py-4">
                {[
                  {
                    key: "about",
                    label: `About ${selectedMember.name.split(" ")[0]}`,
                    icon: "👤",
                  },
                  { key: "publications", label: "Publications", icon: "📄" },
                  { key: "contributions", label: "Contributions", icon: "⚡" },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    className={`
                px-6 py-3 font-semibold text-sm md:text-base whitespace-nowrap
                border-b-2 transition-all duration-200 hover:bg-slate-50
                ${
                  activeSection === tab.key
                    ? "border-tertiary text-slate-800 bg-slate-50"
                    : "border-transparent text-slate-600 hover:text-slate-800"
                }
              `}
                    onClick={() => setActiveSection(tab.key)}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area with improved scrolling and typography */}
            <div className="lg:p-6 md:p-8">
              {/* About Section */}
              {activeSection === "about" && (
                <div className="max-h-[50vh] md:h-[40vh]  overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
                  <div className="prose prose-slate max-w-none">
                    {selectedMember?.about ? (
                      <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-0">
                        {selectedMember.about}
                      </p>
                    ) : (
                      <p className="text-slate-500 italic text-center py-8">
                        No additional information available.
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Publications Section */}
              {activeSection === "publications" && (
                <div className="max-h-[50vh] md:h-[40vh] overflow-y-auto">
                  {selectedMember?.publications &&
                  selectedMember.publications?.length > 0 ? (
                    <div className="space-y-4">
                      {selectedMember?.publications.map(
                        (publication, index) => (
                          <div
                            key={`${selectedMember.id}-publication-${index}`}
                            className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
                            <div className="flex-1">
                              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                                {publication?.authors?.map((author, i) => {
                                  const citationFormat = `${
                                    selectedMember.name.split(" ")[
                                      selectedMember.name.split(" ").length - 1
                                    ]
                                  } ${selectedMember.name.split(" ")[0][0]}.`;
                                  if (author === citationFormat) {
                                    return (
                                      <span
                                        key={i}
                                        className="font-semibold"
                                      >{`${author}, `}</span>
                                    );
                                  }
                                  return <span key={i}>{`${author}, `}</span>;
                                })}
                                <span className="italic"></span>
                                {publication?.title ||
                                  "No publication details."}
                              </p>
                              {publication?.link && (
                                <Link
                                  href={publication.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2 font-medium"
                                >
                                  View Publication{" "}
                                  <FaExternalLinkAlt className="w-3 h-3" />
                                </Link>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <p className="text-slate-500 italic text-center py-8">
                      No publications available.
                    </p>
                  )}
                </div>
              )}

              {/* Contributions Section */}
              {activeSection === "contributions" && (
                <div className="max-h-[50vh] md:h-[40vh] overflow-y-scroll">
                  {selectedMember?.contributions?.length > 0 ? (
                    <div className="space-y-4">
                      {selectedMember.contributions.map(
                        (contribution, index) => (
                          <div
                            key={`${selectedMember.id}-contribution-${index}`}
                            className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
                            <div className="flex-1">
                              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                                {contribution?.desc ||
                                  "No contribution details."}
                              </p>
                              {contribution?.link && (
                                <Link
                                  href={contribution.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2 font-medium"
                                >
                                  View Details{" "}
                                  <FaExternalLinkAlt className="w-3 h-3" />
                                </Link>
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <p className="text-slate-500 italic text-center py-8">
                      No contributions listed.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-secondary p-7 px-5 md:p-9 md:px-[5rem]">
          <h1 className="flex justify-center items-center text-primary text-2xl font-semibold">
            Team Members:
          </h1>

          <div className="membercards_team_members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5 gap-2 gap-y-7 md:gap-[1rem] lg:gap-[2.5rem]">
            {sortedTeam &&
              sortedTeam.map((item: TeamMember) => (
                <div
                  key={`${item.name}-${item.id}`}
                  onClick={() => {
                    showModal();
                    setSelectedMember(item);
                  }}
                  className="cursor-pointer"
                >
                  <MemberCard
                    name={item.name}
                    img={item.img}
                    position={item.position}
                    email={item.email}
                    linkedin={item.linkedin}
                    desc={item.desc}
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default OtherMember;
