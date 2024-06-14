import BadgeComponent from "@/components/badge";
import { HandsPraying } from "@phosphor-icons/react";

interface IPrayerCardProps {
  description: string;
}

export default function PrayerCard({ description }: IPrayerCardProps) {
  return (
    <div className="h-72 md:w-[378px] w-full rounded-lg border justify-between border-gray-200 p-4 flex flex-col shadow-lg">
      <div className="flex justify-between items-center">
        <span className="font-bold text-[1rem]">Titulo da oraçao</span>
        <BadgeComponent title="Novo" />
      </div>
      <span className="text-[0.875rem] leading-tight overflow-y-auto">
        {description}
      </span>
      <div className="flex justify-between items-center">
        <span className="text-[0.75rem] gap-1 flex items-center">
          <HandsPraying size={16} color="#0369A1" weight="duotone" />
          142
        </span>
        <span className="text-[0.75rem] text-amber-500">Saúde</span>
      </div>
    </div>
  );
}
