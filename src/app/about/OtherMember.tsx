"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MemberCard from "../../components/MemberCard";
import Loader from "../../components/Loader";
import { Button, Modal } from "antd";
import { TeamMember } from "@/types";
import { useTeamMembersDetails } from "@/hooks/useTeamMembersDetails";
import { FaExternalLinkAlt } from "react-icons/fa";

function OtherMember() {
  // For the modal:
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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
        title={`${selectedMember?.name || "Member Details"}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        {selectedMember && (
          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-6 mb-6 items-center text-center md:items-start md:text-left">
              <div className="w-48 h-48 mx-auto md:mx-0 flex-shrink-0 flex flex-row">
                <Image
                  src={selectedMember.img || "/placeholder.svg"}
                  alt={selectedMember.name}
                  width={192}
                  height={192}
                  className="w-full h-full rounded-[50%] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h2 className="text-2xl font-bold text-slate-800 mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-lg text-secondary mb-4">
                  {selectedMember.position}
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {selectedMember.desc}
                </p>
                <div className="flex gap-3">
                  {selectedMember.linkedin && (
                    <Button
                      type="default"
                      size="small"
                      className="bg-secondary text-primary p-5 text-semibold text-lg"
                    >
                      <Link
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className="text-center py-5">
              <h3 className="text-xl font-semibold text-center inline border-b-2 border-tertiary">
                <section className="inline">⚒️</section>
                Contributions
              </h3>
            </div>
            <div className="">
              {selectedMember?.contributions?.map((contribution, index) => (
                <ul
                  style={{ listStyleType: "disc", paddingLeft: "20px" }}
                  key={`${selectedMember.id}-contribution-${index}`}
                  className="text-slate-600 leading-relaxed mb-4 flex"
                >
                  <li>
                    {contribution?.desc || "No contributions listed."}
                    {contribution?.link && (
                      <Link
                        href={contribution.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline ml-2"
                      >
                        <FaExternalLinkAlt />
                      </Link>
                    )}
                  </li>
                </ul>
              )) || (
                <p className="text-slate-600 leading-relaxed mb-4">
                  No contributions listed.
                </p>
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

          <div className="membercards_team_members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-[1rem] lg:gap-[2.5rem]">
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
