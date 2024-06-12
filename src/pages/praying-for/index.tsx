import { PrayingForDialog } from "./dialog";
import PrayingForTable from "./table";

export default function PrayingForPage() {
  return (
    <>
      <h1>Orando por...</h1>
      <div className="flex justify-end w-full">
        <PrayingForDialog />
      </div>
      <div className="w-full">
        <PrayingForTable />
      </div>
    </>
  );
}
