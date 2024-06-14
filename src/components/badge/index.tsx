interface IBadgeComponentProps {
  title?: string;
}

export default function BadgeComponent({ title }: IBadgeComponentProps) {
  return (
    <div className="flex gap-1 items-center ">
      <span className="animate-ping w-1 h-1 bg-green-600 rounded-full" />
      <span className="text-[0.60rem]">{title}</span>
    </div>
  );
}
