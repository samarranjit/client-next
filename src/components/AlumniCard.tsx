import Image from "next/image";
import type { AlumniMember } from "@/types/index";

interface AlumniCardProps {
  member: AlumniMember;
}

export function AlumniCard({ member }: AlumniCardProps) {
  const defaultImage = "/images/alumni/defaultImages.png"; // Default image path

  return (
    <div className="group h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 bg-white rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex gap-6 h-full">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <div className="relative h-32 w-32 overflow-hidden rounded-full bg-gray-100">
              <Image
                src={member.imageUrl || defaultImage}
                alt={`${member.name} - Alumni`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="128px"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center space-y-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#005B96] font-lora">
                {member.name}
              </h3>
              <div className="flex flex-wrap gap-2 items-center">
                {member.graduationYear && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00A6D6]/10 text-[#00A6D6] border border-[#00A6D6]/20">
                    Class of {member.graduationYear}
                  </span>
                )}
              </div>
              {member.currentPosition && (
                <p className="text-sm font-medium text-[#F2994A] font-open">
                  {member.currentPosition}
                </p>
              )}
            </div>
            {/* <p className="text-sm text-gray-600 leading-relaxed font-open line-clamp-3">
              {member.description}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
