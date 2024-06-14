import TitleComponent from "@/components/title";
import PrayerCard from "./cards";
import { HomeDialog } from "./dialog";
import {
  Briefcase,
  Cheers,
  Heartbeat,
  PiggyBank,
  UsersFour,
} from "@phosphor-icons/react";

export default function PrayersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end w-full">
        <HomeDialog />
      </div>

      <div className="flex flex-wrap gap-4 w-full justify-between">
        <TitleComponent Icon={Heartbeat} title="Saúde">
          <>
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
          </>
        </TitleComponent>

        <TitleComponent Icon={PiggyBank} title="Finanças">
          <>
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
          </>
        </TitleComponent>

        <TitleComponent Icon={Cheers} title="Casamento">
          <>
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
          </>
        </TitleComponent>

        <TitleComponent Icon={Briefcase} title="Profissão">
          <>
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
          </>
        </TitleComponent>

        <TitleComponent Icon={UsersFour} title="Familia">
          <>
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
            <PrayerCard description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt nibh eu orci malesuada, eu bibendum ipsum vehicula. Curabitur placerat eros condimentum scelerisque egestas. Nullam tortor ex, blandit eget orci ac, pretium suscipit dolor. " />
          </>
        </TitleComponent>
      </div>
    </div>
  );
}
