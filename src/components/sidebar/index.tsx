import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HandsPraying, House, List, Notebook } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function SidebarComponent() {
  return (
    <Sheet>
      <SheetTrigger>
        <List size={24} />
      </SheetTrigger>
      <SheetContent side={"left"} className="md:w-[240px] bg-slate-100">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col items-start w-full gap-6 mt-6">
              <Link
                to="prayers"
                className="flex items-center gap-2 hover:font-bold"
              >
                <House size={20} /> Orações
              </Link>
              <Link
                to="praying-for"
                className="flex items-center gap-2 hover:font-bold"
              >
                <HandsPraying size={20} />
                Orando por...
              </Link>
              <Link
                to="my-prayers"
                className="flex items-center gap-2 hover:font-bold"
              >
                <Notebook size={20} />
                Minhas orações
              </Link>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
