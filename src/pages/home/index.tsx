import PrayerCard from "./cards";
import { HomeDialog } from "./dialog";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <div className="flex justify-end w-full">
        <HomeDialog />
      </div>

      <div className="flex flex-wrap gap-4 w-full">
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
        <PrayerCard />
      </div>
    </>
  );
}
