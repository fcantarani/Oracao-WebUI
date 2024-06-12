export default function PrayerCard() {
  return (
    <div className="h-60 w-[340px] rounded-lg border justify-between border-gray-100 p-4 flex flex-col shadow-lg gap-2">
      <span className="font-bold text-[1rem]">Titulo da oraçao</span>
      <span className="text-[0.875rem]">Descricao da oraçao</span>
      <div className="flex justify-between items-center">
        <span className="text-[0.75rem]">Counter</span>
        <span className="text-[0.75rem]">Categoria</span>
      </div>
    </div>
  );
}
