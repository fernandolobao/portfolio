import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { educationInterface } from "@/config/education";
import { getDurationText } from "@/lib/utils";
import Image from "next/image";

interface EducationCardProps {
  educations: educationInterface[];
}

export default function EducationCard({ educations }: EducationCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {educations.map((education, id) => (
        <Link href={education.link} target="_blank" key={id}>
          <div className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground">
            <Icons.externalLink
              size={35}
              className="absolute bottom-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground "
            />
            <div className="flex h-[170px] flex-col justify-between rounded-md p-6 sm:h-[170px]">
              <div className="flex flex-row justify-between">
                <h3 className="font-bold flex space-x-2 items-center">
                  <div className="flex items-start gap-3 sm:gap-4">
                    {education.logo && (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-border overflow-hidden bg-white flex-shrink-0">
                        <Image
                          src={education.logo}
                          alt={education.institution}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <span>{education.degree}</span>
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {getDurationText(education.startDate, education.endDate)}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground flex space-x-2 items-center">
                  <Icons.gitOrgBuilding size={15} />
                  <span>{education.institution}</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
