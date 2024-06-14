import { Heart } from "@phosphor-icons/react";

interface IPrayerCardProps {
  description: string;
}

export default function PrayerCard({ description }: IPrayerCardProps) {
  return (
    <div className="h-72 md:w-[378px] w-full rounded-lg border justify-between border-gray-200 p-4 flex flex-col shadow-lg">
      <span className="font-bold text-[1rem]">Titulo da oraçao</span>
      <span className="text-[0.875rem] leading-tight overflow-y-auto">
        {description}
      </span>
      <div className="flex justify-between items-center">
        <span className="text-[0.75rem] gap-1 flex items-center">
          <Heart size={14} color="#EF0101" weight="duotone" />
          142
        </span>
        <span className="text-[0.75rem] text-yellow-800">Saúde</span>
      </div>
    </div>
  );
}
